const courseQuizMap = {
  'basic-computer': [
    { q: 'តើអ្វីទៅជាមុខងារនៃ keyboard?', a: 'វាយអក្សរ និងបញ្ជា', options: ['វាយអក្សរ និងបញ្ជា', 'បង្ហាញរូបភាព', 'បោះពុម្ពឯកសារ', 'ទាញយកព័ត៌មាន'], explanation: 'Keyboard ត្រូវបានប្រើដើម្បីវាយអក្សរ និងបញ្ជាដល់កម្មវិធី។' },
    { q: 'តើខ្ញុំគួរធ្វើអ្វីនៅពេលកំពុងធ្វើការលើ Word ហើយរក្សាទុក?', a: 'រក្សាទុកជាប្រចាំ', options: ['រក្សាទុកជាប្រចាំ', 'លុបឯកសារ', 'បិទកុំព្យូទ័រ', 'មិនធ្វើអ្វី'], explanation: 'ការរក្សាទុកជាប្រចាំធានាថាថ្មីមិនបាត់បង់។' },
    { q: 'តើ File Explorer ជាអ្វី?', a: 'កម្មវិធីគ្រប់គ្រងឯកសារ', options: ['កម្មវិធីគ្រប់គ្រងឯកសារ', 'កម្មវិធីត្រួតពិនិត្យ web', 'កម្មវិធីចល័ត', 'កម្មវិធីបោះពុម្ព'], explanation: 'File Explorer ជួយអ្នកស្វែងរក និងនាំឯកសារទៅទីតាំងផ្សេង។' }
  ],
  'typing': [
    { q: 'តើ Home Row មាន key សំខាន់ណាដែលអ្នកត្រូវចង?', a: 'A S D F J K L ;', options: ['A S D F J K L ;', '1 2 3 4 5', 'Ctrl C V Z', 'Q W E R T Y'], explanation: 'Home row គឺជាកន្លែងដាក់ម្រាមដៃសម្រាប់ការវាយអក្សរដោយអង់អ៊ី។' },
    { q: 'Ctrl + S មានអត្ថន័យអ្វី?', a: 'រក្សាទុកឯកសារ', options: ['រក្សាទុកឯកសារ', 'បិទកម្មវិធី', 'លុបឯកសារ', 'ចម្លងឯកសារ'], explanation: 'Ctrl + S ជួយរក្សាទុកឯកសារនៅកន្លែងបច្ចុប្បន្ន។' }
  ],
  'word': [
    { q: 'តើ Save As ប្រើសម្រាប់អ្វី?', a: 'រក្សាទុកជាឯកសារថ្មី ឬជាមួយឈ្មោះថ្មី', options: ['រក្សាទុកជាឯកសារថ្មី ឬជាមួយឈ្មោះថ្មី', 'លុបអត្ថបទ', 'បើក webpage', 'បោះពុម្ព'], explanation: 'Save As ធ្វើឱ្យអ្នកអាចរក្សាទុកធាតុទុកជាឯកសារថ្មី។' },
    { q: 'តើ Keyboard shortcut អ្វីដែលប្រើកែប្រែ ?', a: 'Ctrl + Z', options: ['Ctrl + Z', 'Ctrl + Shift', 'Alt + F4', 'Win + D'], explanation: 'Ctrl + Z នាំអ្នកទៅកាន់ການមិនធ្វើវិញ។' }
  ],
  'excel': [
    { q: 'សមី formula ត្រឹមត្រូវសម្រាប់ Addition?', a: '=A1+B1', options: ['=A1+B1', 'A1+B1', '=SUM(A1:A2)', 'A1+B1/2'], explanation: 'Formula ត្រូវចាប់ផ្តើមដោយ = ហើយអាចប្រើ cell references។' },
    { q: 'តើ SUM(A1:A5) គណនាអ្វី?', a: 'ផលបូកទាំងអស់នៅក្នុង A1 ដល់ A5', options: ['ផលបូកទាំងអស់នៅក្នុង A1 ដល់ A5', 'ផលគុណ', 'តម្លៃតូចបំផុត', 'គណនាមធ្យម'], explanation: 'SUM បូកតម្លៃទាំងអស់ក្នុង range ដែលបានបញ្ជាក់។' }
  ],
  'powerpoint': [
    { q: 'តើ Slide គឺជាអ្វី?', a: 'ជាផ្ទាំងមួយក្នុងបទបង្ហាញ', options: ['ជាផ្ទាំងមួយក្នុងបទបង្ហាញ', 'អាស័យដ្ឋានម៉ាស៊ីន', 'ឯកសារភាពយន្ត', 'តារាងពិន្ទុ'], explanation: 'Slide គឺជាផ្ទាំងដែលមានអត្ថបទ និងរូបភាពក្នុងបទបង្ហាញ។' },
    { q: 'តើ Design theme ប្រើសម្រាប់អ្វី?', a: 'ការកំណត់ពណ៌ និងទម្រង់សម្រាប់បទបង្ហាញ', options: ['ការកំណត់ពណ៌ និងទម្រង់សម្រាប់បទបង្ហាញ', 'លុប slide', 'បោះពុម្ពឯកសារ', 'កែ text'], explanation: 'Theme រចនាមានឥទ្ធិពលលើភាពរាងកាយ និងពណ៌ក្នុងបទបង្ហាញ។' }
  ],
  'internet-safety': [
    { q: 'តើ phishing មានន័យអ្វី?', a: 'ការបោកប្រាស់ដោយមានការបញ្ជូនព័ត៌មានក្លែងក្លើម', options: ['ការបោកប្រាស់ដោយមានការបញ្ជូនព័ត៌មានក្លែងក្លើម', 'ការទាញយក file', 'ការអានទំព័របណ្តាញ', 'ការផ្លាស់ប្តូរពណ៌'], explanation: 'Phishing ផ្តល់ផ្លូវចេញទៅកាន់តំណក្លែងក្លើមដែលនឹងយកព័ត៌មានផ្ទាល់ខ្លួន។' },
    { q: 'តើអ្នកគួរធ្វើអ្វីប្រសិនបើទទួលបានអ៊ីមែលមិនស្គាល់?', a: 'មិនចុចតំណ ឬផ្តល់ពាក្យសម្ងាត់', options: ['មិនចុចតំណ ឬផ្តល់ពាក្យសម្ងាត់', 'ចុចភ្លាម', 'ធ្វើចុះបញ្ជី', 'ផ្ញើទៅមិត្ត'], explanation: 'ការយក្សីវាជំនួយសម្រាប់ប្រើប្រាស់ឱ្យបានសុវត្ថិភាព។' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page !== 'quiz') return;

  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('course') || 'basic-computer';
  const course = getCourseById(courseId);
  const questions = courseQuizMap[courseId] || courseQuizMap['basic-computer'];
  const wrapper = document.querySelector('#quizPanel');
  if (!wrapper) return;

  let currentIndex = 0;
  let score = 0;
  let selectedAnswer = null;

  function renderQuestion() {
    const q = questions[currentIndex];
    wrapper.innerHTML = `
      <div class="quiz-progress">
        <div class="mini-stat"><span>សំណួរ ${currentIndex + 1}/${questions.length}</span><strong>${Math.round(((currentIndex + 1) / questions.length) * 100)}%</strong></div>
        <div class="progress-bar" style="margin-top:12px;"><div class="progress-fill" style="width:${((currentIndex + 1) / questions.length) * 100}%"></div></div>
      </div>
      <h2>${q.q}</h2>
      <div class="option-list">
        ${q.options.map((option) => `
          <div class="option-item ${selectedAnswer === option ? 'selected' : ''}" data-option="${option}">${option}</div>
        `).join('')}
      </div>
      <div class="lesson-actions" style="margin-top:30px;">
        <button type="button" class="btn btn-secondary" id="prevQuestion">មុន</button>
        <button type="button" class="btn" id="nextQuestion">${currentIndex === questions.length - 1 ? 'បញ្ចប់' : 'បន្ទាប់'}</button>
      </div>
    `;

    wrapper.querySelectorAll('.option-item').forEach((item) => {
      item.addEventListener('click', () => {
        selectedAnswer = item.dataset.option;
        renderQuestion();
      });
    });

    document.querySelector('#prevQuestion')?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        selectedAnswer = null;
        renderQuestion();
      }
    });

    document.querySelector('#nextQuestion')?.addEventListener('click', () => {
      if (!selectedAnswer) {
        const alert = document.querySelector('#quizAlert');
        if (alert) alert.innerHTML = '<div class="alert alert-warning">សូមជ្រើសរើសចម្លើយមួយ។</div>';
        return;
      }

      if (selectedAnswer === q.a) {
        score += 1;
      }

      if (currentIndex === questions.length - 1) {
        const finalScore = Math.round((score / questions.length) * 100);
        const passed = finalScore >= 60;
        const resultText = passed ? 'អ្នកឆ្លងដំណើរការសំណួរ' : 'អ្នកត្រូវពិនិត្យឡើងវិញ';
        setQuizScores({ ...getQuizScores(), [course.id]: finalScore });
        wrapper.innerHTML = `
          <div class="quiz-card">
            <h2>លទ្ធផល</h2>
            <p>អ្នកបាន ${score}/${questions.length} ចម្លើយត្រឹមត្រូវ។</p>
            <h3>${finalScore}%</h3>
            <p>${resultText}</p>
            <div class="lesson-actions">
              <button type="button" class="btn btn-secondary" id="retakeQuiz">ធ្វើម្តងទៀត</button>
              <a href="course.html?id=${course.id}" class="btn">ត្រឡប់ទៅវគ្គ</a>
            </div>
          </div>
        `;
        document.querySelector('#retakeQuiz')?.addEventListener('click', () => {
          currentIndex = 0;
          score = 0;
          selectedAnswer = null;
          renderQuestion();
        });
      } else {
        currentIndex += 1;
        selectedAnswer = null;
        renderQuestion();
      }
    });
  }

  const header = document.querySelector('#quizHeader');
  if (header) {
    header.innerHTML = `<h1>តេស្ត ${course.title}</h1>`;
  }

  renderQuestion();
});
