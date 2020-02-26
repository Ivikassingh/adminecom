import React, { useState } from 'react';
import { render } from "react-dom";
import { Button } from 'reactstrap';
import Tabs from './Tabs';
import { Modal, ModalHeader, ModalBody, ModalFooter,Container,Row,Col,} from 'reactstrap';
import Header from "./Header"



class App extends React.Component{

constructor()
{
  super();
  this.state={
   modal:false
  }
}

componentDidMount()
{
  
}

toggle=()=>{
 this.setState({
   modal:!this.state.modal
 })

}
render()
{

  return (
     <Container>
        <Header/>
     </Container>
  );
}
  }
export default App;