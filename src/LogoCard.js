import {useState} from "react";
import Button from "./Button";
import CourseContent from "./CourseContent";
import Switcher from "./Switcher";

function LogoCard({information}) {
    const [content, setContent] = useState({
        id: 1,
        name: information[0].name,
        description: information[0].description
    });

    return (
        <div className="logo-card">
            <h2>Лучшие на 2023</h2>
            <Button text="Голосовать" />
            <CourseContent content={content}/>
            <Switcher title={"Выберите фаворита"} content={information} handler={setContent}/>
        </div>
    )
}

export default LogoCard;