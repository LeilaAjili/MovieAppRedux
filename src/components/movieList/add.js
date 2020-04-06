import React, { Component } from "react";
import {Button, Modal, FormControl ,Card} from 'react-bootstrap';
import {connect} from 'react-redux';

import {
  addMovie
}
 from '../../Js/actions/actions'

class Modals extends Component {


    state={
        show:false,
        
        title: '',
        details:'',
        rate: '', 
        release: '',
        desc:'',
        img:'',
        
   
        
      };
//AFFICHAGE DU MODAL
  handleShow = () =>{
        this.setState({
            show: !this.state.show
    })};



      handleChange=(e)=>{

        this.setState({
    
          [e.target.name]:e.target.value
        })
    
      }
   
    


  handleSubmit=(event) =>{
    this.props.addMovie({

      title: this.state.title,
      details: this.state.details,
      rate: this.state.rate,
      release: this.state.release,
      desc: this.state.desc,
      img: this.state.img,


    })
    && 
       
    //event.preventDefault();

    this.setState({

      title: "",
      details: "",
      rate: "",
      release: "",
      desc: "",
      img: "",
      show: !this.state.show
    })



    }
    
  

    

  render() {
    
    return (
      
      <>
    
      <Card>
        <Button 
        style={{height:"100%"}} 
        bsPrefix="add-modal" 
        variant="primary"
         onClick={this.handleShow}
         title="Add new movie"
        >
          <img src="newmovie.png" className="img" />
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New movie:</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div class="form-group">
             <label for="formGroupExampleInput">Name</label>
             <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.handleChange} name="title" />

             <label for="formGroupExampleInput">Synopsis</label>
             <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.handleChange} name="details" />
             
             
              <label for="exampleFormControlSelect1">Rate</label>
             <select class="form-control" id="exampleFormControlSelect1" onChange={this.handleChange} name="rate">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
            </select>  
           
             
             <label for="exampleFormControlSelect1">Release date</label>
            <input type="text" class="form-control" id="formGroupExampleInput"  onChange={this.handleChange} name="release" />

            <label for="exampleFormControlSelect1">Description</label>
            <input type="text" class="form-control" id="formGroupExampleInput"  onChange={this.handleChange} name="desc"/>

            <label for="exampleFormControlSelect1">Image link</label>
            <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.handleChange} name="img"/>

            </div>  

          
           
 
</form>
 
  
  
            

          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleShow} >
              Close
            </Button>
            <Button variant="success" onClick={(e)=>this.handleSubmit(e)}>
              Save Changes 
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
      </>
    );
  }
}

export default connect (null, {addMovie}) (Modals)