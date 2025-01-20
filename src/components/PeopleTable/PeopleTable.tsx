import React from 'react';
import { User } from '../../types';
import { PersonTab } from '../PersonTab';

interface Props {
  users: User[];
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const PeopleTable: React.FC<Props> = ({ users, handleUsers }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border border-[#E3E8EE] text-sm text-left rtl:text-right text-gray-500">
        <thead className="h-[76px] border-b-[1px] text-[14px] font-[700] tracking-[0.4px] text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full name
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <PersonTab
              key={user.name}
              user={user}
              users={users}
              handleUsers={handleUsers}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
