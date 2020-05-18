import { Track } from './track';

export interface Album {
  name: string;
  resleaseDate: string;
  coverImage: string;
  tracks: Track[];
}
