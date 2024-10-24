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
        description: "Minecraft资源搜索网站，各种模组，整合包，服务器，应有尽有",
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
        description: "Minecraft 中文Wiki是一个由玩家和开发者共同维护的关于Minecraft的百科全书。\n 在这上面你可以查询任何关于Minecraft的资料以及更新信息",
        image: "images/Wiki.webp",
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
        image: "images/mangokubejs.png",
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
        description: "这是KubeJS官方的教程网站，涵盖了许许多多KubeJS6教程，让刚上手KubeJS的玩家也可以快速开始他们的魔改之旅",
        image: "images/kubejs.png",
        link: "https://kubejs.com/wiki/tutorials/",
        category: 4
    },
    {
        id: 10,
        title: "latvian.dev Wiki",
        description: "这是latvian的KubeJS Wiki，虽然是一个较老的KubeJS Wiki，但是里面还是有许多关于KubeJS 5的教程",
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
        description: "一个Minecraft的资源网站，MC球",
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
        description: "KubeJS 中文论坛，可以翻到许多大佬的教程",
        image: "images/kubejs.png",
        link: "https://kjscndev.flarum.cloud/",
        category: 4
    },
    {
        id: 20,
        title: "数据包生成器",
        description: "GIthub的源项目Data Pack Generators，可以让你快速生成一个数据包，避免了繁琐的JSON填写过程",
        image: "images/icon-creeper.png",
        link: "https://misode.github.io/",
        category: 1
    },
    {
        id: 21,
        title: "Plotz",
        description: "一款适用于Minecraft的免费 HTML5 建模器\n在网络浏览器中生成球体、椭球体、环面等。可以配合投影模组使用。",
        image: "images/plotz.png",
        link: "https://www.plotz.co.uk/",
        category: 1
    },
    {
        id: 22,
        title: "Minecraft Schematics",
        description: "建筑投影地图下载",
        image: "images/blueprint_100.webp",
        link: "https://www.minecraft-schematics.com/",
        category: 1
    },
    {
        id: 23,
        title: "吕不才",
        description: "分享关于KubeJS的教程以及案例",
        image: "images/lvbucai.avif",
        link: "https://space.bilibili.com/9456011",
        category: 5
    },
    {
        id: 24,
        title: "是孤梦啊",
        description: "分享关于KubeJS的教程以及案例",
        image: "images/gumeng.avif",
        link: "https://space.bilibili.com/16632546?spm_id_from=333.337.0.0",
        category: 5
    },
    {
        id: 25,
        title: "安宁uiu",
        description: "分享关于KubeJS的有趣案例",
        image: "images/anning.avif",
        link: "https://space.bilibili.com/605013808?spm_id_from=333.337.0.0",
        category: 5
    },
    {
        id: 26,
        title: "芒果冻布丁",
        description: "分享关于KubeJS的有趣案例以及一些有趣的Minecraft视频",
        image: "images/mango.avif",
        link: "https://space.bilibili.com/430008973",
        category: 5
    },
    {
        id: 27,
        title: "LootJS Legacy",
        description: "LootJS Github Wiki，游戏版本:1.16.5/1.18.2/1.19.2\n 1.19.2的适用于1.20.1\nGithub页面，若打不开请挂木棍",
        image: "images/lootjs.jpg",
        link: "https://github.com/AlmostReliable/lootjs/wiki",
        category: 2
    },
    {
        id: 28,
        title: "LootJS",
        description: "LootJS的最新版本Wiki，游戏版本:1.21",
        image: "images/lootjs.jpg",
        link: "https://docs.almostreliable.com/lootjs/",
        category: 2
    },
    {
        id: 29,
        title: "Feed The Beast",
        description: "FTB官方网站，上面有许多FTB官方整合包下载，前提是下载FTB官方自己的启动器（吐槽）",
        image: "images/ftb.svg",
        link: "https://www.feed-the-beast.com/",
        category: 1
    },
    {
        id: 30,
        title: "LootJS教程",
        description: "由Crychic团队托管的中文LootJS教程",
        image: "images/Crychic.png",
        link: "https://docs.mihono.cn/zh/modpack/kubejs/1.20.1/Introduction/Addon/LootJs/LootJs",
        category: 2
    },
    {
        id: 30,
        title: "苦力怕论坛",
        description: "一个关于Minecraft的中文论坛，里面有着丰富的资源提玩家下载",
        image: "images/klplt.png",
        link: "https://klpbbs.com/",
        category: 1
    },
    {
        id: 31,
        title: "MineBBS",
        description: "以Minecraft我的世界内容为主的中文论坛。面向我的世界玩家、服主、创作者，提供简洁好用的交流讨论和资源分享平台",
        image: "images/minebbs.png",
        link: "https://www.minebbs.com/ ",
        category: 1
    },
    {
        id: 32,
        title: "ModPack Index",
        description: "一个根据相关性来搜索Minecraft整合包的网站",
        image: "images/modpackindex.jpg",
        link: "https://www.modpackindex.com/modpacks ",
        category: 1
    },
    {
        id: 33,
        title: "BlockBench",
        description: "建模或者皮肤绘画工具网站",
        image: "images/blockbench.jpg",
        link: "https://www.blockbench.net",
        category: 1
    },
    {
        id: 34,
        title: "像素茶艺地图站",
        description: "一个由国人制作的Minecraft地图下载，上传网站",
        image: "images/xinagsuchayi.webp",
        link: "https://pixelmap.minegraph.cn/",
        category: 1
    },
    {
        id: 35,
        title: "Chunk Base",
        description: "Minecraft种子查询网站，输入种子后可以查询该世界的各种建筑，群系，遗迹等信息",
        image: "images/chunkbase.jpg",
        link: "https://www.chunkbase.com/",
        category: 1
    },
    {
        id: 36,
        title: "VM汉化组",
        description: "一个由国人团队领导的汉化组，提供整合包汉化，地图汉化等服务",
        image: "images/vm.png",
        link: "https://vmct-cn.top/",
        category: 1
    },
    {
        id: 37,
        title: "aseprite",
        description: "一个免费的像素画软件，可选付费，已经在Github开源 \n 可进入Github下载开源免费版本",
        image: "images/ase.png",
        link: "https://www.aseprite.org/",
        category: 6
    },
    {
        id: 38,
        title: "Adobe Photoshop",
        description: "破解版Ps软件下载，支持到Ps 2024。  \n 以及更早的Ps 2021",
        image: "images/ps.png",
        link: "https://www.123pan.com/s/N7M7Vv-3s9od.html",
        category: 6
    },
    {
        id: 39,
        title: "Loquat 枇杷模组",
        description: "这是Loquat模组的官方1.20.1版本的教程文档",
        image: "images/loquat.png",
        link: "https://loquat.readthedocs.io/en/docs-1.20/",
        category: 2
    },
    {
        id: 40,
        title: "CraftTweaker Wiki",
        description: "CraftTweaker的官方教程文档 \n 涵盖了从1.12.2到1.21.1的文档教程，可以快速查询到一些Forge/NeoForge/的API",
        image: "images/ct.jpg",
        link: "https://docs.blamejared.com/",
        category: 7
    }
];