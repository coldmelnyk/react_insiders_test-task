import React from 'react';
import { User } from '../../types';

interface Props {
  users: User[];
  user: User;
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const PersonTab: React.FC<Props> = ({ users, user, handleUsers }) => {
  return (
    <tr key={user.name} className="h-[80px]">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {user.name}
      </th>
      <td className="px-6 py-4">{user.department.name}</td>
      <td className="px-6 py-4">{user.country.name}</td>
      <td className="px-6 py-4">{user.status.name}</td>
      <td
        onClick={() => {
          const newUsers = users.filter(
            filterUser => filterUser.name !== user.name
          );

          handleUsers(newUsers);
        }}
        className="px-6 deleteIcon"
      ></td>
    </tr>
  );
};
