import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import DishDetail from './components/DishdetailComponent';
import Main from './components/MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
    <div className="App">
      <Main />
    </div>
   );
  }
}

export default App;


