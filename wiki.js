const buton1 = document.getElementById('but1');
const buton2 = document.getElementById('but2');
const buton3 = document.getElementById('but3');
const buton4 = document.getElementById('but4');
const buton5 = document.getElementById('but5');
const buton6 = document.getElementById('but6');
const block1 = document.getElementById('bl1');
const block2 = document.getElementById('miest');
const block3 = document.getElementById('bl3');
const block4 = document.getElementById('cmd');
const block5 = document.getElementById('bl4');
const block6 = document.getElementById('bl6');
buton1.addEventListener('click',()=>{
  block1.style.display = 'flex';  
  block2.style.display = 'none';  
  block3.style.display = 'none';  
  block4.style.display = 'none';  
  block5.style.display = 'none';  
  block6.style.display = 'none';  
  console.log('открываем  1 блок')
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
buton2.addEventListener('click',()=>{
  block1.style.display = 'none';  
  block2.style.display = 'flex';  
  block3.style.display = 'none';  
  block4.style.display = 'none';  
  block5.style.display = 'none';  
  block6.style.display = 'none';  
  console.log('открываем  2 блок')
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
buton3.addEventListener('click',()=>{
  block1.style.display = 'none';  
  block2.style.display = 'none';  
  block3.style.display = 'flex';  
  block4.style.display = 'none';  
  block5.style.display = 'none';  
  block6.style.display = 'none';  
  console.log('открываем  3 блок')
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
buton4.addEventListener('click',()=>{
  block1.style.display = 'none';  
  block2.style.display = 'none';  
  block3.style.display = 'none';  
  block4.style.display = 'flex';  
  block5.style.display = 'none';  
  block6.style.display = 'none';  
  console.log('открываем  4 блок')
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
buton5.addEventListener('click',()=>{
  block1.style.display = 'none';  
  block2.style.display = 'none';  
  block3.style.display = 'none';  
  block4.style.display = 'none';  
  block5.style.display = 'flex';  
  block6.style.display = 'none';  
  console.log('открываем  5 блок')
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
buton6.addEventListener('click',()=>{
  block1.style.display = 'none';  
  block2.style.display = 'none';  
  block3.style.display = 'none';  
  block4.style.display = 'none';  
  block5.style.display = 'none';  
  block6.style.display = 'flex';  
  console.log('открываем  6 блок')
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
const detailsElements = document.querySelectorAll('.auto-open-details');
const summaryElements = document.querySelectorAll('.custom-summary');

detailsElements.forEach(detailsElement => {
    detailsElement.addEventListener('mouseover', () => {
        detailsElement.setAttribute('open', true);
    });

    detailsElement.addEventListener('mouseout', () => {
        detailsElement.removeAttribute('open');
    });
});

summaryElements.forEach(summaryElement => {
    summaryElement.addEventListener('click', (event) => {
        event.preventDefault();
    });
});   