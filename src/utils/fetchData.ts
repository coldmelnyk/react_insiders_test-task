import React from 'react';
import { Country, Department, Status, User } from '../types';

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
  setStatuses: React.Dispatch<React.SetStateAction<Status[]>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const fetchData = ({
  setCountries,
  setDepartments,
  setStatuses,
  setUsers
}: Props) => {
  Promise.all([
    fetch('/api/countries.json').then(response => response.json()),
    fetch('/api/departments.json').then(response => response.json()),
    fetch('/api/statuses.json').then(response => response.json()),
    fetch('/api/users.json').then(response => response.json())
  ])
    .then(data => {
      setCountries(data[0]);
      setDepartments(data[1]);
      setStatuses(data[2]);
      setUsers(data[3]);
    })
    .catch(err => {
      console.log(err);
    });
};
