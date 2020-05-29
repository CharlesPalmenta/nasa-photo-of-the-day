import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const APODCard = (props) => {
    return (
        <div>
            <Card key={props.id}>
                <CardImg width="100%" src={props.imgUrl} alt="NASA Photo of the Day" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                    <CardText>{props.explain}</CardText>
                </CardBody>

            </Card>
        </div>
    );
};

export default APODCard;