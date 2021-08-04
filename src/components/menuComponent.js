import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImgOverlay, CardImg, CardText } from 'reactstrap';

class Menu extends Component{

    constructor (props){
        super(props);

            this.state = {
                selectedDish: null
            }
    }

    onDishSelect(dish){
        this.setState({ selectedDish : dish })
    }

    randerDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} />
                    <CardTitle> {dish.name} </CardTitle>
                    <CardText> {dish.description} </CardText>
                    <CardText> {dish.price} </CardText>
                </Card>
            );

        }

        else{
            <div> </div>

        }

    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className= "col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish) }>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                        </CardImgOverlay>
            
                    </Card>
                </div>
            );
        }); 

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.randerDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }
}


export default Menu;