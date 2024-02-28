import {
  Buildings,
  DeviceMobile,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Monitor,
  SealCheck,
  Smiley,
  StarFour,
  UsersThree,
} from "@phosphor-icons/react";
import worksData from "./worksData";

const landingData = {
  landingNav: {
    id: [
      {
        name: "Tentang Saya",
        link: "#about",
      },
      {
        name: "Layanan",
        link: "#services",
      },
      {
        name: "Portofolio",
        link: "#works",
      },
    ],
    en: [
      {
        name: "About Me",
        link: "#about",
      },
      {
        name: "Services",
        link: "#services",
      },
      {
        name: "Portfolio",
        link: "#works",
      },
    ],
  },

  hero: {
    id: {
      greeting: "Halo, saya",
      narative:
        "Seorang pengembang web yang fokus pada React juga mahir dalam desain grafis untuk menciptakan desain yang visual unik",
      contact: "Hubungi Saya",
      portfolio: "Portofolio",
      stats: [
        {
          name: "Portofolio",
          value: 7,
        },
        {
          name: "Tahun Pengalaman",
          value: 1,
        },
      ],
    },
    en: {
      greeting: "Hi there, i'm",
      narative:
        "A web developer who focuses on React is also skilled in graphic design to create visually unique designs",
      contact: "Contact Me",
      portfolio: "Portfolio",
      stats: [
        {
          name: "Portfolio",
          value: 7,
        },
        {
          name: "Years Experience",
          value: 1,
        },
      ],
    },
  },

  about: {
    id: {
      nav: "Tentang Saya",
      title: "Siapa Aku?",
      ourMember: {
        label: "Tentang Kami",
        link: "",
      },
      items: [
        {
          title: "Keahlian, Strategi dan Fleksibilitas",
          narative:
            "Tim kami memiliki keterampilan khusus yang relevan dengan proyek, berkontribusi terhadap hasil yang efisien dan berkualitas tinggi, dan mampu menunjukkan keahlian dalam industri, memastikan pemahaman mendalam tentang persyaratan yang spesifik",
        },
        {
          title: "Spesialisasi dan Akuntabilitas",
          narative:
            "Distro Studio merupakan spesialis dalam pengembangan perangkat lunak dan memberikan akuntabilitas untuk proyek yang kami lakukan",
        },
        {
          title: "Perencanaan dan Eksekusi",
          narative:
            "Strategi yang terdefinisi dengan baik sangat penting untuk perencanaan dan pelaksanaan proyek yang efektif, yang mencakup jadwal, alokasi sumber daya, dan manajemen risiko.",
        },
        {
          title: "Kontrol Proyek Konsisten",
          narative:
            "Melakukan kontrol dengan konsisten atas kemajuan proyek, dan tidak perlu mengkhawatirkan aspek komunikasi.",
        },
      ],
    },
    en: {
      nav: "About Me",
      title: "Who am I?",
      ourMember: {
        label: "About Us",
        link: "",
      },
      items: [
        {
          title: "Expertise, Strategy and Flexibility",
          narative:
            "Our team possesses specialized skills relevant to the project, contributing to efficient and high-quality deliverables, and is capable of demonstrating expertise in the industry, ensuring a deep understanding of specific requirements",
        },
        {
          title: "Specialization and Accountability",
          narative:
            "Distro Studio specialize in software development and provide accountability for the project our undertake",
        },
        {
          title: "Planning and Execution",
          narative:
            "A well-defined strategy is essential for effective project planning and execution, encompassing timelines, resource allocation, and risk management.",
        },
        {
          title: "Constant Project Control",
          narative:
            "Constant control over the progress of the project, and no need to worry about the communication aspect.",
        },
      ],
    },
  },

  sosmeds: [
    { name: "Instagram", link: "", icon: GithubLogo },
    { name: "LinkedIn", link: "", icon: LinkedinLogo },
    { name: "Github", link: "", icon: InstagramLogo },
  ],

  stats: {
    id: [
      {
        name: "Proyek Selesai",
        value: 8,
        icon: SealCheck,
      },
      {
        name: "Tahun Pengalaman",
        value: 2,
        icon: StarFour,
      },
      {
        name: "Klien Puas Hati",
        value: 3,
        icon: Smiley,
      },
      {
        name: "Pakar di Bidangnya",
        value: 3,
        icon: UsersThree,
      },
    ],
    en: [
      {
        name: "Projects Finished",
        value: 8,
        icon: SealCheck,
      },
      {
        name: "Years Experience",
        value: 2,
        icon: StarFour,
      },
      {
        name: "Clients Satisfied",
        value: 3,
        icon: Smiley,
      },
      {
        name: "Expert in the Field",
        value: 3,
        icon: UsersThree,
      },
    ],
  },

  services: {
    id: {
      detail: "Lihat detail",
      nav: "Layanan",
      title: "Apa yang Kami Bantu?",
      servicesItem: [
        {
          icon: Buildings,
          title: "Company Profile/Landing Page",
          image: "/images/services/compro.jpg",
          narative:
            "Kemembangkan website Anda untuk memberikan informasi yang berguna sekaligus memberikan pengalaman yang luar biasa saat diakses",
          detailLink: "/services?section=0",
        },
        {
          icon: Monitor,
          title: "Web and Web App Development",
          image: "/images/services/webapp.jpg",
          narative:
            "Bangun aplikasi bisnis Anda dengan pakar UX & UI kami yang fokus pada peningkatan pengalaman pengguna",
          detailLink: "/services?section=1",
        },
        {
          icon: DeviceMobile,
          title: "Cross Platform Mobile App Development",
          image: "/images/services/mobile.jpg",
          narative:
            "Buat situs profil perusahaan yang dinamis untuk pengalaman pengguna yang lancar dan menarik dengan penyampaian informasi yang mudah",
          detailLink: "/services?section=2",
        },
      ],
    },
    en: {
      detail: "View detail",
      nav: "Services",
      title: "What Do We Help?",
      servicesItem: [
        {
          icon: Buildings,
          title: "Company Profile/Landing Page",
          image: "/images/services/compro.jpg",
          narative:
            "Create and develop your website to provide useful information while providing a great experience when accessed",
          detailLink: "/services?section=0",
        },
        {
          icon: Monitor,
          title: "Web and Web App Development",
          image: "/images/services/webapp.jpg",
          narative:
            "Build your business app with our UX & UI specialists who focus on improving user experience",
          detailLink: "/services?section=1",
        },
        {
          icon: DeviceMobile,
          title: "Cross Platform Mobile App Development",
          image: "/images/services/mobile.jpg",
          narative:
            "Create a dynamic company profile site for a seamless, engaging user experience with effortless information delivery",
          detailLink: "/services?section=2",
        },
      ],
    },
  },

  works: {
    content: {
      id: {
        nav: "Portofolio",
        title: "Karya-Karya Kami",
        otherWorks: {
          link: "",
          label: "Lihat Lainnya",
        },
        viewDetail: "Lihat Detail",
      },
      en: {
        nav: "Portfolio",
        title: "Our Works",
        otherWorks: {
          link: "",
          label: "View Other",
        },
        viewDetail: "View Detail",
      },
    },
    worksItem: worksData,
  },

  clients: {
    id: {
      title: "3 Brand Percaya Kami",
      subtitle:
        "Setiap klien menunjukkan babak berbeda dalam cerita kami. Pengalaman kami yang luas menjangkau berbagai merek, dari perusahaan kecil hingga perusahaan besar, yang berkontribusi pada basis pengetahuan kami yang luas",
      items: [
        {
          name: "Poltekkes Semarang",
          logo: "/images/clients/poltekkes.png",
        },
        {
          name: "BPJS Kesehatan",
          logo: "/images/clients/bpjs.png",
        },
        {
          name: "Gerindra",
          logo: "/images/clients/gerindra.png",
        },
      ],
    },
    en: {
      title: "3 Brand Trust Us",
      subtitle:
        "Every client represents a distinct chapter in our story. Our extensive experience spans a spectrum of brands, from small enterprises to large corporations, contributing to our broad knowledge base",
      items: [
        {
          name: "Poltekkes Semarang",
          logo: "/images/clients/poltekkes.png",
        },
        {
          name: "BPJS Kesehatan",
          logo: "/images/clients/bpjs.png",
        },
        {
          name: "Gerindra",
          logo: "/images/clients/gerindra.png",
        },
      ],
    },
  },

  clientStories: {
    id: {
      title: "Kepuasan Klien",
      subtitle: "Meningkatkan pengalaman, meningkatkan kepuasan klien",
      items: [
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for any type of business, startup or enterprise. Professional and very flexible. Recommended! hanged. It was popularised in the 1960s with t hanged. It was popularised in the 1960s with t",
        },
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for any type of business, startup or enterprise. Professional and very flexible. Recommended! Lorem ipsum dolor sit amek kopet mencret",
        },
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for any type of business, startup or enterprise. Professional and very flexible. Recommrinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesd in the 1960s with t",
        },
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for Professional and very flexible. Recommended! heype specimen book. It has survived not only five centuries, but also the learonic typesetting, remaining essentially unchanged. It was popularised in the 1960s with t",
        },
      ],
    },
    en: {
      title: "Client Satisfaction",
      subtitle: "Elevating experiences, unleashing client satisfaction",
      items: [
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for any type of business, startup or enterprise. Professional and very flexible. Recommended! hanged. It was popularised in the 1960s with t hanged. It was popularised in the 1960s with t",
        },
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for any type of business, startup or enterprise. Professional and very flexible. Recommended! Lorem ipsum dolor sit amek kopet mencret",
        },
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for any type of business, startup or enterprise. Professional and very flexible. Recommrinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesd in the 1960s with t",
        },
        {
          name: "Jolitos Kurniawan",
          jobTitle: "Pengangguran Banyak Gaya",
          image: "/images/stories/adjim.jpg",
          rate: 4.5,
          quote:
            "Best consulting for Professional and very flexible. Recommended! heype specimen book. It has survived not only five centuries, but also the learonic typesetting, remaining essentially unchanged. It was popularised in the 1960s with t",
        },
      ],
    },
  },

  contact: {
    id: {
      title: "Hubungi Kami",
      form: {
        name: "Nama",
        email: "Email",
        phone: "Telepon (opsional)",
        country: "Negara",
        company: "Perusahaan",
        message: "Tulis pesanmu disini...",
        discalimer: "",
        termsAndConditions: "Syarat & Ketentuan",
        termsAndConditionsLink: "",
        send: "Kirim Pesan",
      },
      faqs: [
        {
          title: "Section 1 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 2 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 3 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 4 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 5 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      allFaqs: {
        label: "View All",
        link: "",
      },
    },
    en: {
      title: "Contact Us",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (opsional)",
        country: "Country",
        company: "Company",
        message: "Write your message here...",
        discalimer: "By submitting, I'm agreeed to the",
        termsAndConditions: "Terms & Conditions",
        termsAndConditionsLink: "",
        send: "Send Message",
      },
      faqs: [
        {
          title: "Section 1 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 2 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 3 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 4 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Section 5 Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      allFaqs: {
        label: "View All",
        link: "",
      },
    },
  },

  footer: {
    id: {
      companyName: "PT. Kreasi Teknologi Kini",
      email: "contact@distrostudio.id",
      phone: "085877752503",
      narative: {
        title: "Kami Distro Studio",
        description:
          "Kami bukan sekedar tim, kami adalah manifestasi kreativitas tanpa batas di dunia digital. Di Distro Studio, kami merangkai kode menjadi seni, menciptakan pengalaman digital yang tak terlupakan. Inilah kami, sebuah studio distro yang tidak hanya membangun, tetapi juga merangkai kisah sukses.",
      },
      navs: {
        company: {
          label: "Perusahaan",
          items: [
            {
              label: "Distro Studio",
              link: "/",
            },
            {
              label: "Tentang Kami",
              link: "",
            },
            {
              label: "Layanan",
              link: "",
            },
            {
              label: "Portofolio",
              link: "",
            },
          ],
        },
        links: {
          label: "Links",
          items: [
            {
              label: "Pusat Bantuan",
              link: "",
            },
            {
              label: "Kebijakan Privasi",
              link: "",
            },
            {
              label: "Syarat & Ketentuan",
              link: "",
            },
          ],
        },
      },
      location: "Kami berbasis di Semarang",
    },
    en: {
      companyName: "PT. Kreasi Teknologi Kini",
      email: "contact@distrostudio.id",
      phone: "085877752503",
      narative: {
        title: "We're Distro Studio",
        description:
          "We are not just a team, we are the embodiment of boundless creativity in the digital world. At Distro Studio, we weave code into art, creating unforgettable digital experiences.",
      },
      navs: {
        company: {
          label: "Company",
          items: [
            {
              label: "Distro Studio",
              link: "/",
            },
            {
              label: "Services",
              link: "/services",
            },
            {
              label: "Portfolio",
              link: "/works?search=&category=0",
            },
            {
              label: "About Us",
              link: "/about",
            },
          ],
        },
        links: {
          label: "Links",
          items: [
            {
              label: "Help Center",
              link: "/help",
            },
            {
              label: "Privacy Policy",
              link: "/privacy-policy",
            },
            {
              label: "Terms & Conditions",
              link: "/term-and-conditions",
            },
          ],
        },
      },
      location: "We are based on Semarang",
    },
  },
};

export default landingData;
