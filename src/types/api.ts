export interface BaseEntity {
  id: number;
  name: string;
}

export interface Character extends BaseEntity {
  image: string;
  species: string;
  gender: string;
}

export interface Location extends BaseEntity {
  type: string
}

export interface Episode extends BaseEntity {
  episode: string
}

export interface APIResponse<T> {
  info: Info;
  results: T[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
