export interface FooterContactTypes {
  id: number;
  image: string;
  contact: string;
  link: string;
  target?: boolean;
}

export interface FooterContactItemType {
  item: FooterContactTypes;
}
