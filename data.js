const profileData = {
  zh: {
    name: "唯道行 Yuiko",
    bio: "只是一只想让世界变得更好的小蝴蝶",
    details: {
      institution: "武汉大学",
      identity: ["本科生", "计算机科学", "APA学生会员", "优秀学生奖学金"],
      researchInterests: ["智能体", "计算精神病学", "AI for Science", "Science for AI"],
      experiences: [
        "2026年担任武汉大学何发智教授课题组Research Assistant",
        "2025年全国大学生计算机系统能力大赛-OS功能挑战赛全国三等奖",
        "2024年赴剑桥大学获本科生出国（境）交流学习专项奖学金"
      ],
      introduction: "大家好，这里是唯道行，或者叫我Yuiko、Yui也都可以。我目前在武汉大学计算机学院就读，专业为计算机科学与技术，细分方向为图形图像处理。我的研究兴趣主要集中在人工智能的交叉应用，如探索如何利用多模态大模型、认知建模技术进行精神疾病检测与干预治疗；利用多智能体交互模拟社会等复杂现象；发展Agent；探索AI技术在教育、医疗、金融、心理、神经等领域的应用，并思考如何让神经科学、心理学乃至哲学启发人工智能架构或发展。我主要在武汉大学计算机学院、浙江大学CAD&CG全国重点实验室、中国科学院软件研究所等地有实习或交流经验，本科期间探索过Linux、文件系统、协程、CG、CV、CAD、RAG、LLM、人机交互等多个领域。此外，我也学习过哲学、心理学、逻辑学（陈波院士）、神经科学（剑桥）等其他学科内容，曾跟随清华大学乡村振兴工作站深入基层，并与米哈游《原神·千星奇域》有测试签约合作。我希望以一种独特的交叉学科视角出发，在技术中寻找'人的尺度'，让AI技术融入人类社会的未来。"
    },
    news: [
      { date: "2026-04-22", text: "我的个人网站成功上线！" },
      { date: "2026-02-10", text: "祝贺何老师全球首个CAD工业软件智能核心开源项目WHUCAD发布！" },
      { date: "2025-10-21", text: "我的第一篇论文《用户态文件系统的并发瓶颈与优化策略》完稿在投！" },
      { date: "2025-08-22", text: "恭喜我自己获2025年全国大学生计算机系统能力大赛全国三等奖！" },
      { date: "2025-08-17", text: "恭喜我自己在CET-6考试中取得609分的成绩！" },
      { date: "2025-06-15", text: "祝贺武汉大学第四十三次学生代表大会顺利召开！" },
      { date: "2024-08-11", text: "恭喜我自己完成在剑桥大学的Summer Research Program！" }
    ],
    tweets: [
      {
        title: "擦边：互联网世代的一面透视之镜",
        summary: "从视角主义出发，利用马克思哲学、社会批判理论与拉康派精神分析讨论擦边现象",
        url: "https://www.xiaohongshu.com/discovery/item/69c50350000000002003a842?source=webshare&xhsshare=pc_web&xsec_token=ABgXu04M5ytmOk02QI1DL74YU_78S2s4Q0I_h9xRvAhNY=&xsec_source=pc_share",
        date: "2026-03-26"
      },
      {
        title: "计算机图形学：Shadings in OpenGL",
        summary: "专业课计算机图形学的笔记，讨论OpenGL中的光照等技术",
        url: "https://blog.csdn.net/2303_79624041/article/details/155421820",
        date: "2025-11-30"
      },
      {
        title: "实现一个从AST到RISCV的编译器",
        summary: "专业课程序语言理论与编译技术的笔记，讨论实现一个简单的AST->RISCV编译器",
        url: "https://blog.csdn.net/2303_79624041/article/details/147014609",
        date: "2025-04-05"
      },
      {
        title: "BPF CO-RE 参考指南",
        summary: "个人翻译的BPF CO-RE reference guide，讲解eBPF一次编译、到处运行的功能",
        url: "https://blog.csdn.net/2303_79624041/article/details/146238724",
        date: "2025-03-13"
      },
      {
        title: "一只笼子在寻找一只鸟",
        summary: "江苏省第二十一届中学生与社会作文大赛特等奖第一名，被知网收录",
        url: "https://xueshu.baidu.com/ndscholar/browse/detail?paperid=1d0m0820161t0460uj1402t0p5470418",
        date: "2024-xx-xx"
      },
      {
        title: "个人随笔：意义感小论",
        summary: "知乎的第一篇短文，以类存在主义的视角，区分了意义、意义感和意义的缺失",
        url: "https://zhuanlan.zhihu.com/p/441262076",
        date: "2022-01-15"
      }
    ]
  },
  en: {
    name: "WeiDaoxing (Yuiko)",
    bio: "Just a butterfly trying to make the world a better place",
    details: {
      institution: "Wuhan University",
      identity: ["Undergraduate", "Computer Science", "APA Student Member", "Excellence Scholarship"],
      researchInterests: ["Agent", "Computational Psychiatry", "AI for Science", "Science for AI"],
      experiences: [
        "Research Assistant at Prof. Fazhi He's Lab, Wuhan University (2026)",
        "Third Prize in National Computer System Capability Competition - OS Challenge (2025)",
        "Cambridge University Summer Research Program with Scholarship (2024)"
      ],
      introduction: "Hello! I'm WeiDaoxing (Yuiko or Yui for short). I'm currently an undergraduate student at the School of Computer Science, Wuhan University, majoring in Computer Science and Technology with a focus on graphics and image processing. My research interests center on interdisciplinary applications of AI, such as exploring multimodal large models and cognitive modeling for mental health detection and intervention; using multi-agent systems to simulate complex social phenomena; developing agent systems; and investigating AI applications in education, healthcare, finance, psychology, and neuroscience. I'm also interested in how neuroscience, psychology, and philosophy can inspire AI architecture and development. I have interned or exchanged at institutions including Wuhan University, State Key Lab of CAD&CG at Zhejiang University, and Institute of Software at Chinese Academy of Sciences. During my undergraduate years, I've explored Linux, file systems, coroutines, CG, CV, CAD, RAG, LLM, and HCI. Additionally, I've studied philosophy, psychology, logic (with Academician Chen Bo), and neuroscience (at Cambridge). I've also worked with Tsinghua University's Rural Revitalization Station and collaborated with miHoYo on Genshin Impact testing. I aim to approach technology from a unique interdisciplinary perspective, seeking the 'human dimension' in technology and integrating AI into the future of human society."
    },
    news: [
      { date: "2026-04-22", text: "My personal website is now live!" },
      { date: "2026-02-10", text: "Congratulations to Prof. He on launching WHUCAD, the world's first open-source intelligent CAD core!" },
      { date: "2025-10-21", text: "My first paper 'Concurrency Bottlenecks and Optimization Strategies for FUSE: A Generational Analysis Framework' completed!" },
      { date: "2025-08-22", text: "Won Third Prize in National Computer System Capability Competition!" },
      { date: "2025-08-17", text: "Achieved 609 in CET-6 exam!" },
      { date: "2025-06-15", text: "Congratulations on the 43rd Student Congress of Wuhan University!" },
      { date: "2024-08-11", text: "Completed Summer Research Program at Cambridge University!" }
    ],
    tweets: [
      {
        title: "Edge-Walking: A Mirror of the Internet Generation",
        summary: "Discussing the 'edge-walking' phenomenon through perspectivism, Marxist philosophy, critical theory, and Lacanian psychoanalysis",
        url: "https://www.xiaohongshu.com/discovery/item/69c50350000000002003a842?source=webshare&xhsshare=pc_web&xsec_token=ABgXu04M5ytmOk02QI1DL74YU_78S2s4Q0I_h9xRvAhNY=&xsec_source=pc_share",
        date: "2026-03-26"
      },
      {
        title: "Computer Graphics: Shadings in OpenGL",
        summary: "Course notes on Computer Graphics, discussing lighting techniques in OpenGL",
        url: "https://blog.csdn.net/2303_79624041/article/details/155421820",
        date: "2025-11-30"
      },
      {
        title: "Implementing an AST to RISCV Compiler",
        summary: "Course notes on Programming Language Theory and Compilation, implementing a simple AST->RISCV compiler",
        url: "https://blog.csdn.net/2303_79624041/article/details/147014609",
        date: "2025-04-05"
      },
      {
        title: "BPF CO-RE Reference Guide",
        summary: "Personal translation of BPF CO-RE reference guide, explaining eBPF's compile-once-run-everywhere feature",
        url: "https://blog.csdn.net/2303_79624041/article/details/146238724",
        date: "2025-03-13"
      },
      {
        title: "A Cage in Search of a Bird",
        summary: "First Prize in Jiangsu Province 21st 'Students and Society' Essay Competition, indexed by CNKI",
        url: "https://xueshu.baidu.com/ndscholar/browse/detail?paperid=1d0m0820161t0460uj1402t0p5470418",
        date: "2024-xx-xx"
      },
      {
        title: "Personal Essay: On the Sense of Meaning",
        summary: "My first essay on Zhihu, distinguishing meaning, sense of meaning, and lack of meaning from an existentialist perspective",
        url: "https://zhuanlan.zhihu.com/p/441262076",
        date: "2022-01-15"
      }
    ]
  },
  common: {
    avatar: "https://raw.githubusercontent.com/1105623876/1105623876.github.io/main/avatar.jpg",
    emails: ["1105623876@qq.com", "2023302111073@whu.edu.cn"],
    links: [
      { name: "GitHub", url: "https://github.com/1105623876" },
      { name: "RedNote", url: "https://www.xiaohongshu.com/user/profile/64a8f9b8000000001001e509" },
      { name: "Zhihu", url: "https://www.zhihu.com/people/wei-dao-xing-33" },
      { name: "CSDN", url: "https://blog.csdn.net/2303_79624041?spm=1000.2115.3001.5343" }
    ]
  }
};

const i18n = {
  zh: {
    about: "关于",
    news: "新闻",
    articles: "文章",
    institution: "单位",
    identity: "身份",
    emails: "邮箱",
    researchInterests: "研究兴趣",
    experiences: "经历",
    introduction: "自我介绍"
  },
  en: {
    about: "About",
    news: "News",
    articles: "Articles",
    institution: "Institution",
    identity: "Identity",
    emails: "Email",
    researchInterests: "Research Interests",
    experiences: "Experiences",
    introduction: "Introduction"
  }
};
