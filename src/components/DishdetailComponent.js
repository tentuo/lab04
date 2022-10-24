import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderComments({comments}) {
        if (comments != null)
            return(
                <Card>
                    <h4>nhan xet</h4>
                    <CardBody>
                      <CardTitle>tac gia nhan xet</CardTitle>
                      <CardText>ngay thang</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
        if(props.dish != null) {
        return (
            <div className="container">
                <div  className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
        }
    }

export default DishDetail;