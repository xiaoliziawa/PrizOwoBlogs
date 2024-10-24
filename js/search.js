document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const backToTop = document.getElementById('back-to-top');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const pinyinSearchTerm = pinyinPro.pinyin(searchTerm, { toneType: 'none', type: 'array' }).join('').toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            const pinyinTitle = pinyinPro.pinyin(title, { toneType: 'none', type: 'array' }).join('').toLowerCase();
            const pinyinContent = pinyinPro.pinyin(content, { toneType: 'none', type: 'array' }).join('').toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm) ||
                pinyinTitle.includes(pinyinSearchTerm) || pinyinContent.includes(pinyinSearchTerm)) {
                card.style.opacity = '1';
                card.style.visibility = 'visible';
                card.style.position = 'relative';
                card.style.height = 'auto';
            } else {
                card.style.opacity = '0';
                card.style.visibility = 'hidden';
                card.style.position = 'absolute';
                card.style.height = '0';
            }
        });

        const cardContainers = document.querySelectorAll('.card-container');
        cardContainers.forEach(container => {
            const visibleCards = container.querySelectorAll('.card[style*="opacity: 1"]');
            if (visibleCards.length === 0 && searchTerm !== '') {
                container.parentElement.style.display = 'none';
            } else {
                container.parentElement.style.display = 'block';
            }
        });
    }

    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keydown', function(e) {
        // 允许所有默认的快捷键行为
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchInput.addEventListener('input', function(e) {
        if (e.target.value === '') {
            const cards = document.querySelectorAll('.card');
            const sections = document.querySelectorAll('section');
            
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.visibility = 'visible';
                card.style.position = 'relative';
                card.style.height = 'auto';
            });
            
            sections.forEach(section => {
                section.style.display = 'block';
            });
        }
    });

    // 确保搜索框可以正常选择文本
    searchInput.addEventListener('mousedown', function(e) {
        e.stopPropagation();
    });

    searchInput.addEventListener('selectstart', function(e) {
        e.stopPropagation();
    });

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
