import { EmployeeInstance } from "../../model/EmployeeInstance"

 export const prefix = '/emp' ;
export const getAllEmployee  = () => { 
    const {data} = EmployeeInstance.get('/list');
    return data;
}