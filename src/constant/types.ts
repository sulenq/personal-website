export type LanguageOptions = "id" | "en";

export type ServiceData = {
  icon: any;
  title: string;
  narative: string;
  image: string;
  detailLink: string;
  benefit: {
    title: string;
    items: { title: string; narative: string }[];
  };
};

export type ServicesData = {
  [lang in LanguageOptions]: ServiceData[];
};

export type WorkData = {
  category: number;
  clientLogo: string;
  clientName: string;
  title: string;
  image: string;
  imageAlter: string;
  narrative: string;
  solution: string;
  ss: string[];
  ssScrollLength: number;
  demo?: string;
  link?: string;
  helperText?: string;
};

export type WorksData = {
  [lang in LanguageOptions]: WorkData[];
};

export type DesignWorkData = {
  title: string;
  imageUrl: string;
  url: string;
};
export type DesignWorksData = DesignWorkData[];

export type AboutData = {
  [lang in LanguageOptions]: {
    intro: {
      title: string;
      narative: string;
    };
    members: {
      title: string;
    };
  };
};
