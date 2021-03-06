import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsCompnent';
import { DISHES } from '../shared/dishes';




class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };

  }

  onDishSelect(dishId) {
      console.log("Hello");
    this.setState({ selectedDish: dishId });
    }

  render(){
    
    return(
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="#"> Ristorante Con Fusion </NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes = {this.state.dishes} onClick = {(dishId) => {this.onDishSelect(dishId)}} />
            <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish) [0]} />
        </div>
    );
  }
}


export default Main;