import { cache } from 'react';

import { ALL_PROJECTS_QUERY, PROJECT_BY_SLUG_QUERY } from './queries';
import { fallbackProjects } from './mock-data';
import { sanityClient } from './sanity.client';
import type { Project } from './types';

async function fetchProjects(): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch<Project[]>(ALL_PROJECTS_QUERY);

    if (projects && projects.length > 0) {
      return projects;
    }
  } catch (error) {
    console.error('Erro ao obter projetos do Sanity:', error);
  }

  return fallbackProjects;
}

async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const project = await sanityClient.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, { slug });

    if (project) {
      return project;
    }
  } catch (error) {
    console.error(`Erro ao obter o projeto com o slug "${slug}" do Sanity:`, error);
  }

  return fallbackProjects.find((project) => project.slug?.current === slug) ?? null;
}

export const getAllProjects = cache(fetchProjects);

export const getProjectBySlug = cache(fetchProjectBySlug);
