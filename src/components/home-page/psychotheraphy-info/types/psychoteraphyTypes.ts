export interface Row {
  id: number;
  title?: string;
  firstText?: string;
  secondText?: string;
  thirdText?: string;
  img: string;
}

export interface GetModifiedClass {
  (isModified: boolean, baseClass: string): string;
}

export interface PsychoteraphyRowProps {
  row: Row;
}

export interface SharedRowProps {
  row: Row;
  getModifiedClass: GetModifiedClass;
  isModified: boolean;
}

export interface PsychoteraphyRowTextProps {
  text?: string;
}