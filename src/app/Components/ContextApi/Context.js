import React, {createContext, useState} from 'react'

export const ProfileContext = createContext();


export const Context = ({ children }) => {

    const [userProfilePic, setUserProfilePic] = useState("./user.png");
    const [ translate, setTranslate ] = useState(false);
    return (
        <ProfileContext.Provider value={{ userProfilePic, setUserProfilePic, translate, setTranslate }}>
        {children}
      </ProfileContext.Provider>
  )
}
