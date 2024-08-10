import type { Media } from "./media";

type ProjectInformation = {
  id: number;
  date: string;
  place: string;
  client: string;
  category: string;
  description: string;
};

export type Project = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  information: ProjectInformation;
  media: Media[];
};


export type ProjectComponent = Project & { opened: boolean };