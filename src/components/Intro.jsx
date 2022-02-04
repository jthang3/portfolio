import "./Intro.css";
import myPic from "../img/me.jpg";
const Intro = () => {
    return(
        <div className="intro--main">
            <img src= {myPic} className = "myPic" />
            <h1 className="section__title">
                    Hi, I'm <strong className="moveLeft--animation">John Lyin</strong>
            </h1>
            <p className="section__subtitle">Front-end Dev</p>
        </div>
    )
}

export default Intro;