// Управление показом/скрытием секций через навигацию
document.addEventListener('DOMContentLoaded', function() {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;
    
    // Находим все секции и div с id
    const allSections = document.querySelectorAll('section[id], .wiki-main > div[id], section div[id]');
    
    // Функция для скрытия всех секций
    function hideAllSections(showWelcome = false) {
        allSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Показываем заголовок и приветственное сообщение когда все секции скрыты
        if (showWelcome) {
            const wikiTitle = document.querySelector('h1.wiki-title');
            const wikiWelcome = document.getElementById('wiki-welcome');
            if (wikiTitle) {
                wikiTitle.style.display = 'block';
                wikiTitle.style.visibility = 'visible';
                wikiTitle.style.opacity = '1';
            }
            if (wikiWelcome) {
                wikiWelcome.style.display = 'flex';
                wikiWelcome.style.visibility = 'visible';
                wikiWelcome.style.opacity = '1';
                wikiWelcome.style.zIndex = '10';
                console.log('Приветственное сообщение показано');
            }
        }
    }
    
    // Функция для показа секции
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) {
            console.warn('Секция не найдена:', sectionId);
            return false;
        }
        
        // Если это div внутри секции, сначала находим родительскую секцию
        let parentSection = null;
        if (section.tagName === 'DIV') {
            // Ищем родительскую секцию
            parentSection = section.closest('section[id]');
            
            // Если не нашли через closest, ищем вручную
            if (!parentSection) {
                let parent = section.parentElement;
                while (parent && parent !== document.body && parent !== document.documentElement) {
                    if (parent.tagName === 'SECTION' && parent.id) {
                        parentSection = parent;
                        break;
                    }
                    parent = parent.parentElement;
                }
            }
        }
        
        // Скрываем все секции (не показываем приветствие)
        hideAllSections(false);
        
        // Скрываем заголовок и приветственное сообщение
        const wikiTitle = document.querySelector('h1.wiki-title');
        const wikiWelcome = document.getElementById('wiki-welcome');
        if (wikiTitle) {
            wikiTitle.style.display = 'none';
            wikiTitle.style.visibility = 'hidden';
        }
        if (wikiWelcome) {
            wikiWelcome.style.display = 'none';
            wikiWelcome.style.visibility = 'hidden';
        }
        
        // Показываем родительскую секцию ПЕРЕД тем, как показывать дочерний элемент
        if (parentSection) {
            parentSection.classList.add('active');
            console.log('Показана родительская секция:', parentSection.id);
        }
        
        // Показываем саму секцию
        section.classList.add('active');
        console.log('Показана секция:', sectionId, 'Тег:', section.tagName, 'ID:', section.id);
        
        // Плавная прокрутка к секции
        requestAnimationFrame(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        return true;
    }
    
    // Функция для обновления состояния подменю
    function updateSubmenuState() {
        const allLinks = sidebarNav.querySelectorAll('a[href^="#"]');
        const allListItems = sidebarNav.querySelectorAll('li');
        
        // Убираем класс has-active со всех элементов
        allListItems.forEach(li => li.classList.remove('has-active'));
        
        // Добавляем класс has-active к родителям активных ссылок
        allLinks.forEach(link => {
            if (link.classList.contains('active')) {
                const parentLi = link.closest('li');
                if (parentLi) {
                    let currentLi = parentLi.parentElement.closest('li');
                    while (currentLi) {
                        currentLi.classList.add('has-active');
                        currentLi = currentLi.parentElement.closest('li');
                    }
                }
            }
        });
    }
    
    // Делегирование событий для навигации
    sidebarNav.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            
            // Показываем секцию
            showSection(sectionId);
            
            // Обновляем активное состояние ссылок
            const allLinks = sidebarNav.querySelectorAll('a[href^="#"]');
            allLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Обновляем состояние подменю
            updateSubmenuState();
            
            // Обновляем URL без перезагрузки
            if (window.history && window.history.pushState) {
                history.pushState(null, '', href);
            }
        }
    });
    
    // Инициализация при загрузке
    function init() {
        // Сначала скрываем все секции и показываем приветствие
        hideAllSections(true);
        
        const hash = window.location.hash.substring(1);
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                showSection(hash);
                const activeLink = sidebarNav.querySelector(`a[href="#${hash}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    updateSubmenuState();
                }
                return;
            }
        }
        
        // При первой загрузке не показываем никакую секцию
        // Показывается приветственное сообщение
        const wikiWelcome = document.getElementById('wiki-welcome');
        const wikiTitle = document.querySelector('h1.wiki-title');
        if (wikiWelcome) {
            wikiWelcome.style.display = 'flex';
            wikiWelcome.style.visibility = 'visible';
            wikiWelcome.style.opacity = '1';
            wikiWelcome.style.position = 'absolute';
            wikiWelcome.style.top = '100px';
            wikiWelcome.style.left = '0';
            wikiWelcome.style.right = '0';
            wikiWelcome.style.zIndex = '10';
        }
        if (wikiTitle) {
            wikiTitle.style.display = 'block';
            wikiTitle.style.visibility = 'visible';
        }
        console.log('Инициализация завершена, показывается приветствие');
    }
    
    init();
    
    // Обработка изменения hash в URL
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showSection(hash);
            const allLinks = sidebarNav.querySelectorAll('a[href^="#"]');
            allLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === `#${hash}`) {
                    l.classList.add('active');
                }
            });
            updateSubmenuState();
        }
    });
});
