export interface IUser {
  user: any;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  provider: string;
  token?: string;
  last_login?: string;
}

export interface Token {
  token: string;
  userId: string;
  createdAt: Date;
}

export interface REQUESTUSER {
  id?: string;
  token?: string;
}
export interface TPlaylist {
  name: string;
  genre_id: string;
  tracks: string[];
  isPublic: boolean;
  likes?: string[];
  owner_id: string;
}

export interface GENRE {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: string;
}

export type ResponseData = Record<string, any> | Record<string, any>[];