import { UseFormRegister } from "react-hook-form";
import { IFormData } from "./CatalogFilter";

export interface IFilterProps {
  register: UseFormRegister<IFormData>;
}
