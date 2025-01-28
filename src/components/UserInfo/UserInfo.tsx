import React, { useState } from 'react';
import { Country, Department, Status, User } from '../../types';
import { SelectComponent } from '../SelectComponent';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { editUsersByName } from '../../utils/editUsersByName.ts';

interface Props {
  countries: Country[];
  departments: Department[];
  selectedUser: User;
  users: User[];
  statuses: Status[];
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserInfo: React.FC<Props> = ({
  countries,
  selectedUser,
  statuses,
  departments,
  users,
  handleUsers
}) => {
  // const [newUser, setNewUser] = useState(user);
  const [newDepartment, setNewDepartment] = useState<Department>(
    selectedUser.department
  );
  const [newStatus, setNewStatus] = useState<Status>(selectedUser.status);
  const [newCountry, setNewCountry] = useState<Country>(selectedUser.country);
  const [newName, setNewName] = useState<string>(selectedUser.name);

  const isStatesModified =
    selectedUser.name !== newName ||
    selectedUser.country !== newCountry ||
    selectedUser.department !== newDepartment ||
    selectedUser.status !== newStatus;

  // console.log(newDepartment, newStatus, newCountry, newName);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (isStatesModified) {
      const newUser = {
        name: newName,
        department: newDepartment,
        country: newCountry,
        status: newStatus
      };

      handleUsers(editUsersByName(selectedUser, newUser, users));
    }
  };

  return (
    <div onSubmit={(event) => handleSubmit(event)}>
      <h3 className={'mb-10 text-[20px] font-[400] tracking-[0.2px]'}>
        User Information
      </h3>

      <div className={'grid grid-cols-2 gap-x-[80px] gap-y-[10px] mb-20'}>
        <div className={'max-w-[500px]'}>
          <p>User name</p>

          <InputText
            type="text"
            placeholder="User name"
            defaultValue={newName}
            onChange={event => setNewName(event.target.value)}
            pt={{
              root: {
                className: 'h-[48px] w-full !border-[#E3E8EE]'
              }
            }}
          />
        </div>

        <SelectComponent
          nameOfSelect={'Department'}
          selectOptions={departments}
          selectValue={newDepartment}
          handleSelectValue={setNewDepartment}
        />

        <SelectComponent
          nameOfSelect={'Country'}
          selectOptions={countries}
          selectValue={newCountry}
          handleSelectValue={setNewCountry}
        />

        <SelectComponent
          nameOfSelect={'Status'}
          selectOptions={statuses}
          selectValue={newStatus}
          handleSelectValue={setNewStatus}
        />
      </div>

      <div className={'flex justify-end gap-[20px]'}>
        <Button
          pt={{
            root: {
              className:
                'bg-white w-[100px] h-[48px] rounded-none !shadow-none !border-[#C4C4C4]'
            },
            label: {
              className:
                'text-black font-light text-[14px] font-(family-name:Rubik)'
            }
          }}
          label="Undo"
        />
        <Button
          onClick={handleSubmit}
          pt={{
            root: {
              className:
                'bg-white w-[100px] h-[48px] rounded-none !shadow-none !border-[#C4C4C4]'
            },
            label: {
              className:
                'text-black font-light text-[14px] font-(family-name:Rubik) '
            }
          }}
          label="Save"
        />
      </div>
    </div>
  );
};
