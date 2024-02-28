import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
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
        label: "Bio Saya",
        link: "",
      },
      items: [
        {
          title: "Thinker",
          narative:
            "Kepribadianku tercermin dalam kecenderunganku untuk selalu memikirkan solusi-solusi kreatif dan inovatif, serta mendekatinya dengan ketelitian dan kecermatan yang tinggi dalam setiap aspek pekerjaanku",
        },
        {
          title: "Web Developer",
          narative:
            "Aku lulusan dari fakultas teknik informatika dan memilih jalan menjadi seorang web developer. Aku fokus di React karena aku lebih suka mengerjakan frontend",
        },
        {
          title: "Graphic Designer",
          narative:
            "Seni dan desain, aku menyukai keduanya. Menjadi seorang graphic desainer juga tidak disengaja, dengan menggunakan CorelDRAW aku mampu membuat desain apapun yang aku mau",
        },
      ],
    },
    en: {
      nav: "About Me",
      title: "Who am I?",
      ourMember: {
        label: "My Bio",
        link: "",
      },
      items: [
        {
          title: "Thinker",
          narative:
            "My personality is reflected in my tendency to always think of creative and innovative solutions, and to approach them with great care and precision in every aspect of my work.",
        },
        {
          title: "Web Developer",
          narative:
            "I graduated from the faculty of informatics engineering and chose the path of becoming a web developer. I focus on React because I prefer working on the frontend",
        },
        {
          title: "Graphic Designer",
          narative:
            "Art and design, I love both. Becoming a graphic designer is also accidental, by using CorelDRAW I am able to create any design I want",
        },
      ],
    },
  },

  sosmeds: [
    { name: "Instagram", link: "", icon: GithubLogo },
    { name: "LinkedIn", link: "", icon: LinkedinLogo },
    { name: "Github", link: "", icon: InstagramLogo },
  ],

  works: {
    content: {
      id: {
        nav: "Portofolio",
        title: "Hasil Kerjaku",
        otherWorks: {
          link: "",
          label: "Lihat Lainnya",
        },
        viewDetail: "Lihat Detail",
      },
      en: {
        nav: "Portfolio",
        title: "My Works",
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
