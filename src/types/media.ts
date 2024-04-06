export type MediaFormat = {
  name: string;
  hash: string;
  width: number;
  height: number;
  url: string;
}

export type Media = {
  id: number;
  name: string;
  url: string;
  alt: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: MediaFormat;
    medium: MediaFormat;
    small: MediaFormat;
    large: MediaFormat;
  };
}