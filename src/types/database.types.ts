export type Timestamptz = string;

export interface NewsRow {
  pk        : number;
  created_at: Timestamptz;
  title     : string;
  content   : string;
  image?    : string;
  author?   : string;
}

export interface CreateNewsInput {
  title   : string;
  content : string;
  image?  : string;
  author? : string;
}

export interface ArticleRow {
  pk        : number;
  created_at: Timestamptz;
  title     : string;
  content   : string;
  image?    : string;
  author?   : string;
}

export interface CreateArticleInput {
  title   : string;
  content : string;
  image?  : string;
  author? : string;
}

export interface TeamRow {
  pk        : number;
  created_at: Timestamptz;
  role      : string;
  speciality: string;
  cellphone : string;
  email     : string;
}

export interface CreateTeamInput {
  role      : string;
  speciality: string;
  cellphone : string;
  email     : string;
}
