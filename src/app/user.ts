export enum Gender {
  male = 'm',
  female = 'f'
}

export class User {
  name: string;
  city: string;
  gender: Gender;
  newsletter: boolean;
}
