import messages from "../../../messages/en.json";

const createContent = () => {
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
          company: "Techflouu",
          timeframe: "August 2025 – Present",
          role: "Full Stack Engineer Intern",
          achievements: ["Creating end to end websites and applications using Nestjs with TypeORM using postgres as database and swagger ui for documentation, Reactjs with Nextjs, react native in expo for client projects"],
          images: [],
        },
        {
          company: "IBM Watsonx Project SkillsBuild x Universitas Ciputra",
          timeframe: "February 2025 – September 2025",
          role: "AI Developer (LLM & Computer Vision)",
          achievements: ["In collaboration with Universitas Ciputra, developed and deployed an AI-powered platform (https://leafs-ai.vercel.app/) using IBM Watsonx Granite LLM. Implemented an image classification pipeline for leaf disease detection, and integrated a question-answering system using LLMs to provide contextual responses about detected diseases. The solution combines computer vision with large language models for enhanced user interaction and decision support."],
          images: [],
        },
        {
          company: "Appstore Bootcamp",
          timeframe: "March 2025 - August 2025",
          role: "iOS Developer",
          achievements: ["Chosen as a participant in the prestigious App Store Bootcamp, where I evolved my app BillBro — a smart bill-splitting tool—from concept to market. The program sharpened my skills in product marketing, App Store optimization (ASO), user onboarding, and UI/UX design. I successfully launched BillBro with key features like auto-split, multi-currency support, and intuitive summaries, backed by feedback-driven iteration cycles."],
          images: [],
        },
        {
          company: "PT Salam Pacific Indonesia Lines",
          timeframe: "February 2025 - August 2025",
          role: "Artificial Intelligence Intern",
          achievements: ["Delivered end-to-end AI solutions including OCR data extraction with Gemini API for Flutter car management app, built ML model for logistics lead time prediction, and developed auto-retraining image classification system. Learned Docker containerization. Created React/Next.js dashboards, implemented JWT authentication, and integrated LLMs for document Q&A and OCR validation."],
          images: [],
        },
        {
          company: "Apple Developer Academy @ UC",
          timeframe: messages.about.work.experiences["Apple Developer Academy @ UC"].timeframe,
          role: messages.about.work.experiences["Apple Developer Academy @ UC"].role,
          achievements: messages.about.work.experiences["Apple Developer Academy @ UC"].achievements.split(";"),
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
          timeframe: messages.about.work.experiences["Teaching & Learning Innovation Center"].timeframe,
          role: messages.about.work.experiences["Teaching & Learning Innovation Center"].role,
          achievements: messages.about.work.experiences["Teaching & Learning Innovation Center"].achievements.split(";"),
          images: [],
        },
        {
          company: "Biro Bebras UC",
          timeframe: messages.about.work.experiences["Biro Bebras UC"].timeframe,
          role: messages.about.work.experiences["Biro Bebras UC"].role,
          achievements: messages.about.work.experiences["Biro Bebras UC"].achievements.split(";"),
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
          timeframe: messages.about.work.experiences["Universitas Ciputra Surabaya"].timeframe,
          role: messages.about.work.experiences["Universitas Ciputra Surabaya"].role,
          achievements: messages.about.work.experiences["Universitas Ciputra Surabaya"].achievements.split(";"),
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
              {messages.about.studies.institutions["Universitas Ciputra Surabaya"].description}
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
      title: messages.about.technical.title,
      categories: {
        "Programming Languages": [
          {
            title: "Python",
            description: <>{messages.about.technical.categories["Programming Languages"].Python.description}</>,
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
            description: <>{messages.about.technical.categories["Programming Languages"].Swift.description}</>,
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
            description: <>{messages.about.technical.categories["Programming Languages"]["JavaScript & TypeScript"].description}</>,
          },
          {
            title: "Dart & Flutter",
            description: <>{messages.about.technical.categories["Programming Languages"]["Dart & Flutter"].description}</>,
          },
          {
            title: "Go (Golang)",
            description: <>{messages.about.technical.categories["Programming Languages"]["Go (Golang)"].description}</>,
          },
          {
            title: "PHP",
            description: <>{messages.about.technical.categories["Programming Languages"].PHP.description}</>,
          },
        ],
        "AI & Machine Learning": [
          {
            title: "Deep Learning & Computer Vision",
            description: <>{messages.about.technical.categories["AI & Machine Learning"]["Deep Learning & Computer Vision"].description}</>,
          },
          {
            title: "Natural Language Processing & LLMs",
            description: <>{messages.about.technical.categories["AI & Machine Learning"]["Natural Language Processing & LLMs"].description}</>,
          },
          {
            title: "Machine Learning Operations",
            description: <>{messages.about.technical.categories["AI & Machine Learning"]["Machine Learning Operations"].description}</>,
          },
          {
            title: "AI Integration & APIs",
            description: <>{messages.about.technical.categories["AI & Machine Learning"]["AI Integration & APIs"].description}</>,
          },
        ],
        "Mobile Development": [
          {
            title: "iOS Development",
            description: <>{messages.about.technical.categories["Mobile Development"]["iOS Development"].description}</>,
          },
          {
            title: "Cross-Platform Development",
            description: <>{messages.about.technical.categories["Mobile Development"]["Cross-Platform Development"].description}</>,
          },
          {
            title: "Mobile Backend Integration",
            description: <>{messages.about.technical.categories["Mobile Development"]["Mobile Backend Integration"].description}</>,
          },
        ],
        "Web Development": [
          {
            title: "Frontend Frameworks",
            description: <>{messages.about.technical.categories["Web Development"]["Frontend Frameworks"].description}</>,
          },
          {
            title: "Backend Development",
            description: <>{messages.about.technical.categories["Web Development"]["Backend Development"].description}</>,
          },
          {
            title: "Styling & UI/UX",
            description: <>{messages.about.technical.categories["Web Development"]["Styling & UI/UX"].description}</>,
          },
        ],
        "Databases & Cloud": [
          {
            title: "Database Management",
            description: <>{messages.about.technical.categories["Databases & Cloud"]["Database Management"].description}</>,
          },
          {
            title: "Cloud Platforms & Deployment",
            description: <>{messages.about.technical.categories["Databases & Cloud"]["Cloud Platforms & Deployment"].description}</>,
          },
          {
            title: "Authentication & Security",
            description: <>{messages.about.technical.categories["Databases & Cloud"]["Authentication & Security"].description}</>,
          },
        ],
        "Specialized Technologies": [
          {
            title: "Workflow Automation",
            description: <>{messages.about.technical.categories["Specialized Technologies"]["Workflow Automation"].description}</>,
          },
          {
            title: "Payment Integration",
            description: <>{messages.about.technical.categories["Specialized Technologies"]["Payment Integration"].description}</>,
          },
          {
            title: "OCR & Document Processing",
            description: <>{messages.about.technical.categories["Specialized Technologies"]["OCR & Document Processing"].description}</>,
          },
          {
            title: "Game Development",
            description: <>{messages.about.technical.categories["Specialized Technologies"]["Game Development"].description}</>,
          },
        ],
      },
    },
  };

  const work = {
    label: messages.work.label,
    title: messages.work.title,
    description: messages.work.description,
  };

  const blog = {
    label: messages.blog.label,
    title: messages.blog.title,
    description: messages.blog.description,
  };

  const achievements = {
    label: messages.achievements.label,
    title: messages.achievements.title,
    description: messages.achievements.description,
    categories: {
      "Certifications": [
        {
          title: "Artificial Intelligence Professional Certificate (CAIPC)",
          organization: "Certiprof",
          date: "2025-03-27",
          expiryDate: "2028-01-26",
          description: "Professional certification in AI technologies, methodologies, and applications with industry standards validation.",
          image: "/images/achievements/caipc-certificate.jpg",
          credentialId: "JLRKSDSHPSR-WWTTQHVCW-YQWSYDSBDB",
          credentialUrl: "https://www.credly.com/badges/fab4128e-1bd1-4434-8da7-66672841d004/public_url",
          skills: ["Artificial Intelligence", "AI Professional Practices", "Machine Learning", "AI Ethics", "AI Implementation"]
        },
        {
          title: "Apple Developer Academy Certificate",
          organization: "Apple Developer Academy @ UC",
          date: "2024-12-30",
          description: "Intensive iOS development program. Developed and published BillBro app with 500+ downloads.",
          image: "/images/projects/project-01/certificate-apple.jpeg?w=3840&q=75",
          credentialUrl: "https://appledeveloperacademy.uc.ac.id/",
          skills: ["Swift", "SwiftUI", "iOS Development", "App Store Optimization", "Product Design"]
        },
        {
          title: "Certified Programming",
          organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
          date: "2024-12-01",
          expiryDate: "2027-12-01",
          description: "National professional certification in programming covering software development, database management, and full-stack technologies.",
          image: "/images/achievements/bnsp-programming-certificate.jpeg",
          credentialId: "J6201.2514.6.0003766.2024",
          credentialUrl: "https://drive.google.com/file/d/1csfC7hoWF6fIlR8TJPVlR34wiMQvBUVv/view",
          skills: ["MySQL", "Swift", "Back-End Web Development", "Computer Science", "Go", "Programming", "Databases", "REST", "Unit Testing", "OOP", "Front-End Development", "Debugging", "Attention to Detail"]
        },
        {
          title: "IBM SkillsBuild",
          organization: "IBM SkillsBuild",
          date: "2025-08-08",
          description: "AI and ML program covering IBM Watsonx, computer vision, and LLM integration. Built LeafsAI platform with 99.5% accuracy.",
          image: "/images/achievements/ibm-skillsbuild.jpg",
          credentialUrl: "https://skillsbuild.org/",
          skills: ["IBM Watsonx", "Machine Learning", "Computer Vision", "LLM Integration", "AI Development"]
        }
      ],
      "Courses & Training": [
        {
          title: "App Store Bootcamp",
          organization: "Apple Developer Academy",
          date: "2025-08-31",
          description: "Intensive bootcamp on app marketing, ASO, user onboarding, and UI/UX design. Enhanced BillBro with improved user experience and market positioning.",
          image: "/images/achievements/apple-logo.png",
          skills: ["App Store Optimization", "Product Marketing", "UI/UX Design", "User Onboarding"]
        }
      ],
      "Competitions": [
        {
          title: "East Java Data Hackathon 2023",
          organization: "JCI East Java & JCI4TECH",
          date: "2023-09-24",
          description: "Participated as a competitor in the East Java KIM Hackathon 2023 with the theme 'Igniting Innovation Together!' organized by JCI4TECH from September 22-24, 2023. Successfully completed the hackathon competition focused on data innovation and technology solutions.",
          image: "/images/achievements/east-java-hackathon-2023.jpg",
          skills: ["Hackathon", "Innovation", "Technology Solutions", "Team Collaboration"]
        },
        {
          title: "LO KREATIF 2023 - Lomba Nasional Kreativitas Mahasiswa",
          organization: "APTISI WIL VII Jawa Timur",
          date: "2023-11-14",
          description: "Participated as UI/UX Design Category participant in the National Student Creativity Competition (LO KREATIF 2023) with the theme 'Building Synergy, Creativity and Innovation in Learning'. Organized by APTISI WIL VII East Java in Surabaya.",
          image: "/images/achievements/lo-kreatif-2023.png",
          skills: ["UI/UX Design", "Creativity", "Innovation", "Design Thinking", "Student Competition"]
        }
      ],
      "Awards & Recognition": [
        {
          title: "Full Score Achievement of Red Carpet Night 2022",
          organization: "School of Information Technology · Universitas Ciputra Surabaya",
          date: "2022-02-25",
          description: "Achieved Full Score Award (4.0 GPA) from Red Carpet Night 2022. This event is held by the School of Information Technology Universitas Ciputra Surabaya on the 25th February 2022.",
          image: "/images/achievements/red-carpet-night-2022.jpg",
          skills: ["Academic Excellence", "Information Technology", "4.0 GPA"]
        }
      ],
      "Publications": [
        {
          title: "Implementation of DenseNet Architecture for Mango Leaf Disease Classification",
          organization: "SINTA-4 Indexed Journal",
          date: "2024-10-30",
          description: "Published research paper achieving 99.5% accuracy in mango leaf disease classification using deep learning and transfer learning techniques.",
          credentialUrl: "https://jurnal.stts.edu/index.php/INSYST/article/view/401",
          skills: ["Deep Learning", "Computer Vision", "Research", "Academic Writing", "DenseNet"]
        }
      ]
    }
  };

  return {
    person,
    social,
    home,
    about,
    work,
    blog,
    achievements,
  };
};

export { createContent };
