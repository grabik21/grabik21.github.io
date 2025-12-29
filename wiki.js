const title1 = document.getElementById('num1')
const title2 = document.getElementById('num2')
const title3 = document.getElementById('num3')
const title4 = document.getElementById('num4')
const testtext = document.getElementById('text')


const textscroll = document.getElementById('info-scroll')
const block = document.getElementById('mainb')

let i = 0
textscroll.addEventListener('click',()=>{
    if(i == 0){
        i = 1 
        block.classList.remove('block-main')
        block.classList.add('block-main1')
        textscroll.textContent = 'Выключить скролл'
    }
    else{
        i = 0
        block.classList.remove('block-main1')
        block.classList.add('block-main')
        textscroll.textContent = 'Включить скролл'

    }
})
// подблоки системы
const obsh = document.getElementById('obshinfo')
const limit = document.getElementById('limitfarm')
const brew = document.getElementById('brew')
const arm = document.getElementById('arm')
const craft = document.getElementById('craft')
const vol = document.getElementById('vol')
const shalk = document.getElementById('shalk')
const poch = document.getElementById('poch')
const camech = document.getElementById('camech')
const gran = document.getElementById('gran')
const shitel = document.getElementById('shitel')
const cmd = document.getElementById('cmd')
// кнопки меню
const obsh_cd = document.getElementById('infoobsh')
const limit_cd = document.getElementById('limitik')
const brew_cd = document.getElementById('brewrr')
const arm_cd = document.getElementById('armrs')
const craft_cd = document.getElementById('crafffts')
const vol_cd = document.getElementById('volleboll')
const shalk_cd = document.getElementById('shaaalcera')
const poch_cd = document.getElementById('nakooval')
const camech_cd = document.getElementById('camneeerez')
const gran_cd = document.getElementById('granica')
const shitel_cd = document.getElementById('shiiteli')
const cmd_cd = document.getElementById('commanf')
// Блоки основные
const min = document.getElementById('miest')
const ierarh = document.getElementById('irar')
const spons = document.getElementById('spons')
const sist = document.getElementById('sustem')
const cat = document.getElementById('catalog')
// кнопки


title1.addEventListener('click',()=>{
    testtext.textContent = 'Министерства'
    min.style.display = 'flex'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'none'
    cat.style.display = 'none'

    obsh.style.display = 'flex'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
title2.addEventListener('click',()=>{
    testtext.textContent = 'Спонсорство'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'flex'
    sist.style.display = 'none'
    cat.style.display = 'none'

    obsh.style.display = 'flex'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
title3.addEventListener('click',()=>{
    testtext.textContent = 'Иерархия и баллы'
    min.style.display = 'none'
    ierarh.style.display = 'flex'
    spons.style.display = 'none'
    sist.style.display = 'none'
    cat.style.display = 'none'

    obsh.style.display = 'flex'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
title4.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'flex'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
// кнопки каталога
obsh_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'flex'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
limit_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'flex'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
brew_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'flex'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
arm_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'flex'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
craft_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'flex'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
vol_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'flex'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
shalk_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'flex'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
poch_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'flex'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
camech_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'flex'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
gran_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'flex'
    shitel.style.display = 'none'
    cmd.style.display = 'none'
});
shitel_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'flex'
    cmd.style.display = 'none'
});
cmd_cd.addEventListener('click',()=>{
    testtext.textContent = 'Ситемы сервера'
    min.style.display = 'none'
    ierarh.style.display = 'none'
    spons.style.display = 'none'
    sist.style.display = 'flex'
    cat.style.display = 'flex'

    obsh.style.display = 'none'
    limit.style.display = 'none'
    brew.style.display = 'none'
    arm.style.display = 'none'
    craft.style.display = 'none'
    vol.style.display = 'none'
    shalk.style.display = 'none'
    poch.style.display = 'none'
    camech.style.display = 'none'
    gran.style.display = 'none'
    shitel.style.display = 'none'
    cmd.style.display = 'flex'
});