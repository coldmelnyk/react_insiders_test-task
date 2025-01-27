import { User } from '../types';

export const editUsersByName = (selectedUser: User, newUser: User, users: User[]) => {
  const newUsers: User[] = [];

  users.forEach((user: User) => {
    if (user.name === selectedUser.name) {
      newUsers.push(newUser);
    } else {
      newUsers.push(user);
    }
  })

  return newUsers;
}