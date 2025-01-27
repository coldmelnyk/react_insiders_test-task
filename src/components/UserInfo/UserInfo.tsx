import React, { useState } from 'react';
import { Country, Department, Status, User } from '../../types';
import { SelectComponent } from '../SelectComponent';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface Props {
  countries: Country[];
  departments: Department[];
  user: User;
  statuses: Status[];
}

export const UserInfo: React.FC<Props> = ({
  countries,
  user,
  statuses,
  departments
}) => {
  // const [newUser, setNewUser] = useState(user);
  const [newDepartment, setNewDepartment] = useState<Department>(
    user.department
  );
  const [newStatus, setNewStatus] = useState<Status>(user.status);
  const [newCountry, setNewCountry] = useState<Country>(user.country);
  const [newName, setNewName] = useState<string>(user.name);

  console.log(newDepartment, newStatus, newCountry, newName);

  return (
    <>
      <h3 className={'mb-10 text-[20px] font-[400] tracking-[0.2px]'}>
        User Information
      </h3>

      <div className={'grid grid-cols-2 gap-x-[80px] gap-y-[10px] mb-20'}>
        <div>
          <p>User name</p>

          <InputText
            className={'h-[48px] w-full border-[#E3E8EE]'}
            type="text"
            placeholder="User name"
            defaultValue={newName}
            onChange={event => setNewName(event.target.value)}
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
          disabled
          pt={{
            root: {
              className:
                'bg-white w-[100px] h-[48px] rounded-none !shadow-none !border-[#C4C4C4]'
            },
            label: {
              className:
                'text-black font-light text-[14px] font-(family-name:Rubik) !button-disable'
            }
          }}
          label="Save"
        />
      </div>
    </>
  );
};
