import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';
import { loadPriorities } from '../../actions/priorities';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      assignedToInput: '',
      priorityInput: '',
      statusInput: '',
      createdByInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      titleInput: '',
      assignedToInput: '',
      priorityInput: '',
      statusInput: '',
      createdByInput: ''
    })
  }


  handleChange(event){
    event.preventDefault();
    this.setState({
      titleInput: event.target.value,
      assignedToInput: event.target.value,
      priorityInput: event.target.value,
      statusInput: event.target.value,
      createdByInput: event.target.value
    });
  }

  handlePriority(event){
    event.preventDefault();
    loadPriorities();
    this.setState({
      priorityInput: this.props.priorities.type
    })
  }

  render(){

    return (
      <div className='NewCardForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='New Task' value={this.state.titleInput} onChange={this.handleChange.bind(this)}/>
          <select name="assignedTo">
            <option value="1">Virgi</option>
          </select>
          <select name="priority">
            <option value={this.props.priority_id}>{this.handlePriority.bind(this)}</option>

          </select>
          <select>
            <option value="1">Queue</option>
          </select>
          <select name="createdBy">
            <option value="1">Virgi</option>
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
      console.log('NewCardForm', newCard);
      dispatch(addCard(newCard))
    },
    loadPriorities: (priorities) => {
      console.log('NewCardForm priorities',   priorities);
      dispatch(loadPriorities(priorities));
    }
  }
}

const ConnectNewCardForm = connect(
  null,
  mapDispatchToProps
)(NewCardForm)


export default ConnectNewCardForm;

