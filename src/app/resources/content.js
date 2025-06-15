import { InlineCode } from "@/once-ui/components";

const createContent = (t) => {
  const person = {
    firstName: "Marsha Alexis",
    lastName: "Likorawung",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
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
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  };

  const about = {
    label: t("about.label"),
    title: t("about.title"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
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
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      display: true,
      title: t("about.work.title"),
      experiences: [
        {
          company: "IBM Watsonx Project SkillsBuild x Universitas Ciputra",
          timeframe: t(
            "about.work.experiences.IBM Watsonx Project SkillsBuild x Universitas Ciputra.timeframe"
          ),
          role: t(
            "about.work.experiences.IBM Watsonx Project SkillsBuild x Universitas Ciputra.role"
          ),
          achievements: t(
            "about.work.experiences.IBM Watsonx Project SkillsBuild x Universitas Ciputra.achievements"
          ).split(";"),
          images: [],
        },
        {
          company: "PT Salam Pacific Indonesia Lines",
          timeframe: t(
            "about.work.experiences.PT Salam Pacific Indonesia Lines.timeframe"
          ),
          role: t(
            "about.work.experiences.PT Salam Pacific Indonesia Lines.role"
          ),
          achievements: t(
            "about.work.experiences.PT Salam Pacific Indonesia Lines.achievements"
          ).split(";"),
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
      skills: [
        {
          title: "Python",
          description: <>{t("about.technical.skills.Python.description")}</>,
          images: [
            {
              src: "/images/projects/project-01/python.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Swift",
          description: <>{t("about.technical.skills.Swift.description")}</>,
          images: [
            {
              src: "/images/projects/project-01/swift.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "NLP & LLM",
          description: <>{t("about.technical.skills.NLP & LLM.description")}</>,
        },
        {
          title: "Computer Vision",
          description: (
            <>{t("about.technical.skills.Computer Vision.description")}</>
          ),
        },
        {
          title: "Flutter & Dart",
          description: (
            <>
              Built cross-platform mobile apps with backend integration (Golang)
              and advanced features like OCR and JWT authentication.
            </>
          ),
        },
        {
          title: "Golang",
          description: (
            <>
              Developed RESTful APIs, handled authentication with JWT, and
              integrated with AI pipelines and OCR systems.
            </>
          ),
        },
        {
          title: "Flask",
          description: (
            <>
              Deployed ML models as APIs, implemented image classification
              workflows and backends.
            </>
          ),
        },
        {
          title: "Laravel",
          description: (
            <>
              Created full-stack web apps with Laravel, supporting AI
              integration and CRUD features for production systems.
            </>
          ),
        },
        {
          title: "SAP Learning",
          description: (
            <>
              Completed the{" "}
              <InlineCode>Delta Content ABAP Developer</InlineCode> module.
              Currently progressing through
              <InlineCode>
                SAP Learning Journey: Practicing Clean Core Extensibility For
                SAP S/4HANA Cloud
              </InlineCode>{" "}
              and
              <InlineCode>Managing Clean Core for SAP S/4HANA Cloud</InlineCode>
              , consisting of 5 units (~8 hours total) to earn certification.
            </>
          ),
        },
      ],
    },
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
  };
  return {
    person,
    social,
    home,
    about,
    work,
  };
};

export { createContent };
