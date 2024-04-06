import type { Media, MediaFormat, Project } from "@/types";

const isUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }

}

const mediaFormatMapper = (data: any): MediaFormat => {
  return {
    name: data.name,
    hash: data.hash,
    width: data.width,
    height: data.height,
    url: isUrl(data.url) ? data.url : import.meta.env.VITE_BACKEND_URL + data.url,
  }
}

export const mediaMapper = (data: any): Media => {
  return {
    id: data.id,
    name: data.attributes.name,
    url: isUrl(data.attributes.url) ? data.attributes.url : import.meta.env.VITE_BACKEND_URL + data.attributes.url,
    alt: data.attributes.alternativeText,
    caption: data.attributes.caption,
    width: data.attributes.width,
    height: data.attributes.height,
    formats: {
      thumbnail: data.attributes.formats.thumbnail && mediaFormatMapper(data.attributes.formats.thumbnail),
      medium: data.attributes.formats.medium && mediaFormatMapper(data.attributes.formats.medium),
      small: data.attributes.formats.small && mediaFormatMapper(data.attributes.formats.small),
      large: data.attributes.formats.large && mediaFormatMapper(data.attributes.formats.large),
    },
  };
}

export const projectMapper = (data: any): Project => {
  return {
    id: data.id,
    attributes: {
      name: data.attributes.name,
      createdAt: data.attributes.createdAt,
      updatedAt: data.attributes.updatedAt,
      publishedAt: data.attributes.publishedAt,
    },
    information: {
      id: data.attributes.information.id,
      date: data.attributes.information.date,
      place: data.attributes.information.place,
      client: data.attributes.information.client,
      category: data.attributes.information.category,
    },
    media: data.attributes.gallery.data.map(mediaMapper),
  };
}

export const projectComponentMapper = (data: any): Project & { opened: boolean } => {
  return {
    ...projectMapper(data),
    opened: false,
  };
}