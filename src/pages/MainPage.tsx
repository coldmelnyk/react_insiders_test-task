import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { Country, Department, Status, User } from '../types';
import { FetchStatus } from '../enums';
import { UserPage } from './UserPage.tsx';
import { EditPage } from './EditPage.tsx';
import { Loader } from '../components/Loader';

interface Props {
  page: string;
}

export const MainPage: React.FC<Props> = ({ page }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [users, setUsers] = useState<User[]>([]);

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

      {loading === FetchStatus.LOADING ? (
        <Loader />
      ) : (
        <>
          {page === 'USERS' ? (
            <UserPage
              loading={loading}
              countries={countries}
              departments={departments}
              statuses={statuses}
              users={users}
              handleUsers={setUsers}
            />
          ) : (
            <EditPage />
          )}
        </>
      )}
    </div>
  );
};
