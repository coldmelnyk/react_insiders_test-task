import { Dropdown } from '../components/Dropdown';
import { PeopleTable } from '../components/PeopleTable';
import React from 'react';
import { Country, Department, Status, User } from '../types';
import { ErrorModal } from '../components/ErrorModal';
import { FetchStatus } from '../enums';

interface Props {
  countries: Country[];
  departments: Department[];
  users: User[];
  statuses: Status[];
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
  openedDropdowns: string[];
  setOpenedDropdowns: React.Dispatch<React.SetStateAction<string[]>>;
  loading:  FetchStatus;
}

export const UserPage: React.FC<Props> = ({
  users,
  handleUsers,
  statuses,
  countries,
  departments,
  openedDropdowns,
  setOpenedDropdowns,
  loading
}) => {
  return (
    <>
      {loading !== FetchStatus.ERROR ? (
        <>
          <p className="mb-[12px]">
            Please add at least 3 departments to be able to proceed next steps.
          </p>

          <div className="relative min-w-full h-[48px] mb-[40px]">
            <div className="absolute z-50 flex flex-row gap-[12px]">
              <Dropdown
                props={countries}
                name="Select country"
                handleOpenedDropdowns={setOpenedDropdowns}
                openedDropdowns={openedDropdowns}
              />
              <Dropdown
                props={departments}
                name="All statuses"
                handleOpenedDropdowns={setOpenedDropdowns}
                openedDropdowns={openedDropdowns}
              />
              <Dropdown
                props={statuses}
                name="Departments"
                handleOpenedDropdowns={setOpenedDropdowns}
                openedDropdowns={openedDropdowns}
              />
            </div>
          </div>

          <PeopleTable users={users} handleUsers={handleUsers} />
        </>
      ) : (
        <ErrorModal />
      )}
    </>
  );
};
