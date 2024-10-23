document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const backToTop = document.getElementById('back-to-top');

    // 搜索功能
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
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

        // 重新排列可见卡片
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
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 清空搜索时恢复所有卡片
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

    // 返回顶部按钮
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
