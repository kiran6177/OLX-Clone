import { createContext, useState } from "react";
import React from 'react';

export const PostContext = createContext('null')


function PostsCont({children}) {
    const [postData,setPostData] = useState([])
  return (
        <PostContext.Provider value={{postData,setPostData}}>
            {children}    
        </PostContext.Provider>
  )
}

export default PostsCont
