import React, { useState } from "react";
import './nav.css'
export default function Nav() {

  const [toogle,setToggle]=useState(false)
  return (
    <nav>
      <div className="logo">CIGAworks.</div>
      <ul className={toogle ? "toggle":""} >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>STORE</li>
        <li>BLOGS</li>
        <li>CONTACT</li>
      </ul>
      <div className={toogle ? "menu t":"menu"} onClick={()=>setToggle(!toogle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
