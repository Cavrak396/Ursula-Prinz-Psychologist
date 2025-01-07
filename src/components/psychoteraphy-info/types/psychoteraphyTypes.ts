export interface Row {
  id: number;
  title?: string;
  firstText?: string;
  secondText?: string;
  thirdText?: string;
  img: string;
}

export interface PsychoteraphyRowProps {
  row: Row;
}

export interface PsychoteraphyRowTextProps {
  text?: string;
}

export interface GetModifiedClass {
  (isModified: boolean, baseClass: string): string;
}