import React, { useEffect, useState } from "react";
import axios from "axios";

const APODList = () => {

    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod")
        .then(response => {
            console.log(response);
            setPictures(response.data);
        })
        .catch(err => console.log("ERROR", err));
    }, []);
    return (
    <div></div>
    )
};

export default APODList;
