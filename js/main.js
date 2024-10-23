document.addEventListener('DOMContentLoaded', function () {
    function createCard(post) {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="card-content">
                <h3>${post.title}</h3>
                <p id="card-description-${post.id}">${post.description.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        card.addEventListener('click', function() {
            window.open(post.link, '_blank');
        });
        
        card.style.cursor = 'pointer';
        
        return card;
    }

    function renderCards() {
        const containers = document.querySelectorAll('.card-container');
        containers.forEach(container => {
            const category = parseInt(container.dataset.category);
            const categoryPosts = blogPosts.filter(post => post.category === category);
            categoryPosts.forEach(post => {
                const card = createCard(post);
                container.appendChild(card);

                const content = card.querySelector('.card-content');
                const paragraph = content.querySelector('p');
                
                paragraph.style.height = 'auto';
                const fullHeight = paragraph.offsetHeight;
                paragraph.style.height = '58px';
                
                card.addEventListener('mouseenter', () => {
                    paragraph.style.height = `${fullHeight}px`;
                    paragraph.style.overflow = 'visible';
                });

                card.addEventListener('mouseleave', () => {
                    paragraph.style.height = '58px';
                    paragraph.style.overflow = 'hidden';
                });
            });
        });
    }

    renderCards();

    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll('#top-nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                var target = this.getAttribute('href');
                smoothScroll(target, 1000);
            }
        });
    });

    window.addEventListener('resize', adjustCardLayout);
    adjustCardLayout();


    function forceRefresh() {
        location.reload(true);
    }

    function addRandomQueryToURL(url) {
        return url + '?v=' + Math.random();
    }

    document.getElementById('mainStylesheet').href = addRandomQueryToURL('css/style.css');

    document.querySelectorAll('.menu-items a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                var target = this.getAttribute('href');
                smoothScroll(target, 1000);
            }
        });
    });

    document.addEventListener('mousemove', (e) => {
        createFirework(e.clientX, e.clientY);
    });

    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
});
