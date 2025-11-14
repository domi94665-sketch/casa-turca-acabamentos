export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category?: Category;
  description?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  };
  gallery?: Array<{
    _key: string;
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  }>;
}

export interface Testimonial {
  _id: string;
  name: string;
  text: string;
  projectRef?: Project;
}

export interface DesignerLead {
  name: string;
  email: string;
  phone: string;
}
