import cn from 'classnames';
import { Country, Department, Status } from '../../types';

interface Props {
  props: Country[] | Department[] | Status[];
  name: string;
  handleOpenedDropdowns: React.Dispatch<React.SetStateAction<string[]>>;
  openedDropdowns: string[];
}

export const Dropdown: React.FC<Props> = ({
  props,
  name,
  handleOpenedDropdowns,
  openedDropdowns
}) => {
  return (
    <>
      <div className="border border-black flex flex-col w-[220px] max-h-fit">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="h-[48px] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() =>
            handleOpenedDropdowns(state => {
              let newState;

              if (state.includes(name)) {
                newState = state.filter(value => value !== name);

                return newState;
              }

              newState = [...state, name];

              return newState;
            })
          }
        >
          {name}{' '}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={cn('z-10 divide-y dark:bg-gray-700', {
            hidden: !openedDropdowns.includes(name)
          })}
        >
          <ul
            className="text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {props.map(data => (
              <li key={data.value}>
                <p className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {data.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
