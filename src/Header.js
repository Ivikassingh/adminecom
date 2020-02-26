import React,{Component} from "react"
import {Row,Col,Container,Button,Modal, ModalHeader,Form,
    FormGroup,
    Input,
    Label,} from "reactstrap"
import axios from "axios";

const api="http://localhost:8000/"
class Header extends Component{
    constructor()
    {
         super();
        this.state={
         addprodcutmodal:false,
         pic:"",
         title:"",
         stitle:"",
         about:"",
         price:0,
        }
    }


     
    addprotoggle=(id)=>{
        console.log("hii")

        this.setState({
        addprodcutmodal:!this.state.addprodcutmodal
        })
  }

  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
   
   }
   

   addproduct=()=>{
     const pic=this.state.pic
     const title=this.state.title
     const stitle=this.state.stitle
     const about=this.state.about
     const price=Number(this.state.price)
     if(pic==""&& title==""&&stitle==""&& about==""&& price==0)
     {
         alert("some field is empty")
     }
    else{
        axios.get(api+"productadd?Image="+pic+"&Title="+title+"&Des="+about+"&Company="+stitle+"&Price="+price).then(res=>{
            if(res.data.result)
            {
                alert("Product added")
            }
            else{
                alert("Not added")
            }
        })
    }
   this.addprotoggle()
   }

    

    render()
    {
        const externalCloseBtnaddpro = <button className="close" style={{position:"absolute",right:15,border:"none"}} onClick={this.addprotoggle}>&times;</button>
  
        return(

            <Container>
    <Modal isOpen={this.state.addprodcutmodal} toggle={this.addprotoggle}>
    <ModalHeader>Add Product{externalCloseBtnaddpro}</ModalHeader>
    <Form style={{margin:10}}>
      <FormGroup>
        <Label for="exampleimage">Product Image</Label>
        <Input type="text" name="pic" id="exampleimage" onChange={this.handleChange} value={this.state.pic} placeholder="Enter Image" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTitle">Product Title</Label>
        <Input type="text" name="title"  onChange={this.handleChange} value={this.state.title} placeholder="Enter Title" />
      </FormGroup>
      <FormGroup>
        <Label for="examplessTitle">Company</Label>
        <Input type="text" name="stitle"  onChange={this.handleChange} value={this.state.stitle} placeholder="Enter Company" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePrice">Price</Label>
        <Input type="number" name="price"  onChange={this.handleChange} value={this.state.price} placeholder="Enter Price" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleabout">About</Label>
        <Input type="text" name="about"  onChange={this.handleChange} value={this.state.about} placeholder="Enter About" />
      </FormGroup>
     
      <Button color="primary" outline onClick={this.addproduct}>Add Product</Button>
     
      </Form>
      
    </Modal>
                <Row>
                    <Col sm="2">
                         <h1  style={{margin:10}}>Admin</h1>
                    </Col>
                    <Col sm={{size:3,offset:7}}>
                        <Button onClick={this.addprotoggle} outline style={{margin:10}}>Add Product</Button>
                    </Col>
                </Row>
            </Container>
                
        )
    }
}



export default Header