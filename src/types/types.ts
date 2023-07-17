export interface PostDataParams {
  contents: string;
  youtubeLink: string;
}

export interface PostWriteResponse {
  contents: string;
  youtubeLink: string;
  _id: string;
  publishedDate: string;
  __v: number;
}
