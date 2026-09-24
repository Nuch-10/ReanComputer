document.addEventListener('DOMContentLoaded', () => {
  const practiceTasks = document.querySelector('#practiceTasks');
  if (!practiceTasks) return;

  const tasks = [
    {
      title: 'លំហាត់កណ្ដុរ',
      prompt: 'តើអ្នកត្រូវប្រើ Left click ឬ Right click ដើម្បីបើក menu Context? ',
      answer: 'អ្នកគួរប្រើ Right click ដើម្បីបង្ហាញ menu Context។'
    },
    {
      title: 'លំហាត់ក្ដារចុច',
      prompt: 'តើ Ctrl + S មានន័យអ្វី?',
      answer: 'Ctrl + S មានន័យរក្សាទុកឯកសារ។'
    },
    {
      title: 'លំហាត់ការគ្រប់គ្រងឯកសារ',
      prompt: 'តើអ្នកគួរប្រើអ្វីនៅពេលផ្លាស់ទីឯកសារទៅថតថ្មី?',
      answer: 'អ្នកអាចប្រើ Copy & Paste ឬ Cut & Paste។'
    },
    {
      title: 'លំហាត់ Word',
      prompt: 'តើអ្នកគួរដាក់កម្មវិធីអ្វីដើម្បីកែសម្រួលឯកសារ?',
      answer: 'អ្នកគួរប្រើ Microsoft Word។'
    }
  ];

  practiceTasks.innerHTML = tasks.map((task) => `
    <div class="practice-card">
      <h3>${task.title}</h3>
      <p>${task.prompt}</p>
      <button type="button" class="btn btn-secondary reveal-answer" data-answer="${task.answer}">បង្ហាញចម្លើយ</button>
    </div>
  `).join('');

  practiceTasks.querySelectorAll('.reveal-answer').forEach((button) => {
    button.addEventListener('click', () => {
      const feed = document.querySelector('#practiceFeedback');
      if (feed) {
        feed.innerHTML = `<div class="alert alert-success">${button.dataset.answer}</div>`;
      }
    });
  });

  const keyboardDemo = document.querySelector('#keyboardPractice');
  if (keyboardDemo) {
    const highlightKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'A', 'S', 'D', 'F', 'J', 'K', 'L'];
    keyboardDemo.innerHTML = `
      <div class="keyboard-demo">
        <div class="keyboard-row">
          ${['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].map((key) => `<span class="key">${key}</span>`).join('')}
        </div>
        <div class="keyboard-row">
          ${['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((k) => `<span class="key ${highlightKeys.includes(k) ? 'active' : ''}">${k}</span>`).join('')}
        </div>
        <div class="keyboard-row">
          ${['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((k) => `<span class="key ${highlightKeys.includes(k) ? 'active' : ''}">${k}</span>`).join('')}
        </div>
        <div class="keyboard-row">
          ${['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((k) => `<span class="key">${k}</span>`).join('')}
        </div>
      </div>
    `;
  }
});
