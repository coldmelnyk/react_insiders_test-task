import React, { useEffect, useState } from 'react';
import { Dropdown } from '../components/Dropdown';
import { fetchData } from '../utils/fetchData';
import { Country, Department, Status, User } from '../types';
import { PeopleTable } from '../components/PeopleTable';
import { Loader } from '../components/Loader';
import { FetchStatus } from '../enums';

interface Props {
  page: string;
}

export const UserPage: React.FC<Props> = ({ page }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [openedDropdowns, setOpenedDropdowns] = useState<string[]>([]);
  const [loading, setLoading] = useState<FetchStatus>(FetchStatus.LOADING);

  useEffect(() => {
    setLoading(FetchStatus.LOADING);

    fetchData({
      setCountries,
      setDepartments,
      setStatuses,
      setUsers,
      setLoading
    });
  }, []);

  return (
    <div className="p-[80px] pt-[60px] border border-black">
      <h2 className="text-center font-[500] text-2xl tracking-[6px] mb-[40px]">
        {page}
      </h2>

      {page === 'USERS' ? (
        <>
          {loading === FetchStatus.SUCCESS ? (
            <>
              <p className="mb-[12px]">
                Please add at least 3 departments to be able to proceed next
                steps.
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

              <PeopleTable users={users} handleUsers={setUsers} />
            </>
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <p>Edit user page.</p>
      )}
    </div>
  );
};
