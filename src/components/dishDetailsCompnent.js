import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText } from 'reactstrap';



class DishDetails extends Component {
    constructor(props) {
        super(props);
        console.log("DISH DETAIL",props);
    }

    renderComments() {
        return (
            <div>
                {this.props.dish[0].comments.map((comment) => {
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
        if (this.props.dish[0] !== null && this.props.dish[0] !== undefined ) {
            
            return (
                
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish[0].image} />
                                <CardTitle> {this.props.dish[0].name} </CardTitle>
                                <CardText> {this.props.dish[0].description} </CardText>
                                <CardText> {this.props.dish[0].price} </CardText>
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
