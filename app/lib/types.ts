export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  date?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
}
