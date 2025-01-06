import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Marsha Alexis',
    lastName:  'Likorawung',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Tech Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Surabaya',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Marsh16',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/marsha-alexis-likorawung-16b13a267/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:marshaalexis16@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>iOS Developer and AI Engineer</>,
    subline: <>I'm Marsha, a tech developer, where I code user interactive aplication features and Deep Learning for Image Classification. I am an University Student class of 2021.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Marsha is a Surabaya-based tech developer eager to contribute skills and enthusiasm to a challenging role where I can further explore cutting edge technologies in tech development, focusing on enhancing user experience and creating impactful tech solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: t("about.work.title"),
        experiences: [
            {
                company: 'Apple Developer Academy @ UC',
                timeframe: t("about.work.experiences.Apple Developer Academy @ UC.timeframe"),
                role: t("about.work.experiences.Apple Developer Academy @ UC.role"),
                achievements: t("about.work.experiences.Apple Developer Academy @ UC.achievements").split(";"),
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Teaching & Learning Innovation Center',
                timeframe: t("about.work.experiences.Teaching & Learning Innovation Center.timeframe"),
                role: t("about.work.experiences.Teaching & Learning Innovation Center.role"),
                achievements: t("about.work.experiences.Teaching & Learning Innovation Center.achievements").split(";"),
                images: [ ]
            },
            {
                company: 'Universitas Ciputra Surabaya',
                timeframe: t("about.work.experiences.Universitas Ciputra Surabaya.timeframe"),
                role: t("about.work.experiences.Universitas Ciputra Surabaya.role"),
                achievements: t("about.work.experiences.Universitas Ciputra Surabaya.achievements").split(";"),
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Universitas Ciputra Surabaya',
                description: <>{t(`about.studies.institutions.Universitas Ciputra Surabaya.description`)}</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: t("about.technical.title"),
        skills: [
            {
                title: 'Python',
                description: <>{t("about.technical.skills.Python.description")}</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Swift',
                description: <>{t("about.technical.skills.Swift.description")}</>, // "." not accepted in next-intl namespace
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, work };