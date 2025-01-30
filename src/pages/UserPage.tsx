import { PeopleTable } from '../components/PeopleTable';
import React, { useState } from 'react';
import { Country, Department, Filters, Status, User } from '../types';
import { ErrorModal } from '../components/ErrorModal';
import { FetchStatus } from '../enums';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { filteringPeopleArray } from '../utils';

interface Props {
  countries: Country[];
  departments: Department[];
  users: User[];
  statuses: Status[];
  handleUsers: React.Dispatch<React.SetStateAction<User[]>>;
  loading: FetchStatus;
}

const initialFilters = {
  countries: [],
  departments: [],
  statuses: []
};

export const UserPage: React.FC<Props> = ({
  users,
  handleUsers,
  statuses,
  countries,
  departments,
  loading
}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredPeople = filteringPeopleArray({ filters, users });
  return (
    <>
      {loading !== FetchStatus.ERROR ? (
        <>
          <p className="mb-[12px]">
            Please add at least 3 departments to be able to proceed next steps.
          </p>

          <div className="relative min-w-full h-[48px] mb-[40px]">
            <div className="absolute z-50 flex flex-row gap-[12px]">
              <MultiSelect
                value={filters.countries}
                onChange={(e: MultiSelectChangeEvent) =>
                  setFilters(state => {
                    return { ...state, countries: e.value };
                  })
                }
                options={countries}
                optionLabel="name"
                placeholder="Select countries"
                maxSelectedLabels={0}
                pt={{
                  root: { className: 'md:w-[220px]' }
                }}
              />
              <MultiSelect
                value={filters.statuses}
                onChange={(e: MultiSelectChangeEvent) =>
                  setFilters(state => {
                    return { ...state, statuses: e.value };
                  })
                }
                options={statuses}
                optionLabel="name"
                placeholder="All statuses"
                maxSelectedLabels={0}
                pt={{
                  root: { className: 'md:w-[220px]' }
                }}
              />
              <MultiSelect
                value={filters.departments}
                onChange={(e: MultiSelectChangeEvent) =>
                  setFilters(state => {
                    return { ...state, departments: e.value };
                  })
                }
                options={departments}
                optionLabel="name"
                placeholder="Select departments"
                maxSelectedLabels={0}
                pt={{
                  root: { className: 'md:w-[220px]' }
                }}
              />
            </div>
          </div>

          <PeopleTable users={filteredPeople} handleUsers={handleUsers} />
        </>
      ) : (
        <ErrorModal />
      )}
    </>
  );
};
