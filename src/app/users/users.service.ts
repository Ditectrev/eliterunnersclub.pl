export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Adam',
      age: 26,
      city: 'Warszawa',
      activities: 27,
      kilometers: 2081
    },
    {
      id: 2,
      name: 'Anna',
      age: 43,
      city: 'Wrocław',
      activities: 6,
      kilometers: 675
    },
    {
      id: 3,
      name: 'Paweł',
      age: 21,
      city: 'Łódź',
      activities: 52,
      kilometers: 4532
    }
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return user;
  }

  // TODO: Add edit.
  updateUser(id: number, userInfo: {name: string, age: number, city: string, activities: number, kilometers: number}) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    if (user) {
      user.name = userInfo.name;
      user.age = userInfo.age;
      user.city = userInfo.city;
      user.activities = userInfo.activities;
      user.kilometers = userInfo.kilometers;
    }
  }
}
