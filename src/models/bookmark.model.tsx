export class Bookmark {
  id: string = '';
  url: string;
  date: Date;
  tags: string[];
  snapshot?: string;
  comments?: Comment[];

  constructor(url: string) {
    this.url = url;
    this.date = new Date();
    this.tags = [];
  }
}
