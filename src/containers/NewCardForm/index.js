import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: ''
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      titleInput: ''
    })
  }


  handleChangeTitle(event){
    event.preventDefault();
    this.setState({
      titleInput: event.target.value
    });
  }

  render(){

    return (
      <div className='NewCardForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='New Task' value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
          <select name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Blocker">Blocker</option>
          </select>
          <select name="assignedTo">
            <option value="virgi">User One</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => {
      dispatch(addCard(newCard))
    }
  }
}

const ConnectNewCardForm = connect(
  null,
  mapDispatchToProps
)(NewCardForm)


export default ConnectNewCardForm;


