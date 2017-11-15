import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl
} from 'react-bootstrap'

class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {url: '', file : ''}
    this.handleChangefile = this.handleChangefile.bind(this)
  }

  handleChangefile(evt) {
    let reader = new FileReader();
    reader.onload = (e) => {
        this.setState({image: e.target.result});
    };
    reader.readAsDataURL(evt.target.files[0]);
    
    var formData  = new FormData();
    formData.append('file', evt.target.files[0], evt.target.files[0].name)
    formData.append('bucket', 'ico_list')


    fetch(`http://api.staging.icofarm.net/upload/file`, {
      method: "POST",
      body: formData,
      
    }).then(res => res.json()).then(res => { 
        console.log(res)
        this.setState({url : res.url})
      })

  }
  
  
  render(){
    return(
      <div>
      <img src={this.state.image} style={{'maxWidth': '120px','maxHeight':'120px'}}/>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="uploadFile">
            <FormControl
              type="file"
              onChange={this.handleChangefile}/>
          </FormGroup>
        </Form>
        {this.state.url}
      </div>
    )
  }

}

export default Upload