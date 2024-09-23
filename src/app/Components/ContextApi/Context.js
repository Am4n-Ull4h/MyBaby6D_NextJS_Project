import React, {createContext, useState} from 'react'

export const ProfileContext = createContext();


export const Context = ({ children }) => {

    const [userProfilePic, setUserProfilePic] = useState("./user.png");
    return (
        <ProfileContext.Provider value={{ userProfilePic, setUserProfilePic }}>
        {children}
      </ProfileContext.Provider>
  )
}
