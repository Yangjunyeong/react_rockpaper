export type Choice = {
  rock: SelectInfo;
  paper: SelectInfo;
  scissors: SelectInfo;
};

export type SelectInfo = {
  name: string;
  img: any;
};

export type ChoiceKeys = keyof Choice;