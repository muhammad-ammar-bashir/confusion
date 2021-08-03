import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { Media } from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import { render } from 'react-dom';



class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };

  }
  

  render(){
    
    return(
      <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#"> <Media object src="assets/images/logo.png" /> </NavbarBrand>

          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
      </div>
    );
  }
}


export default App;
