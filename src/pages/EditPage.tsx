import React, { useState } from 'react';
import { Country, Department, Status, User } from '../types';
import { UserInfo } from '../components/UserInfo';
import { SelectComponent } from '../components/SelectComponent';

interface Props {
  countries: Country[];
  departments: Department[];
  users: User[];
  statuses: Status[];
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const EditPage: React.FC<Props> = ({
  countries,
  departments,
  statuses,
  users
}) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // const perevirka = () => {
  //   const userCountry = JSON.stringify(selectedUser!.country);
  //
  //   countries.some(country => JSON.stringify(country) === userCountry);
  // }
  //
  // // console.log(users.includes(selectedUser!), selectedUser);
  // if (selectedUser !== null) {
  //   perevirka();
  // }

  return (
    <div>
      <div className="mb-[60px]">
        <SelectComponent
          nameOfSelect={'User'}
          selectValue={selectedUser}
          handleSelectValue={setSelectedUser}
          selectOptions={users}
        />
      </div>

      {selectedUser !== null && (
        <UserInfo
          countries={countries}
          departments={departments}
          statuses={statuses}
          user={selectedUser}
        />
      )}
    </div>
  );
};
