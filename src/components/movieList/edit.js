import React, { Component } from "react";
import {Button, Modal, FormControl ,Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import './movieCard.scss'
import {editMovie} from '../../Js/actions/actions'

class Edit extends Component {


    state={
        show:false,
        
        title: this.props.elm.title,
        details:this.props.elm.details,
        rate: this.props.elm.rate,
        release: this.props.elm.release,
        desc:this.props.elm.desc,
        img:this.props.elm.img,
        
   
        
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
    this.props.editMovie(this.props.label,{

      title: this.state.title,
      details:this.state.details,
      rate: this.state.rate,
      release: this.state.release,
      desc: this.state.desc,
      img: this.state.img,


    })
    && 
       
   

    this.setState({

      
      show: !this.state.show
    })


    }
    
 
    

  render() {
    
    return (
      
      <>
    
      
        
         <img src="edit.png" className="img1" onClick={this.handleShow}/>
         
        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New movie:</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div class="form-group">
             <label for="formGroupExampleInput">Name</label>
             <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.handleChange} name="title" value ={this.state.title}/>

             <label for="formGroupExampleInput">Synopsis</label>
             <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.handleChange} name="details" value ={this.state.details} />
             
             
              <label for="exampleFormControlSelect1">Rate</label>
             <select class="form-control" id="exampleFormControlSelect1" onChange={this.handleChange} name="rate" value ={this.state.rate}>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
            </select>  
           
             
            <label for="exampleFormControlSelect1">Release date</label>
            <input type="text" class="form-control" id="formGroupExampleInput"  onChange={this.handleChange} name="release" value ={this.state.release}/>

            <label for="exampleFormControlSelect1">Description</label>
            <input type="text" class="form-control" id="formGroupExampleInput"  onChange={this.handleChange} name="desc" value ={this.state.desc}/>

            <label for="exampleFormControlSelect1">Image link</label>
            <input type="text" class="form-control"   onChange={this.handleChange} name="img" value ={this.state.img}/>

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
       
      </>
    );
  }
}



export default connect (null, {editMovie}) (Edit)