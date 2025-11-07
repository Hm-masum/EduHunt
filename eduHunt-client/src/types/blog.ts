export type IBlog = {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  tags: string[];
  isPublished: boolean;
  author?: string;
  authorImage?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
