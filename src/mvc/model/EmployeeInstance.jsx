import axios from "axios";

 export const EmployeeInstance = axios.create({
    baseURL : "www.data.com" ,
    timeout : 10000 , 
    headers : {'Content-Type' : 'Application/json'}
 })
