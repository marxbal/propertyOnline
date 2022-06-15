export class table {
  title: string;
  header: boolean;
  value: any;

  constructor(title: string, header: boolean, value: any) {
    this.title = title;
    this.header = header;
    this.value = value;
  }
}
