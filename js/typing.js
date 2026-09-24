document.addEventListener('DOMContentLoaded', () => {
  const typingContainer = document.querySelector('#typingChallenge');
  if (!typingContainer) return;

  const phrases = [
    'កុំព្យូទ័រជួយអ្នករៀនសិក្សា និងធ្វើការងារបានល្អ។',
    'ការវាយអក្សរត្រឹមត្រូវ គឺជាជំនាញដែលគួរអនុវត្តជាប្រចាំ។',
    'រៀនពីមូលដ្ឋានមុនពេលធ្វើការងារស្មុគស្មាញ។',
    'អ៊ីនធឺណិត និងសុវត្ថិភាព គឺសំខាន់សម្រាប់អ្នកប្រើប្រាស់។'
  ];

  let current = 0;
  let startTime = null;
  let interval = null;
  let correct = 0;
  let incorrect = 0;

  const sampleText = typingContainer.querySelector('#typingSample');
  const input = typingContainer.querySelector('#typingInput');
  const timerEl = typingContainer.querySelector('#typingTimer');
  const wpmEl = typingContainer.querySelector('#typingWpm');
  const accEl = typingContainer.querySelector('#typingAccuracy');
  const scoreEl = typingContainer.querySelector('#typingScore');
  const resetBtn = typingContainer.querySelector('#typingReset');
  const resultBox = typingContainer.querySelector('#typingResult');

  function renderSample() {
    const phrase = phrases[current % phrases.length];
    sampleText.textContent = phrase;
    input.value = '';
    current += 1;
    correct = 0;
    incorrect = 0;
    timerEl.textContent = '60';
    wpmEl.textContent = '0';
    accEl.textContent = '0%';
    scoreEl.textContent = '0';
    resultBox.textContent = 'ចាប់ផ្តើមវាយអក្សរ...';
    startTime = null;
    clearInterval(interval);
  }

  function updateMetrics() {
    const typed = input.value.length;
    correct = [...input.value].filter((ch, index) => ch === sampleText.textContent[index]).length;
    incorrect = Math.max(typed - correct, 0);
    const minutes = Math.max((Date.now() - startTime) / 60000, 1 / 60);
    const wpm = Math.round((correct / 5) / minutes);
    const accuracy = typed ? Math.round((correct / typed) * 100) : 0;
    wpmEl.textContent = String(wpm);
    accEl.textContent = `${accuracy}%`;
    scoreEl.textContent = String(correct);
  }

  function startTyping() {
    if (!startTime) {
      startTime = Date.now();
      let secondsLeft = 60;
      interval = setInterval(() => {
        secondsLeft -= 1;
        timerEl.textContent = String(Math.max(secondsLeft, 0));
        if (secondsLeft <= 0) {
          clearInterval(interval);
          const accuracy = input.value.length ? Math.round((correct / input.value.length) * 100) : 0;
          const allScore = Math.round((correct / sampleText.textContent.length) * 100);
          resultBox.textContent = `លទ្ធផល៖ WPM ${wpmEl.textContent} | Accuracy ${accuracy}% | Score ${allScore}/100`;
          setStorage('studentai.typingResult', { accuracy, score: allScore, wpm: Number(wpmEl.textContent) });
        }
      }, 1000);
    }
  }

  input.addEventListener('input', () => {
    startTyping();
    if (input.value === sampleText.textContent) {
      clearInterval(interval);
      const accuracy = Math.round((correct / input.value.length) * 100);
      const finalWpm = Number(wpmEl.textContent);
      resultBox.textContent = `អបអរសាទរ! អ្នកវាយបានត្រឹមត្រូវ ${accuracy}% និង WPM ${finalWpm}`;
      setStorage('studentai.typingResult', { accuracy, score: accuracy, wpm: finalWpm });
      return;
    }
    updateMetrics();
  });

  resetBtn.addEventListener('click', () => {
    renderSample();
  });

  renderSample();
});
