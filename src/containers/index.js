import React from 'react';
import { connect } from 'react-redux';


class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      titleInput: '',
      priorityInput: '',
      statusInput: ''
    }
  }

  handleSubmit(){
    event.preventDefault()

    this.setState({
      titleInput: '',
      priorityInput: '',
      statusInput: ''
    })
  }


}

export default NewCardForm;