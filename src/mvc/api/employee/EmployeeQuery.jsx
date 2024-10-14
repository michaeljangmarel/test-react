import { useQuery } from "@tanstack/react-query"
import { getAllEmployee } from "./EmployeeApi"

export const useEmployeeList = () => {
    return  useQuery(['emps'] , getAllEmployee);
}

