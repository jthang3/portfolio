import "./Skill.css";
import resume from "../img/John_Lyin_Resume.pdf"
import LinearProgress from "@mui/material/LinearProgress";
const Skill = () => {
    return(
        <div className="main--skill">
            <h1 className="main--skill--title">Skills & experiences</h1>
            <p className="main--skill--body">
                I've been working as an application support since I graduated from IUPUI and eleven fifty academy bootcamp. 
            </p>
            <p className="main--skill--body">
                I create successful responsive websites that are fast, easy to use, 
                and built with best practices outside of work. The main area of my expertise
                 is font-end development, HTML, CSS, and JS, building small and medium web apps,
                  features, animations, and coding interactive layouts. 
            </p>
            <p className="main--skill--body">
                I also have experience with full-stack development using Node js as a backend and pgAdmin as a database. 
            </p>
            <p className="main--skill--body">
                Visit my <a target = "_blank" href = "https://www.linkedin.com/in/john-lyin-6b48b0132/">LinkedIn</a> or downlaod
                <a href= {resume} download> My Resume </a> for more details. 
            </p>
            <div className="skill--progress">
                <span className="skill">Front-end</span>
                <LinearProgress variant="determinate" value={85} />
                <span className="skill">Back-end</span>
                <LinearProgress variant="determinate" value={50} />
                <span className="skill">React</span>
                <LinearProgress variant="determinate" value={85} />
                <span className="skill">Nodejs</span>
                <LinearProgress variant="determinate" value={50} />
                <span className="skill">SQL</span>
                <LinearProgress variant="determinate" value={75} />
            </div>
        </div>
    )
}

export default Skill;