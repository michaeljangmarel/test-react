import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./AxiosCommon";

//  Fetch all book
export const getAllBooks = () => {
  return useQuery({
    queryKey: ["books"], // The unique key for the query
    queryFn: async () => {
      const { data } = await axiosInstance.get("/books"); // Fetching data from the API
      return data; // Returning the fetched data
    },
  });
};

// Fetch optional
export const getOneBook = (id) => {
  return useQuery(["book" , id], async () => {
    const { data } = await axiosInstance.get("/book" + "/" + id);
    return data;
  });
};  

// Add books
export const addBook = () => {
  const queryClient = new QueryClient();
  return useMutation(
    async (bookObject) => {
      const response  = await axiosInstance.post("/add", bookObject);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["books"]);
      },
    }
  );
};

//  delete book     
export const deleteBook = () => {
  const queryClient = new QueryClient();
  return useMutation(
    async (id) => {
      await axiosInstance.delete(`/del/${id}`);
      return "success";
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["books"]);
      },
    }
  );
};

