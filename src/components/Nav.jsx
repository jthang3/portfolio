import { useState } from "react";
import "./Nav.css";
const Nav = () => {
    let [open, setOpen] = useState(false);

    const openMenu = () => {
        let addClass = document.querySelector(".menu-btn");
        let getNav = document.querySelector(".nav-bar");
        if(open === false) {
            addClass.classList.add("open");
            getNav.classList.add("nav-bar__width");
            setOpen(true);
        }
        else {
            addClass.classList.remove("open");
            getNav.classList.remove("nav-bar__width");
            setOpen(false);
        }
    }
    return(
            <div className="menu-btn" onClick={openMenu}>
                <div className="menu-btn__burger">        
            </div>
            </div>
    )
}

export default Nav;