document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page !== 'progress') return;
  updateAchievements();

  const statsWrap = document.querySelector('#progressStats');
  if (statsWrap) {
    const overview = getOverviewStats();
    statsWrap.innerHTML = `
      <div class="progress-card">
        <strong>${overview.percent}%</strong>
        <span>វឌ្ឍនភាពសរុប</span>
      </div>
      <div class="progress-card">
        <strong>${overview.completedCount}</strong>
        <span>មេរៀនបានបញ្ចប់</span>
      </div>
      <div class="progress-card">
        <strong>${overview.remaining}</strong>
        <span>មេរៀននៅសល់</span>
      </div>
      <div class="progress-card">
        <strong>${overview.courses}</strong>
        <span>វគ្គសិក្សា</span>
      </div>
    `;
  }

  const list = document.querySelector('#achievementList');
  if (list) {
    const achievements = buildAchievementList();
    list.innerHTML = achievements.map((item) => `
      <div class="achievement-item ${item.unlocked ? 'unlocked' : ''}">
        <div class="label ${item.unlocked ? 'success' : ''}">${item.unlocked ? 'បានដោះសោ' : 'មិនទាន់បាន'}</div>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </div>
    `).join('');
  }

  const continueBtn = document.querySelector('#continueLearning');
  if (continueBtn) {
    const last = getLastLesson();
    continueBtn.setAttribute('href', `lesson.html?course=${last.courseId}&lesson=${last.lessonId}`);
  }

  const courseList = document.querySelector('#courseProgressList');
  if (courseList) {
    const html = courses.map((course) => {
      const data = calculateProgress(course.id);
      return `
        <div class="card" style="margin-bottom: 16px;">
          <div class="card-body">
            <div class="panel-head">
              <h3>${course.title}</h3>
              <span class="label">${data.percentage}%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${data.percentage}%"></div></div>
            <p>${data.completed}/${data.total} មេរៀនបានបញ្ចប់</p>
          </div>
        </div>
      `;
    }).join('');
    courseList.innerHTML = html;
  }
});
