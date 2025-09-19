import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import worksData from "./worksData";
import designWorksData from "./designWorksData";

const landingData = {
  landingNav: {
    id: [
      {
        name: "Tentang Saya",
        link: "/about",
      },
      {
        name: "Portofolio",
        link: "/works?category=0",
      },
    ],
    en: [
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/works?category=0",
      },
    ],
  },

  hero: {
    id: {
      greeting: "Halo, saya",
      narative:
        "Saya adalah pengembang web yang mengkhususkan diri dalam pengembangan Frontend dengan React dan memiliki minat besar terhadap pengalaman pengguna yang mulus dan responsif. Saya menggambarkan diri saya sebagai pengembang frontend dengan pola pikir seorang desainer.",
      contact: "Hubungi Saya",
      portfolio: "Portofolio",
      stats: [
        {
          name: "Portofolio (web & desain)",
          value: "20+",
        },
        {
          name: "Tahun Pengalaman",
          value: `${new Date().getFullYear() - 2023}+`,
        },
      ],
    },
    en: {
      greeting: "Hi there, I'm",
      narative:
        "I am a web developer specializing in Frontend development with React that passionate in seamless user experience and responsiveness. I describe myself as frontend developer with a mindset of a designer.",
      contact: "Contact Me",
      portfolio: "Portfolio",
      stats: [
        {
          name: "Portfolio (web & design)",
          value: "20+",
        },
        {
          name: "Years Experience",
          value: "2",
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
            "Memiliki kepribadian yang tercermin dalam kecenderungan saya untuk selalu memikirkan solusi-solusi kreatif dan inovatif, serta melakukannya dengan ketelitian dan kecermatan yang tinggi dalam setiap aspek pekerjaan saya.",
        },
        {
          title: "Web Developer",
          narative:
            "Lulusan dari fakultas teknik informatika dan memilih jalan menjadi seorang web developer. Saya fokus di React karena lebih suka mengerjakan frontend.",
        },
        {
          title: "Graphic Designer",
          narative:
            "Seni dan desain, saya menyukai keduanya. Menjadi seorang graphic desainer juga tidak disengaja, dengan menggunakan CorelDRAW, saya mampu membuat desain apapun yang saya mau.",
        },
        {
          title: "Co-Founder of Exium Studio",
          narative:
            "Exium Studio adalah agensi pengembangan perangkat lunak yang menyediakan layanan pembuatan webapp (PWA) lintas platform.",
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
            "I graduated from the faculty of informatics engineering and chose the path of becoming a web developer. I focus on React because I prefer working on the frontend.",
        },
        {
          title: "Graphic Designer",
          narative:
            "Art and design, I love both. Becoming a graphic designer is also accidental, by using CorelDRAW I am able to create any design I want.",
        },
        {
          title: "Co-Founder of Exium Studio",
          narative:
            "Exium Studio is a software development agency that provides cross-platform webapp (PWA) creation services.",
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
    worksItem: designWorksData,
  },

  contact: {
    id: {
      title: "Hubungi Saya",
      cta: "Suka dengan apa yang anda lihat? Mari bekerja sama",
    },
    en: {
      title: "Contact Me",
      cta: "Like what you see? Let's work together",
    },
  },
};

export default landingData;
