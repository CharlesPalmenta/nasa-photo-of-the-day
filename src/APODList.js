import React, { useEffect, useState } from "react";
import axios from "axios";
import APODCard from "./APODCard";

const APODList = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=yB2OXtBR2a4UiuhhhFnUC9hFzoU5AaQZydTTiWhk`)
        .then(response => {
            console.log("My data", response);
            setPicture(response.data);
        })
        .catch(err => console.log("ERROR", err));
    }, []);
    return (
        <div>
           <APODCard key={picture.key} title={picture.title} date={picture.date} explanation={picture.explanation} imgUrl={picture.url} copyright={picture.copyright} />
        </div>
    );
};

export default APODList;
