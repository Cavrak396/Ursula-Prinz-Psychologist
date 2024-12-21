export interface Row {
  id: number;
  text: string;
  img: string;
}

export interface PsychoteraphyRowProps {
  row: Row;
}

export interface GetModifiedClass {
  (isModified: boolean, baseClass: string): string;
}
