import React from 'react';
import about from '../images/moon.png'


const DarkButton = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
        document.body.style.backgroundColor = "#7289da";

    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
        document.body.style.backgroundColor = "#0f4612";

    };

    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "dark"){
        setDarkMode();
    }
    else{
        setLightMode();
    }

    const toggleTheme = () => {
        if (document.querySelector("body").getAttribute("data-theme") === "light"){
            setDarkMode();
        } 
        else setLightMode();
    }

    // setLightMode();

    return (
        <div>
            <button onClick={toggleTheme} className="darkbuttonholder">
                        <img className='darkmodebutton' src={about}/>
            </button>
        </div>
    )
}

export default DarkButton;