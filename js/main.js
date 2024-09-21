document.addEventListener('DOMContentLoaded', function () {
    const blogPosts = [
        {
            id: 1,
            title: "伊切尔-豹豹",
            description: "豹豹天下最可爱！",
            image: "images/image1.png",
            link: "https://wiki.biligame.com/sonw/%E4%BC%8A%E5%88%87%E5%B0%94%C2%B7%E8%B1%B9%E8%B1%B9",
            category: 1
        },
        {
            id: 2,
            title: "MC百科",
            description: "Minecraft资源搜索网站,各种模组,整合包,服务器,应有尽有",
            image: "images/mcmod.png",
            link: "https://www.mcmod.cn/",
            category: 1
        },
        {
            id: 3,
            title: "CrychicDoc",
            description: "一个由Crychic团队维护的我的世界文档 \n 涵盖了大部分的KubeJS教程与内容",
            image: "images/Crychic.png",
            link: "https://docs.mihono.cn/zh/",
            category: 4
        },
        {
            id: 4,
            title: "Minecraft Wiki",
            description: "Minecraft 中文Wiki是一个由玩家和开发者同维护的关于Minecraft的百科全书。\n 在这上面你可以查询任何关于Minecraft的资料以及更新信息",
            image: "https://th.bing.com/th/id/OIP.CV9L-PCKb75C6twh5-x52QAAAA?w=156&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
            link: "https://zh.minecraft.wiki/",
            category: 1
        },
        {
            id: 5,
            title: "CurseForge",
            description: "CurseForge -Minecraft \n 最大的Minecraft模组。资源包。材质包。地图。整合包。服务器插件下载平台。",
            image: "images/curseforge-logo.png",
            link: "https://www.curseforge.com/minecraft",
            category: 1
        },
        {
            id: 6,
            title: "Modrinth",
            description: "一个新兴的Minecraft资源网站。提供了模组。资源包。光影。整合包。服务器插件等资源的下载",
            image: "images/modrinth_logo.png",
            link: "https://modrinth.com/",
            category: 1
        },
        {
            id: 7,
            title: "芒果的KubeJS笔记",
            description: "一些關於 Minecraft 的 KubeJS 筆記",
            image: "https://kubejs-notes.pages.dev/logo.png",
            link: "https://kubejs-notes.pages.dev/zh-tw/",
            category: 4
        },
        {
            id: 8,
            title: "Bukkit",
            description: "CurseForge旗下的最大的服务器插件下载网站",
            image: "images/bukkit.png",
            link: "https://dev.bukkit.org/",
            category: 1
        },
        {
            id: 9,
            title: "KubeJS Tutorials",
            description: "这是KubeJS官方的教程网站,涵盖了许许多多KubeJS6教程,让刚上手KubeJS的玩家也可以快速开始他们的魔改之旅",
            image: "images/kubejs.png",
            link: "https://kubejs.com/wiki/tutorials/",
            category: 4
        },
        {
            id: 10,
            title: "latvian.dev Wiki",
            description: "这是latvian的KubeJS Wiki,虽然是一个较老的KubeJS Wiki,但是里面还是有许多关于KubeJS 5的教程",
            image: "images/latvian.png",
            link: "https://wiki.latvian.dev/",
            category: 4
        },
        {
            id: 11,
            title: "Masterful Machinery",
            description: "一个关于MM模组的官方教程网站，让你快速上手属于自己的自定义机械",
            image: "images/mm.png",
            link: "https://newdocs.masterfulmc.com/",
            category: 2
        },
        {
            id: 12,
            title: "Plant Minecraft",
            description: "一个Minecraft的资源网站,MC地球",
            image: "images/plantmc.png",
            link: "https://www.planetminecraft.com/",
            category: 1
        },
        {
            id: 13,
            title: "孤梦的KubeJS教程",
            description: "孤梦的KubeJs教程，评价：胎教级别，适合萌新\n 托管为CrychicDoc \n文档维护:孤梦 \n第三方文档主要维护:CrychicTeam",
            image: "https://www.github.com/Gu-meng.png",
            link: "https://docs.mihono.cn/zh/modpack/kubejs/1.20.1/KubeJSCourse/README",
            category: 4
        },
        {
            id: 14,
            title: "Lychee",
            description: "荔枝模组的官方文档教程-Lychee",
            image: "https://lycheetweaker.readthedocs.io/en/docs-1.20/images/site_icon.png",
            link: "https://lycheetweaker.readthedocs.io/en/docs-1.20/",
            category: 2
        },
        {
            id: 15,
            title: "Custom Machinery 1.16",
            description: "CM-1.16的官方教程",
            image: "images/cm.png",
            link: "https://frinn.gitbook.io/custom-machinery-1.16",
            category: 3
        },
        {
            id: 16,
            title: "Custom Machinery 1.18",
            description: "CM-1.18的官方教程",
            image: "images/cm.png",
            link: "https://frinn.gitbook.io/custom-machinery-1.18",
            category: 3
        },
        {
            id: 17,
            title: "Custom Machinery 1.19",
            description: "CM-1.19的官方教程",
            image: "images/cm.png",
            link: "https://frinn.gitbook.io/custom-machinery-1.19",
            category: 3
        },
        {
            id: 18,
            title: "Custom Machinery 1.21",
            description: "CM-1.21的官方教程",
            image: "images/cm.png",
            link: "https://frinn.gitbook.io/custom-machinery-1.21",
            category: 3
        },
        {
            id: 19,
            title: "KubeJS 中文论坛",
            description: "KubeJS 中文论坛,可以翻到许多大佬的教程",
            image: "images/kubejs.png",
            link: "https://kjscndev.flarum.cloud/",
            category: 4
        },
        {
            id: 20,
            title: "数据包生成器",
            description: "GIthub的开源项目Data Pack Generators,可以让你快速生成一个数据包,避免了繁琐的JSON填写过程",
            image: "images/icon-creeper.png",
            link: "https://misode.github.io/",
            category: 1
        }
    ];

    function createCard(post) {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="card-content">
                <h3>${post.title}</h3>
                <p id="card-description-${post.id}">${post.description.replace(/\n/g, '<br>')}</p>
                <a href="${post.link}" class="read-more" target="_blank">More Information</a>
            </div>
        `;
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
                let expanded = false;
                let originalHeight = paragraph.clientHeight;
                let expandedHeight = paragraph.scrollHeight;

                card.addEventListener('mouseenter', () => {
                    if (!expanded) {
                        paragraph.style.maxHeight = `${expandedHeight}px`;
                        expanded = true;
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (expanded) {
                        paragraph.style.maxHeight = `${originalHeight}px`;
                        expanded = false;
                    }
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
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                var target = this.getAttribute('href');
                smoothScroll(target, 1000);
            }
        });
    });

    window.addEventListener('resize', adjustCardLayout);
    adjustCardLayout(); 

    document.documentElement.style.setProperty('--primary-color', '#新颜色');

    function forceRefresh() {
        location.reload(true);
    }

    function addRandomQueryToURL(url) {
        return url + '?v=' + Math.random();
    }

    document.getElementById('mainStylesheet').href = addRandomQueryToURL('css/style.css');

    document.querySelectorAll('.menu-items a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                var target = this.getAttribute('href');
                smoothScroll(target, 1000); 
            }
        });
    });
});
