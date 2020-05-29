import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const APODCard = props => {
    return (
        <div>
            <Card key={props.id}>
                <CardImg width="50%" src={props.imgUrl} alt="NASA Photo of the Day" />
                <CardBody>
                    <CardTitle className="card-box1">{props.title}</CardTitle>
                    <CardSubtitle className="card-box">{props.date}</CardSubtitle>
                    <CardText className="card-box">{props.explanation}</CardText>
                    <CardText className="card-box2">{props.copyright}</CardText>
                </CardBody>

            </Card>
        </div>
    );
};

export default APODCard;