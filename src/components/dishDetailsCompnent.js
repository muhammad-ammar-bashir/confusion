import React from 'react';
import { Card, CardTitle, CardImg, CardText } from 'reactstrap';



function RenderDish({dish}) {
    return(
        <Card>
            <CardImg width="100%" src={dish.image} />
            <CardTitle> {dish.name} </CardTitle>
            <CardText> {dish.description} </CardText>
            <CardText> {dish.price} </CardText>
        </Card>
    );
   
}


function RenderComments({comments}) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <div className="continer">
                        <div className="row">
                            {comment.comment} <br />
                            -- {comment.author} 
                            , {comment.date}
                        </div>
                    </div>
                );
            })
            }
        </div>
    );
}



    const DishDetails = (props) => {
        if (props.dish !== null && props.dish !== undefined ) {
            
            return (
                
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                            
                        </div>

                        <div className="col-12 col-md-5 m-1">
                            <h4> Comments </h4>
                            <RenderComments comments={props.dish.comments}/>
                        </div>

                    </div>
                </div>
            );
        }
        else {
            return <div> </div>
        }
    }

export default DishDetails;
