import { Country } from "./country";
import { Department } from "./department";
import { Status } from "./status";

export interface User {
  name: string;
  status: Status;
  department: Department;
  country: Country;
}
