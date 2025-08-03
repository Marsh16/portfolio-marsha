const createContent = (t) => {
  const person = {
    firstName: "Marsha Alexis",
    lastName: "Likorawung",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: "Software Engineer & AI Enthusiast",
    avatar: "/images/avatar.jpg",
    location: "Asia/Jakarta",
    languages: ["English", "Bahasa"],
  };

  const social = [
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/Marsh16",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/marsha-alexis-likorawung-16b13a267/",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:marshaalexis16@gmail.com",
    },
  ];

  const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer focused on AI, iOS, and Scalable Tech Solutions</>,
    subline: <>Hi, I&apos;m Marsha — a Software Engineer passionate about building intelligent systems and user-centric apps. Currently a Software Engineer with real-world experience in AI, iOS, and full-stack development.</>,
  };

  const about = {
    label: "About",
    title: "About Me",
    description: `Meet ${person.name}, a Software Engineer from Surabaya, Indonesia`,
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: <>I am a Surabaya-based developer with a strong foundation in software engineering, specializing in artificial intelligence, iOS development, and backend systems. I&apos;m eager to join forward-thinking teams to create impactful, scalable, and human-centric tech solutions.</>,
    },
    work: {
      display: true,
      title: "Work Experience",
      experiences: [
        {
          company: "IBM Watsonx Project SkillsBuild x Universitas Ciputra",
          timeframe: "February 2025 – August 2025",
          role: "AI Developer (LLM & Computer Vision)",
          achievements: ["In collaboration with Universitas Ciputra, developed and deployed an AI-powered platform (https://leafs-ai.vercel.app/) using IBM Watsonx Granite LLM. Implemented an image classification pipeline for leaf disease detection, and integrated a question-answering system using LLMs to provide contextual responses about detected diseases. The solution combines computer vision with large language models for enhanced user interaction and decision support."],
          images: [],
        },
        {
          company: "Appstore Bootcamp",
          timeframe: "March 2025 - August 2025",
          role: "iOS Developer",
          achievements: ["Chosen as a participant in the prestigious App Store Bootcamp, where I evolved my app *BillBro*—a smart bill-splitting tool—from concept to market. The program sharpened my skills in product marketing, App Store optimization (ASO), user onboarding, and UI/UX design. I successfully launched *BillBro* with key features like auto-split, multi-currency support, and intuitive summaries, backed by feedback-driven iteration cycles."],
          images: [],
        },
        {
          company: "PT Salam Pacific Indonesia Lines",
          timeframe: "February 2025 - August 2025",
          role: "Artificial Intelligence Intern",
          achievements: ["As an AI Intern at PT SPIL, I delivered end-to-end solutions across mobile, frontend, backend, and AI systems. I worked on OCR data extraction using the Gemini API within a Flutter-based car management app, enabling automatic reading of vehicle documents like STNK and invoices. I also built a machine learning model to predict logistics lead time using Python, pandas, and scikit-learn — helping the team estimate delivery durations more accurately.\n\nI developed an auto-retraining image classification system for item checkout, where the model could automatically update itself as new labeled images were added, reducing the need for manual retraining. This was containerized using Docker, making it easier to deploy and scale.\n\nOn the frontend, I worked with React and Next.js to build internal dashboards for testing and monitoring ML models. I also collaborated on Laravel-based backend services and contributed to JWT-based authentication for API security and role-based access.\n\nI experimented with Flask for building lightweight inference APIs, and integrated LLMs (Gemini and Gemma) into some prototypes — including one for document Q&A and another for enhancing OCR output validation.\n\nThrough this internship, I deepened my understanding of deploying AI in production, working across the stack from mobile and web frontend to backend services, devops, and ML/LLM model integration."],
          images: [],
        },
        {
          company: "Apple Developer Academy @ UC",
          timeframe: t(
            "about.work.experiences.Apple Developer Academy @ UC.timeframe"
          ),
          role: t("about.work.experiences.Apple Developer Academy @ UC.role"),
          achievements: t(
            "about.work.experiences.Apple Developer Academy @ UC.achievements"
          ).split(";"),
          images: [
            {
              src: "/images/projects/project-01/certificate-apple.jpeg",
              alt: "Project",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/swift.png",
              alt: "Swift Project",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/grad.jpeg",
              alt: "Project",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/billbro.jpeg",
              alt: "Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "Teaching & Learning Innovation Center",
          timeframe: t(
            "about.work.experiences.Teaching & Learning Innovation Center.timeframe"
          ),
          role: t(
            "about.work.experiences.Teaching & Learning Innovation Center.role"
          ),
          achievements: t(
            "about.work.experiences.Teaching & Learning Innovation Center.achievements"
          ).split(";"),
          images: [],
        },
        {
          company: "Biro Bebras UC",
          timeframe: t("about.work.experiences.Biro Bebras UC.timeframe"),
          role: t("about.work.experiences.Biro Bebras UC.role"),
          achievements: t(
            "about.work.experiences.Biro Bebras UC.achievements"
          ).split(";"),
          images: [
            {
              src: "/images/projects/project-01/experiences/bebras.png",
              alt: "Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "Universitas Ciputra Surabaya",
          timeframe: t(
            "about.work.experiences.Universitas Ciputra Surabaya.timeframe"
          ),
          role: t("about.work.experiences.Universitas Ciputra Surabaya.role"),
          achievements: t(
            "about.work.experiences.Universitas Ciputra Surabaya.achievements"
          ).split(";"),
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Studies",
      institutions: [
        {
          name: "Universitas Ciputra Surabaya",
          description: (
            <>
              {t(
                `about.studies.institutions.Universitas Ciputra Surabaya.description`
              )}
            </>
          ),
        },
      ],
    },
    certifications: {
      display: true,
      title: "Certifications",
      items: [
        {
          title: "Artificial Intelligence Professional Certificate (CAIPC)",
          issuer: "CertiProf",
          issued: "Mar 2025",
          expires: "Jan 2028",
          credentialId: "JLRKSDSHPSR-WWTTQHVCW-YQWSYDSBDB",
          skills: [
            "Artificial Intelligence (AI)",
            "Machine Learning",
            "Python (Programming Language)",
          ],
        },
        {
          title: "Lifelong Learning",
          issuer: "CertiProf",
          issued: "Mar 2025",
          expires: "Mar 2028",
        },
        {
          title: "Certified Programming",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          issued: "Dec 2024",
          expires: "Dec 2027",
          credentialId: "J6201.2514.6.0003766.2024",
          skills: [
            "MySQL",
            "Swift (Programming Language)",
            "Back-End Web Development",
            "Computer Science",
            "Go (Programming Language)",
            "Programming",
            "Databases",
            "REST API",
            "Unit Testing",
            "Object-Oriented Programming (OOP)",
            "Front-End Development",
            "Debugging",
            "Attention to Detail",
          ],
        },
        {
          title: "English Test",
          issuer: "ClarityEnglish",
          issued: "Dec 2023",
          credentialId: "DPT53829949",
        },
      ],
    },
    technical: {
      display: true,
      title: t("about.technical.title"),
      categories: {
        "Programming Languages": [
          {
            title: "Python",
            description: <>{t("about.technical.categories.Programming Languages.Python.description")}</>,
            images: [
              {
                src: "/images/projects/project-01/python.png",
                alt: "Python Projects",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: "Swift",
            description: <>{t("about.technical.categories.Programming Languages.Swift.description")}</>,
            images: [
              {
                src: "/images/projects/project-01/swift.png",
                alt: "Swift Projects",
                width: 16,
                height: 9,
              },
            ],
          },
          {
            title: "JavaScript & TypeScript",
            description: <>{t("about.technical.categories.Programming Languages.JavaScript & TypeScript.description")}</>,
          },
          {
            title: "Dart & Flutter",
            description: <>{t("about.technical.categories.Programming Languages.Dart & Flutter.description")}</>,
          },
          {
            title: "Go (Golang)",
            description: <>{t("about.technical.categories.Programming Languages.Go (Golang).description")}</>,
          },
          {
            title: "PHP",
            description: <>{t("about.technical.categories.Programming Languages.PHP.description")}</>,
          },
        ],
        "AI & Machine Learning": [
          {
            title: "Deep Learning & Computer Vision",
            description: <>{t("about.technical.categories.AI & Machine Learning.Deep Learning & Computer Vision.description")}</>,
          },
          {
            title: "Natural Language Processing & LLMs",
            description: <>{t("about.technical.categories.AI & Machine Learning.Natural Language Processing & LLMs.description")}</>,
          },
          {
            title: "Machine Learning Operations",
            description: <>{t("about.technical.categories.AI & Machine Learning.Machine Learning Operations.description")}</>,
          },
          {
            title: "AI Integration & APIs",
            description: <>{t("about.technical.categories.AI & Machine Learning.AI Integration & APIs.description")}</>,
          },
        ],
        "Mobile Development": [
          {
            title: "iOS Development",
            description: <>{t("about.technical.categories.Mobile Development.iOS Development.description")}</>,
          },
          {
            title: "Cross-Platform Development",
            description: <>{t("about.technical.categories.Mobile Development.Cross-Platform Development.description")}</>,
          },
          {
            title: "Mobile Backend Integration",
            description: <>{t("about.technical.categories.Mobile Development.Mobile Backend Integration.description")}</>,
          },
        ],
        "Web Development": [
          {
            title: "Frontend Frameworks",
            description: <>{t("about.technical.categories.Web Development.Frontend Frameworks.description")}</>,
          },
          {
            title: "Backend Development",
            description: <>{t("about.technical.categories.Web Development.Backend Development.description")}</>,
          },
          {
            title: "Styling & UI/UX",
            description: <>{t("about.technical.categories.Web Development.Styling & UI/UX.description")}</>,
          },
        ],
        "Databases & Cloud": [
          {
            title: "Database Management",
            description: <>{t("about.technical.categories.Databases & Cloud.Database Management.description")}</>,
          },
          {
            title: "Cloud Platforms & Deployment",
            description: <>{t("about.technical.categories.Databases & Cloud.Cloud Platforms & Deployment.description")}</>,
          },
          {
            title: "Authentication & Security",
            description: <>{t("about.technical.categories.Databases & Cloud.Authentication & Security.description")}</>,
          },
        ],
        "Specialized Technologies": [
          {
            title: "Workflow Automation",
            description: <>{t("about.technical.categories.Specialized Technologies.Workflow Automation.description")}</>,
          },
          {
            title: "Payment Integration",
            description: <>{t("about.technical.categories.Specialized Technologies.Payment Integration.description")}</>,
          },
          {
            title: "OCR & Document Processing",
            description: <>{t("about.technical.categories.Specialized Technologies.OCR & Document Processing.description")}</>,
          },
          {
            title: "Game Development",
            description: <>{t("about.technical.categories.Specialized Technologies.Game Development.description")}</>,
          },
        ],
      },
    },
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description"),
  };

  return {
    person,
    social,
    home,
    about,
    work,
    blog,
  };
};

export { createContent };
