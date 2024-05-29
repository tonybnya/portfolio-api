const data = {
  api: {
    name: "Portfolio API",
    author: "@tonybnya",
    version: "1.0.0",
    projectsAPI: "http://localhost:3000/api/projects",
    timelinesAPI: "http://localhost:3000/api/timelines",
  },
  projects: [
    {
      title: "Developer Portfolio",
      description:
        "Building a sleek portfolio website with React, Tailwind, and Vite to showcase my skills and projects elegantly, and elevate my online presence with modern technology stack. Seamlessly navigate through responsive design.",
      tags: ["React", "Tailwind", "Vite"],
      images: [
        "https://i.postimg.cc/Jnm2c6g6/developer-portfolio-image-1.png",
        "https://i.postimg.cc/V6RH79PY/developer-portfolio-image-2.png",
        "https://i.postimg.cc/8czXxFTL/developer-portfolio-image-3.png",
      ],
      liveUrl: "https://tonybnya-portfolio.onrender.com/",
      sourceUrl: "https://github.com/tonybnya/portfolio",
    },
    {
      title: "Portfolio API",
      description:
        "Building a CRUD API with Node.js, Express, and MongoDB to serve my Developer Portfolio website with projects, and timelines (milestones or progression steps as Software Engineer) progressively.",
      tags: ["Express", "MongoDB", "Node.js"],
      images: [
        "https://i.postimg.cc/DzYxf1Lw/portfolio-api-image-1.png",
        "https://i.postimg.cc/FRdDY1Vg/portfolio-api-image-2.png",
      ],
      liveUrl: "https://github.com/tonybnya/portfolio-api",
      sourceUrl: "https://github.com/tonybnya/portfolio-api",
    },
    {
      title: "KaKo",
      description:
        "Embark on a thrilling journey through the Batman universe with KaKo, an innovative e-commerce platform that brings the essence of Gotham City to your fingertips. Immerse yourself in a world where the iconic meets the extraordinary.",
      tags: ["React", "Tailwind", "Vite", "Flask"],
      images: [
        "https://i.postimg.cc/ZqQNgHz4/kako-image-1.png",
        "https://i.postimg.cc/KYjLJVV0/kako-image-2.png",
      ],
      liveUrl: "https://kako-landing-page.onrender.com/",
      sourceUrl: "https://github.com/tonybnya/kako",
    },
  ],
  timelines: [
    {
      year: 2024,
      timeline: "AI Career Essentials Certified - ALX",
      duration: "8 weeks",
      details:
        "Embarking on the AI Career Essentials (AiCE), another wonderful program designed one more time by ALX, was a pivotal milestone in my journey towards mastering essential AI literacy skills and igniting my career in the tech industry. What sets AiCE apart is its unique blend of technical expertise, professional development, and hands-on Al tools training, all integrated seamlessly into one comprehensive program. Engaging in immersive simulations that closely mirror real-world scenarios, I gained practical insights and honed the skills necessary to thrive in today's fast-paced digital workforce. This experimential learning approach not only equipped me with valuable knowledge but also instilled in me the confidence to tackle complex challenges head-on and excel in the ever-evolving field of Artificial Intelligence.",
    },
    {
      year: 2024,
      timeline: "Open Source Contributor - All In Open Source by GitHub",
      duration: "3 months",
      details:
        "As a participant in the All In Africa online educational program, I embraced the opportunity to expand my horizons through free Open Source education, mentorship, and career development. Throughout the program, I deeply engaged with the comprehensive curriculum modules, acquiring not only in-depth knowledge but also practical skills essential for success in the industry. Additionally, I actively participated in career readiness workshops, where I honed my professional skills and prepared myself for the dynamic landscape of the tech industry. Fueling my passion for innovation and problem-solving, I eagerly took part in hackathons, collaborating with diverse teams to devise creative solutions within challenging time constraints. Through these experiences, I demonstrated my commitment to continuous learning, innovation, and making meaningful contributions to the African tech community.",
    },
    {
      year: 2023,
      timeline: "Software Engineer - ALX",
      duration: "12 months",
      details:
        "Over a transformative 12-month journey, I immersed myself in a comprehensive software engineering course designed by the amazing ALX, to equip aspiring developers with the skills and knowledge needed to thrive in the industry. Throughout the program, I delved deeply into various facets of Software Engineering, covering topics such as programming languages, data structures and algorithms, software architecture, system design, project management.... Through a blend of theoretical learning and practical application, I gained proficiency in a wide array of technologies and methodologies, including but not limited to C, Python, JavaScript, version control systems, agile development practices, and software design patterns, databases. Hands-on projects, collaborative assignments, and real-world simulations provided invaluable opportunities to apply theoretical concepts in practical scenarios, fostering a deep understanding of software engineering principles. This intensive course not only expanded my technical capabilities but also instilled in me a strong and growth problem-solving mindset, effective communication skills, and a passion for continuous learning and innovation in the ever-evolving field of Software Engineering.",
    },
    {
      year: 2022,
      timeline: "Front-End Web Developer - Sayna Academy",
      duration: "6 months",
      details:
        "As a participant in the Talent4Startups (T4SU) program facilitated by Sayna Academy, a Franco-Malagasy company, I dedicated six months to fine-tuning my skills in Front-End programming. Throughout the program, I engaged in hands-on projects utilizing React, Angular, and Figma, gaining practical experience and proficiency in these technologies. Additionally, I seized opportunities to apply my newly acquired skills in professional internship settings, where I tackled real-world challenges and further refined my expertise. This immersive experience provided me with a solid foundation in Front-End development and equipped me with the practical knowledge needed to excel in the field.",
    },
    {
      year: 2021,
      timeline: "Consultant - Team Solutions",
      duration: "Ongoing",
      details:
        "Following my job at the Embassy of Cameroon in Congo, I transitioned to a Consultant role at Team Solutions in Douala, Cameroon (still ongoing), specializing in the marketing and training of drone usage, as well as the marketing and installation of surveillance cameras. My responsibilities extended beyond operational tasks to encompass strategic initiatives. By offering strategic insights and tailored solutions, I contributed to the company's creation and its growth and positioned clients for success in their respective industries. This role allowed me to apply my expertise in technology and security in a dynamic and forward-thinking environment.",
    },
    {
      year: 2013,
      timeline:
        "Ambassador's Head of Office & IT - Embassy of Cameroon in Congo",
      duration: "8 years",
      details:
        "During my 8-year job at the Embassy of Cameroon in Congo, where I served as the head of the Ambassador's private office and oversaw the Embassy's IT pool, I honed a unique blend of diplomatic, administrative, and technological skills. Leading the Ambassador's private office demanded a keen understanding of diplomatic protocols, effective communication, and exceptional organizational abilities to facilitate smooth operations and ensure the Ambassador's engagements were executed seamlessly. Additionally, as head of the Embassy's IT pool, I played a pivotal role in modernizing and maintaining the Embassy's technological infrastructure, enhancing efficiency, and security. Balancing diplomatic responsibilities with IT management required adaptability, strategic thinking, and a strong commitment to excellence. This multifaceted role provided me with invaluable experience in navigating complex diplomatic environments while leveraging technology to optimize embassy operations.",
    },
    {
      year: 2012,
      timeline: "Intern - Cameroon Postal Services HQ",
      duration: "6 months",
      details:
        "During my internship at the General Direction of the Cameroon Postal Services in Yaounde, Cameroon, I had the opportunity to apply my theoretical knowledge from my Computer Science training into real-world scenarios. Over six months, I collaborated with experienced professionals on various projects related to improving the efficiency and effectiveness of postal services through technology. I gained practical experience in software development, data analysis, and system optimization while contributing to the modernization efforts of the postal services. This internship provided me with invaluable hands-on experience and enhanced my skills in problem-solving, teamwork, and communication.",
    },
    {
      year: 2008,
      timeline: "Bachelor's Degree - Computer Science",
      duration: "3 years",
      details:
        "After completing my secondary education with a focus on Science and Mathematics, I went on to study Computer Science to earn a Bachelor's Degree at the Siantou Higher Institute of Technology in Yaounde, Cameroon. A rigorous 3-years coursework with practical exercises, and hands-on projects covering programming languages, algorithms and data structures, and software engineering. Through internships, research opportunities, and industry collaborations, I gained real-world experience and enhance my skills.",
    },
  ],
};

module.exports = data;
