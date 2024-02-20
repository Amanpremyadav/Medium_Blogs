import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';

// Step 1 Creating the context
export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling 
   async function fetchBlogPosts(page){
    setLoading(true);
      const url = `${baseUrl}?page=${page}`;

      try{
        const result = await fetch(url);
        const data = await result.json();

        setPage(data.page);
        setTotalPages(data.totalPages);
        setPosts(data.posts);

      }
      catch(e){
        console.log("No Post Found");
        setPosts([]);
        setPage(1);
        setTotalPages(null);
      }
      setLoading(false);
    }

    function HandlerPageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value ={
        loading, 
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        HandlerPageChange
    }
    // Step 2 Providing the context
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;