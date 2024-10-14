import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./AxiosCommon";

// Fetch all books
export const getAllBooks = () => {
    return useQuery({
      queryKey: ["books"],
      queryFn: async () => {
        const { data } = await axiosInstance.get("/books");
        return data;
      },
    });
  };
  
  //  Api 
   const getOneBook  = async (id) => {
    const  {data} = await axiosInstance.get("/book/"+id);
    return data ;
  }

  // Api query 

  export const useGetOne = (id) => { 
    return useQuery({
      
    })
  }


