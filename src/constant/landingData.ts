import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import worksData from "./worksData";

const landingData = {
  landingNav: {
    id: [
      {
        name: "Tentang Saya",
        link: "/about",
      },
      {
        name: "Portofolio",
        link: "/works",
      },
    ],
    en: [
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/works",
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
      title: "Siapa Saya?",
      ourMember: {
        label: "Bio Saya",
        link: "",
      },
      items: [
        {
          title: "Thinker",
          narative:
            "Memiliki kepribadian yang tercermin dalam kecenderungan saya untuk selalu memikirkan solusi-solusi kreatif dan inovatif, serta melakukannya dengan ketelitian dan kecermatan yang tinggi dalam setiap aspek pekerjaan saya",
        },
        {
          title: "Web Developer",
          narative:
            "Lulusan dari fakultas teknik informatika dan memilih jalan menjadi seorang web developer. Saya fokus di React karena lebih suka mengerjakan frontend",
        },
        {
          title: "Graphic Designer",
          narative:
            "Seni dan desain, saya menyukai keduanya. Menjadi seorang graphic desainer juga tidak disengaja, dengan menggunakan CorelDRAW, saya mampu membuat desain apapun yang saya mau",
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
    {
      name: "Instagram",
      link: "https://www.instagram.com/_sulenq/",
      icon: GithubLogo,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/fatwa-linovera-620672150/",
      icon: LinkedinLogo,
    },
    { name: "Github", link: "https://github.com/sulenq", icon: InstagramLogo },
  ],

  works: {
    content: {
      id: {
        nav: "Portofolio",
        title: "Karya Web",
        otherWorks: {
          link: "",
          label: "Lihat Lainnya",
        },
        viewDetail: "Lihat Detail",
      },
      en: {
        nav: "Portfolio",
        title: "Web Works",
        otherWorks: {
          link: "",
          label: "View Other",
        },
        viewDetail: "View Detail",
      },
    },
    worksItem: worksData,
  },

  designWorks: {
    content: {
      id: {
        nav: "Portofolio",
        title: "Karya Desain",
        otherWorks: {
          link: "",
          label: "Lihat Lainnya",
        },
        viewDetail: "Lihat Detail",
      },
      en: {
        nav: "Portfolio",
        title: "Design Works",
        otherWorks: {
          link: "",
          label: "View Other",
        },
        viewDetail: "View Detail",
      },
    },
    worksItem: worksData,
  },

  contact: {
    id: {
      title: "Hubungi Saya",
      cta: "Mari bekerja sama untuk membuat sesuatu yang luar biasa",
    },
    en: {
      title: "Contact Me",
      cta: "Let's work together to make something awesome",
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
