import { Card, CardMedia, CardActionArea } from "@mui/material";
import "./Projects.css";
import reactRedux from "../img/react-redux.png";
import weather from "../img/weather.png";
import hulu from "../img/hulu.jpg";
import sport from "../img/sport.jpg";
import ecommerce from "../img/ecommerce.png"
const Projects = () => {
    let blank = "_blank";
    return(
        <div className="main--projects">
            <h1 className="main--projects__title">Projects(Click to open)</h1>
            <div className = "main--projects-card">
                <div className = "main--container">
                    <div>
                        <div className = "thefront">
                            <a href = "https://order-page-red-tech.herokuapp.com/" target = {blank}>
                                <Card sx = {{maxWidth: 250}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component = "img"
                                            height = "250"
                                            image = {reactRedux}
                                            alt = "nature"
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "main--container">
                    <div>
                        <div className = "thefront">
                            <a href = "https://jthang3.github.io/weatherApp/" target = {blank}>
                                <Card sx = {{maxWidth: 250}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component = "img"
                                            height = "250"
                                            image = {weather}
                                            alt = "nature"
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "main--container">
                    <div>
                        <div className = "thefront">
                            <a href = "https://jthang3.github.io/staticwebpage/" target = {blank}>
                                <Card sx = {{maxWidth: 250}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component = "img"
                                            height = "250"
                                            image = {hulu}
                                            alt = "nature"
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "main--container">
                    <div>
                        <div className = "thefront">
                            <a href = "https://lyin-sport.herokuapp.com/" target = {blank}>
                                <Card sx = {{maxWidth: 250}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component = "img"
                                            height = "250"
                                            image = {sport}
                                            alt = "Sport"
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
                <div className = "main--container">
                    <div>
                        <div className = "thefront">
                            <a href = "https://lyin-ecommerce.herokuapp.com/" target = {blank}>
                                <Card sx = {{maxWidth: 250}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component = "img"
                                            height = "250"
                                            image = {ecommerce}
                                            alt = "Sport"
                                        />
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;