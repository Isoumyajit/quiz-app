import React, { useState , useEffect } from 'react'
import "./Navbar.css"
export const Navbar = () => {
    const [user, setUser] = useState("")
    useEffect(() => { 
        const username = localStorage.getItem("username");
        if (username !== null) {
            setUser(username)
        }else setUser("")
    },[])
  return (
      <div className='navbar bg-slate-600 z-50'>
          <div className='flex flex-row justify-between text-white'>
              <h4 className='font-semibold'>
                  Quizer
              </h4>
              <div>
                  <img src="" alt="" />
                  <span>{ user }</span>
              </div>
          </div>
    </div>
  )
}
