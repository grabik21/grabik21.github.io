    const copyTextElement = document.getElementById('copyText');
    const notificationElement = document.getElementById('notification');
    const progressBarElement = document.getElementById('progressBar');

    copyTextElement.addEventListener('click', () => {
      const textToCopy = copyTextElement.innerText;

      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          notificationElement.style.display = 'block';
          progressBarElement.style.animation = ''; // Сброс анимации
          progressBarElement.offsetWidth; // Force reflow to restart animation
          progressBarElement.style.animation = 'shrink 2s linear';

          setTimeout(() => {
            notificationElement.style.display = 'none';
          }, 2000);
        })
        .catch(err => {
          console.error('Не удалось скопировать текст: ', err);
          alert('Не удалось скопировать текст в буфер обмена.');
        });
    });

const all = document.getElementById('allll');
const butopen = document.getElementById('openhist');
const historys = document.getElementById('history');
const butclose = document.getElementById('butclose');
const hed = document.getElementById('head');
butopen.addEventListener('click',()=>{
  all.style.display = 'none';
  historys.style.display = 'flex';
  window.scrollTo({ 
    top:0,
    behavior: 'smooth'
  })
  hed.style.backgroundColor = 'white'
});
butclose.addEventListener('click',()=>{
  all.style.display = 'flex';
  historys.style.display = 'none';
  hed.style.backgroundColor = ''
});