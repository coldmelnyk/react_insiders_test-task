import { Filters, User } from '../types';

interface Props {
  filters: Filters;
  users: User[];
}

export const filteringPeopleArray = ({ filters, users }: Props) => {
  let newPeople = [...users];

  if (filters.countries.length > 0) {
    newPeople = newPeople.filter(person => {
      return filters.countries.includes(person.country.value);
    });
  }

  if (filters.departments.length > 0) {
    newPeople = newPeople.filter(person => {
      return filters.departments.includes(person.department.value);
    });
  }

  if (filters.statuses.length > 0) {
    newPeople = newPeople.filter(person => {
      return filters.statuses.includes(person.status.value);
    });
  }

  return newPeople;
};
