import React , { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import { addCard } from '../../actions/cards';
import { loadPriorities } from '../../actions/priorities';
import PrioritiesList from '../PrioritiesList';
import UsersList from '../UsersList';
import AssignedToList from '../AssignedToList';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      assigned_to: '',
      priorities_id: '',
      status_id: 1,
      created_by: ''
    }
    this.handleChangeCreated = this.handleChangeCreated.bind(this);
    this.handleChangeAssigned = this.handleChangeAssigned.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let newCard = {
      title: this.state.title,
      created_by: this.state.created_by || 1,
      priorities_id: this.state.priorities_id || 1, //|| //set default , //
      status_id: this.state.status_id,
      assigned_to: this.state.assigned_to || 1
    }

    console.log('NEW CARD DATA', newCard)

    this.props.addCard(newCard);

    this.setState({
      title: '',
      assigned_to: '',
      priorities_id: '',
      status_id: 1,
      created_by: ''
    })
  }

  handleChangeTitle(event){
    event.preventDefault();
    this.setState({title: event.target.value});
  }

  handleChangeAssigned(event){
    event.preventDefault();
    console.log('handle assigned', event.target.value)
    this.setState({assigned_to: parseInt(event.target.value)});
  }

  handleChangePriority(event){
    event.preventDefault();
    console.log('handle priority', event.target.value)
    this.setState({priorities_id: parseInt(event.target.value)});
  }

  handleChangeCreated(event){
    event.preventDefault();
    console.log('handle created', event.target.value)
      this.setState({created_by: parseInt(event.target.value)});
  }


  componentDidMount(){

  }

  render(){

    return (
      <div className='NewCardForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type='text'
              placeholder='New Task'
              value={this.state.title}
              onChange={this.handleChangeTitle.bind(this)}
            />

            <AssignedToList
              users={this.props.users}
              onAssignedToChange={this.handleChangeAssigned.bind(this)}
            />

            <PrioritiesList
              priorities={this.props.priorities}
              onPriorityChange={this.handleChangePriority.bind(this)}
            />
            <UsersList
              users={this.props.users}
              onUserChange={this.handleChangeCreated.bind(this)}
            />
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


