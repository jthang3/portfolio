import "./Aboutme.css";

const Aboutme = () => {
    return(
        <div className="main--aboutme">
            <h1 className="about--me__title" data-text = "Introduction...">Introduction...</h1>
            <p className="about--me__body">
                I am a Burmese-born, American web developer known for my work on the web.
                I'm a graduate from <span>Indiana University - Purdue University of Indianapolis</span> studied Computer Science major and minor in Math. 
                During my senior year of college, I decided to attend <span>Eleven Fifty Acedamy bootcamp</span> to strengthen my front-end coding skills. 
            </p>
            <p className="about--me__body">
            After attending IUPUI and Eleven Fifty coding bootcamp, I began working as an application support for
            Red-technologies.
            </p>

            <p className="about--me__body">
            I'm really interested in UI effects, animations and creating intuitive, dynamic user experiences. 
            I am passionate about building excellent website that improves the lives of those around me. 
            Reach out to <span>jthang3@gmail.com</span> or <span>317-437-2710</span> to connect!
            </p>
        </div>
    )
}

export default Aboutme;