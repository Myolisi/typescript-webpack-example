export class user {
  firstname: string;
  surname: string;

  constructor(firstname: string, surname: string) {
    this.firstname = firstname;
    this.surname = surname;
  }

  getUser() {
    return `Welcome : ${this.firstname} ${this.surname}`;
  }
}
