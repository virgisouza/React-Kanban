import React , { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import { addCard } from '../../actions/cards';
import { loadPriorities } from '../../actions/priorities';
import PrioritiesList from '../PrioritiesList';
import UsersList from '../UsersList';

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let newCard = {
      titleInput: this.state.titleInput,
      createdByInput: this.state.createdByInput,
      priorityIdInput: this.state.priorityIdInput,
      statusIdInput: this.state.statusIdInput,
      userIdInput: this.state.userIdInput
    }

    this.props.addCard(newCard);

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


  componentDidMount(){

  }

  render(){

    return (
      <div className='NewCardForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' placeholder='New Task' value={this.state.titleInput} onChange={this.handleChange.bind(this)}/>
            <UsersList users={this.props.users} onChange={this.handleChange.bind(this)}/>
            <PrioritiesList priorities={this.props.priorities} onChange={this.handleChange.bind(this)}/>
            <UsersList users={this.props.users} onChange={this.handleChange.bind(this)}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    priorities: state.prioritiesList,
    users: state.usersList,
    cards: state.cardList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => {
      dispatch(addCard(newCard))
    },
    loadPriorities: (priorities) => {
      dispatch(loadPriorities(priorities));
    },
    loadUsers: (users) => {
      dispatch(loadUsers(users));
    }
  }
}

const ConnectNewCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm)


export default ConnectNewCardForm;


