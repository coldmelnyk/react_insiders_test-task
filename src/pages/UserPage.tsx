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
          <p className="mb-[12px]">
            Please add at least 3 departments to be able to proceed next steps.
          </p>

          {isAllDataFetched && (
            <>
              <div className='relative min-w-full h-[48px] mb-[40px]'>
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

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="h-[76px] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                      <>
                        <tr
                          key={user.name}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {user.name}
                          </th>
                          <td className="px-6 py-4">{user.department.name}</td>
                          <td className="px-6 py-4">{user.country.name}</td>
                          <td className="px-6 py-4">{user.status.name}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
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
