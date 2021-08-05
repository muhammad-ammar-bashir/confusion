import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImgOverlay, CardImg, CardText } from 'reactstrap';
class DishDetails extends Component {
    constructor(props) {
        super(props);
    }

    renderComments() {
        return (
            <div>
                {this.props.selectedDish.comments.map((comment) => {
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

    render() {
        if (this.props.selectedDish !== null) {
            
            return (
                
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.selectedDish.image} />
                                <CardTitle> {this.props.selectedDish.name} </CardTitle>
                                <CardText> {this.props.selectedDish.description} </CardText>
                                <CardText> {this.props.selectedDish.price} </CardText>
                            </Card>
                        </div>

                        <div className="col-12 col-md-5 m-1">
                            <h4> Comments </h4>
                            {this.renderComments()}
                        </div>

                    </div>
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
}

export default DishDetails;
