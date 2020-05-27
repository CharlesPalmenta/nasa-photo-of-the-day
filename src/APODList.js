import React, { useEffect, useState } from "react";
import axios from "axios";
import APODCard from "./APODCard";

const APODList = () => {

    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=yB2OXtBR2a4UiuhhhFnUC9hFzoU5AaQZydTTiWhk")
        .then(response => {
            console.log(response);
            setPictures(response.data);
        })
        .catch(err => console.log("ERROR", err));
    }, []);
    return (
    <div><APODCard /></div>
    )
};

export default APODList;
