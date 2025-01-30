import React, { useEffect, useState } from 'react';
import { Country, Department, Status, User } from '../../types';
import { SelectComponent } from '../SelectComponent';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { editUsersByName } from '../../utils';

interface Props {
  countries: Country[];
  departments: Department[];
  selectedUser: User;
  users: User[];
  statuses: Status[];
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
  handleSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserInfo: React.FC<Props> = ({
  countries,
  selectedUser,
  statuses,
  departments,
  users,
  handleUsers,
  handleSelectedUser
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

  const handleUndo = () => {
    if (newDepartment !== selectedUser.department) {
      setNewDepartment(selectedUser.department);
    }

    if (newStatus !== selectedUser.status) {
      setNewStatus(selectedUser.status);
    }

    if (newCountry !== selectedUser.country) {
      setNewCountry(selectedUser.country);
    }

    if (newName !== selectedUser.name) {
      setNewName(selectedUser.name);
    }
  };

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
      handleSelectedUser(() => newUser);
    }
  };

  console.log(newName);

  useEffect(() => {
    if (selectedUser.name !== newName) {
      setNewName(selectedUser.name);
    }
    if (selectedUser.department !== newDepartment) {
      setNewDepartment(selectedUser.department);
    }
    if (selectedUser.status !== newStatus) {
      setNewStatus(selectedUser.status);
    }
    if (selectedUser.country !== newCountry) {
      setNewCountry(selectedUser.country);
    }
  }, [selectedUser]);

  return (
    <div onSubmit={event => handleSubmit(event)}>
      <h3 className={'mb-10 text-[20px] font-[400] tracking-[0.2px]'}>
        User Information
      </h3>

      <div className={'grid grid-cols-2 gap-x-[80px] gap-y-[10px] mb-20'}>
        <div className={'max-w-[500px]'}>
          <p>User name</p>

          <InputText
            type="text"
            placeholder="User name"
            value={newName}
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
          selectValue={newDepartment.value}
          handleSelectValue={setNewDepartment}
        />

        <SelectComponent
          nameOfSelect={'Country'}
          selectOptions={countries}
          selectValue={newCountry.value}
          handleSelectValue={setNewCountry}
        />

        <SelectComponent
          nameOfSelect={'Status'}
          selectOptions={statuses}
          selectValue={newStatus.value}
          handleSelectValue={setNewStatus}
        />
      </div>

      <div className={'flex justify-end gap-[20px]'}>
        <Button
          onClick={handleUndo}
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
          disabled={!isStatesModified}
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
