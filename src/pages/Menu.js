import React from "react";
import { MenuList } from "../helper/MenuList";


function Menu () {
    return(
    <div className="menu">
   <h1 className="menuTitle">Our Menu</h1>
   <div className="menuList">
    
    {
        MenuList.map((menuitem,index)=>{
            return(
                <div key={index} className="menuItem">
                    <div>
                        <img src={menuitem.image} alt="Hamburger" />
                        <h3>{menuitem.name}</h3>
                        <p>{menuitem.price} TL</p>
                        </div>
                </div>
            )
        })
    }
    
   </div>
    </div>
    )
}

export default Menu