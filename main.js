    const copyTextElement = document.getElementById('copyText');
    const notificationElement = document.getElementById('notification');
    const progressBarElement = document.getElementById('progressBar');
    const historyElement = document.getElementById('history');
    const butCloseElement = document.getElementById('butclose');
    const openHistElement = document.getElementById('openhist');
    const allllElement = document.getElementById('allll');

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

    // Открытие истории империи
    if (openHistElement) {
        openHistElement.addEventListener('click', () => {
            historyElement.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Закрытие истории империи
    if (butCloseElement) {
        butCloseElement.addEventListener('click', () => {
            historyElement.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
