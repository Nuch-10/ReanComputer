document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (page === 'home') {
    renderHomePage();
  }

  if (page === 'courses') {
    renderCoursesPage();
  }

  if (page === 'course') {
    renderCoursePage();
  }

  if (page === 'lesson') {
    renderLessonPage();
  }

  if (page === 'about') {
    renderAboutPage();
  }

  if (page === 'help') {
    renderHelpPage();
  }

  if (page === 'glossary') {
    renderGlossaryPage();
  }

  if (page === 'shortcuts') {
    renderShortcutsPage();
  }

  renderQuickProgress();
});

function renderHomePage() {
  const featured = courses.slice(0, 6);
  const target = document.querySelector('#featuredCourses');
  if (target) {
    target.innerHTML = featured.map(courseCardMarkup).join('');
    decorateCourseCards(target);
  }
  const steps = document.querySelector('#howItWorks');
  if (steps) {
    steps.innerHTML = starterPath.map((item, index) => `
      <div class="step-card">
        <div class="step-no"><span>${index + 1}</span></div>
        <div class="step-icon" aria-hidden="true"><i class="fa-solid ${['fa-laptop', 'fa-keyboard', 'fa-folder-open', 'fa-file-word', 'fa-table-cells-large', 'fa-person-chalkboard', 'fa-shield-halved', 'fa-rocket'][index] || 'fa-circle-check'}"></i></div>
        <h3>${item}</h3>
        <p>ជំហាន ${index + 1} ក្នុងការរៀន និងបង្កើតទំនុកភាពជំនាញ។</p>
      </div>
    `).join('');
  }

  function getCourseIconClass(courseId) {
    const icons = {
      'basic-computer': 'fa-laptop',
      typing: 'fa-keyboard',
      word: 'fa-file-word',
      excel: 'fa-file-excel',
      powerpoint: 'fa-file-powerpoint',
      'internet-safety': 'fa-shield-halved',
      'practical-skills': 'fa-rocket'
    };
    return icons[courseId] || 'fa-book-open';
  }

  function decorateCourseCards(container) {
    container.querySelectorAll('.course-card').forEach((card) => {
      const link = card.querySelector('a[href*="course.html?id="]');
      const cover = card.querySelector('.course-cover');
      if (!link || !cover) return;
      const courseId = new URL(link.href, window.location.href).searchParams.get('id');
      cover.innerHTML = `<i class="fa-solid ${getCourseIconClass(courseId)}" aria-hidden="true"></i>`;
      cover.setAttribute('aria-label', 'រូបតំណាងវគ្គសិក្សា');
    });
  }
}

function renderCoursesPage() {
  const container = document.querySelector('#courseCatalog');
  if (!container) return;
  container.innerHTML = courses.map(courseCardMarkup).join('');
  decorateCourseCards(container);

  const filterBar = document.querySelector('#courseFilters');
  if (filterBar) {
    const init = '<button class="filter-pill active" data-level="all">ទាំងអស់</button>' +
      '<button class="filter-pill" data-level="កម្រិតដំបូង">កម្រិតដំបូង</button>' +
      '<button class="filter-pill" data-level="កម្រិតមធ្យម">កម្រិតមធ្យម</button>';
    filterBar.innerHTML = init;

    filterBar.querySelectorAll('.filter-pill').forEach((button) => {
      button.addEventListener('click', () => {
        filterBar.querySelectorAll('.filter-pill').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        const level = button.dataset.level;
        const visible = level === 'all' ? courses : courses.filter((course) => course.level === level);
        container.innerHTML = visible.map(courseCardMarkup).join('');
        decorateCourseCards(container);
      });
    });
  }
}

function renderCoursePage() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('id') || 'basic-computer';
  const course = getCourseById(courseId);
  const title = document.querySelector('#courseHeroTitle');
  const meta = document.querySelector('#courseMeta');
  const list = document.querySelector('#courseLessonList');
  const project = document.querySelector('#courseProject');

  if (title) title.textContent = course.title;
  if (meta) meta.innerHTML = renderCourseBadges(course);
  if (list) {
    list.innerHTML = course.lessons.map((lesson, index) => {
      const completed = getCompletedLessons().includes(`${course.id}:${lesson.id}`);
      return `
        <a class="lesson-item ${completed ? 'completed' : ''}" href="lesson.html?course=${course.id}&lesson=${lesson.id}">
          <span>${index + 1}.</span> ${lesson.title}
        </a>
      `;
    }).join('');
  }

  if (project) {
    const desc = course.project || 'លំហាត់បញ្ចប់វគ្គ';
    project.innerHTML = `
      <h3>គម្រោងចុងក្រោយ</h3>
      <p>${desc}</p>
      <div class="lesson-actions">
        <a href="lesson.html?course=${course.id}&lesson=${course.lessons[0].id}" class="btn">ចាប់ផ្តើមមេរៀន</a>
        <a href="quiz.html?course=${course.id}" class="btn btn-secondary">ធ្វើតេស្ត</a>
      </div>
    `;
  }
}

function renderLessonPage() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('course') || 'basic-computer';
  const lessonId = params.get('lesson') || 'basic-1';
  const course = getCourseById(courseId);
  const lesson = getLessonById(courseId, lessonId);
  const lessonIndex = course.lessons.findIndex((item) => item.id === lesson.id);

  const sidebar = document.querySelector('#lessonSidebar');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="panel-head">
        <h3>${course.title}</h3>
      </div>
      <div class="lesson-list">
        ${course.lessons.map((item, index) => {
          const key = `${course.id}:${item.id}`;
          const completed = getCompletedLessons().includes(key);
          const active = item.id === lesson.id ? 'active' : '';
          const locked = index > lessonIndex + 2 && !completed ? 'locked' : '';
          return `<a class="lesson-item ${completed ? 'completed' : ''} ${active} ${locked}" href="lesson.html?course=${course.id}&lesson=${item.id}">${index + 1}. ${item.title}</a>`;
        }).join('')}
      </div>
    `;
  }

  const container = document.querySelector('#lessonContent');
  if (!container) return;

  const lessonNumber = lessonIndex + 1;
  const completed = getCompletedLessons().includes(`${course.id}:${lesson.id}`);
  const prevLesson = course.lessons[lessonIndex - 1];
  const nextLesson = course.lessons[lessonIndex + 1];

  const stepsMarkup = lesson.steps.map((step, i) => `
    <li><strong>ជំហានទី ${i + 1}:</strong> ${step}</li>
  `).join('');

  const tipsMarkup = lesson.tips ? lesson.tips.map((tip) => `<li>${tip}</li>`).join('') : '';
  const mistakesMarkup = lesson.mistakes ? lesson.mistakes.map((mistake) => `<li>${mistake}</li>`).join('') : '';
  const exerciseMarkup = lesson.exercise ? lesson.exercise.map((ex) => `<li>${ex}</li>`).join('') : '';

  container.innerHTML = `
    <div class="lesson-header">
      <span class="label">មេរៀន ${lessonNumber}</span>
      <h2>${lesson.title}</h2>
      <p>${lesson.objective}</p>
    </div>

    <div class="lesson-section">
      <h3>គោលបំណងមេរៀន</h3>
      <p>${lesson.objective}</p>
    </div>

    <div class="lesson-section">
      <h3>សេចក្តីពន្យល់</h3>
      <p>${lesson.explanation}</p>
      <div class="callout"><strong>ឧទាហរណ៏:</strong> ${lesson.example}</div>
    </div>

    <div class="lesson-section">
      <h3>ជំហានអនុវត្ត</h3>
      <ul class="lesson-steps">${stepsMarkup}</ul>
    </div>

    <div class="lesson-section">
      <h3>គន្លឹះសំខាន់ៗ</h3>
      <ul class="tips">${tipsMarkup}</ul>
    </div>

    <div class="lesson-section">
      <h3>កំហុសដែលគួរជៀសវាង</h3>
      <ul class="mistakes">${mistakesMarkup}</ul>
    </div>

    <div class="lesson-section">
      <h3>លំហាត់អនុវត្ត</h3>
      <ul class="exercise-list">${exerciseMarkup}</ul>
    </div>

    <div class="lesson-actions">
      <a href="${prevLesson ? `lesson.html?course=${course.id}&lesson=${prevLesson.id}` : `course.html?id=${course.id}`}" class="btn btn-secondary">មេរៀនមុន</a>
      <button type="button" id="finishLessonBtn" class="btn ${completed ? 'btn-success' : ''}">${completed ? 'បានបញ្ចប់' : 'បញ្ចប់មេរៀន'}</button>
      <a href="${nextLesson ? `lesson.html?course=${course.id}&lesson=${nextLesson.id}` : `quiz.html?course=${course.id}`}" class="btn">មេរៀនបន្ទាប់</a>
    </div>
  `;

  const finishBtn = document.querySelector('#finishLessonBtn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      const key = `${course.id}:${lesson.id}`;
      const list = getCompletedLessons();
      if (!list.includes(key)) {
        list.push(key);
        setCompletedLessons(list);
        updateAchievements();
      }
      setLastLesson(course.id, lesson.id);
      finishBtn.classList.add('btn-success');
      finishBtn.textContent = 'បានបញ្ចប់';
      const sidebarItem = document.querySelector(`.lesson-item[href="lesson.html?course=${course.id}&lesson=${lesson.id}"]`);
      if (sidebarItem) sidebarItem.classList.add('completed');
      const alertPlace = document.querySelector('#lessonAlert');
      if (alertPlace) {
        alertPlace.innerHTML = `<div class="alert alert-success">មេរៀននេះត្រូវបានរក្សាទុកក្នុង localStorage ។</div>`;
      }
    });
  }

  const alert = document.querySelector('#lessonAlert');
  if (alert) {
    alert.innerHTML = completed ? '<div class="alert alert-success">អ្នកបានបញ្ចប់មេរៀននេះរួចហើយ។</div>' : '';
  }
}

function renderAboutPage() {
  const target = document.querySelector('#aboutCanvas');
  if (target) {
    target.innerHTML = `
      <div class="card-body">
        <h3>ម missions</h3>
        <p>យើងចង់ធ្វើឱ្យការរៀនជំនាញកុំព្យូទ័រមូលដ្ឋានកាន់តែងាយស្រួល សម្រាប់សិស្ស និស្សិត និងអ្នកដែលចង់បង្កើនជំនាញសម្រាប់ការសិក្សា និងការងារ។</p>
      </div>
    `;
  }
}

function renderHelpPage() {
  const target = document.querySelector('#faqList');
  if (target) {
    target.innerHTML = faqItems.map((item, index) => `
      <div class="card" style="margin-bottom:12px;">
        <div class="card-body">
          <button type="button" class="faq-toggle" style="background:none;border:0;display:flex;justify-content:space-between;width:100%;padding:0;cursor:pointer;font-weight:700;color:var(--text);">
            <span>${item.q}</span> <span>＋</span>
          </button>
          <div class="faq-answer" style="display:none; margin-top:12px; color:var(--muted);">${item.a}</div>
        </div>
      </div>
    `).join('');

    target.querySelectorAll('.faq-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const answer = btn.parentElement.querySelector('.faq-answer');
        const visible = answer.style.display === 'block';
        answer.style.display = visible ? 'none' : 'block';
      });
    });
  }
}

function renderGlossaryPage() {
  const target = document.querySelector('#glossaryList');
  if (target) {
    target.innerHTML = glossary.map((item) => `
      <div class="card">
        <div class="card-body">
          <div class="label">${item.term}</div>
          <h3>${item.khmer}</h3>
          <p>${item.meaning}</p>
          <div class="callout"><strong>ឧទាហរណ៍:</strong> ${item.example}</div>
        </div>
      </div>
    `).join('');
  }
}

function renderShortcutsPage() {
  const target = document.querySelector('#shortcutGrid');
  if (target) {
    target.innerHTML = shortcuts.map((item) => `
      <div class="card">
        <div class="card-body">
          <div class="label">${item.group}</div>
          <h3>${item.combo}</h3>
          <p>${item.action}</p>
        </div>
      </div>
    `).join('');
  }
}

function renderQuickProgress() {
  const progressWrap = document.querySelector('#quickProgress');
  if (!progressWrap) return;
  const stats = getOverviewStats();
  progressWrap.innerHTML = `
    <div class="mini-stat"><span>វឌ្ឍនភាពសរុប</span><strong>${stats.percent}%</strong></div>
    <div class="progress-bar" style="margin-top:12px;"><div class="progress-fill" style="width:${stats.percent}%"></div></div>
  `;
}
