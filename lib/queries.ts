import { groq } from 'next-sanity';

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && defined(featuredImage)][0...6]{
    _id,
    title,
    slug,
    description,
    featuredImage{
      asset->{url},
      alt
    },
    category->{
      _id,
      title,
      slug
    }
  } | order(_createdAt desc)
`;

export const ALL_PROJECTS_QUERY = groq`
  *[_type == "project"]{
    _id,
    title,
    slug,
    description,
    featuredImage{
      asset->{url},
      alt
    },
    category->{
      _id,
      title,
      slug
    }
  } | order(_createdAt desc)
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    featuredImage{
      asset->{url},
      alt
    },
    category->{
      _id,
      title,
      slug
    },
    gallery[]{
      _key,
      alt,
      asset->{url}
    }
  }
`;

export const CATEGORIES_QUERY = groq`
  *[_type == "category" && slug.current in [
    "cozinhas",
    "casas-de-banho",
    "pisos-ladrilhos",
    "sistemas-de-gesso-tectos",
    "mobilario-e-carpintaria",
    "instalacoes-tecnicas",
    "gestao-de-acabamentos"
  ]] | order(_createdAt asc){
    _id,
    title,
    slug
  }
`;

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"]{
    _id,
    name,
    text,
    projectRef->{
      _id,
      title,
      slug
    }
  }
`;
