import type { Media } from "@/types/media";
import type { BlocksContent } from "vue-strapi-blocks-renderer";

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  ceo: boolean;
  photo: Media;
};

export type Presenting = {
  id: number;
  mission: string;
  content: BlocksContent;
}

export type AboutPage = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    presenting: Presenting;
    team: TeamMember[];
  };
  meta: {};
};