import React, { useEffect, useState } from 'react';
import { Dropdown } from '../components/Dropdown';
import { fetchData } from '../utils/fetchData';
import { Country, Department, Status, User } from '../types';

interface Props {
  page: string;
}

export const UserPage: React.FC<Props> = ({ page }) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [departments, setDepartments] = useState<Department[] | null>(null);
  const [statuses, setStatuses] = useState<Status[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [openedDropdowns, setOpenedDropdowns] = useState<string[]>([]);

  const isAllDataFetched =
    countries?.length &&
    departments?.length &&
    statuses?.length &&
    users?.length;

  useEffect(() => {
    fetchData({ setCountries, setDepartments, setStatuses, setUsers });
  }, []);

  return (
    <div className="p-[80px] pt-[60px] border border-black">
      <h2 className="text-center font-[500] text-2xl tracking-[6px] mb-[40px]">
        {page}
      </h2>

      {page === 'USERS' ? (
        <>
          <p>
            Please add at least 3 departments to be able to proceed next steps.
          </p>

          {isAllDataFetched && (
            <>
              <div className='flex flex-row gap-[12px]'>
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
            </>
          )}
        </>
      ) : (
        <section>Edit</section>
      )}
    </div>
  );
};
