export interface Speaker {
  name: string;
  title: string;
  company: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  showOnLanding?: boolean;
}

export interface Session {
  time: string;
  title: string;
  description?: string;
  duration: string;
  type: 'talk' | 'panel' | 'workshop' | 'networking' | 'break';
  speakers?: string[];
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakers: Speaker[];
  schedule: Session[];
  isUpcoming: boolean;
  registrationUrl?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  content: string;
  postUrl?: string;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}