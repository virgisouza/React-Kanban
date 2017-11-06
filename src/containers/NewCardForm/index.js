import React , { Component } from 'react';
import { connect } from 'react-redux';
import { loadStatus } from '../../actions/status';
import { loadUsers } from '../../actions/users';
import { addCard } from '../../actions/cards';
import { loadPriorities } from '../../actions/priorities';
import Select from '../../components/Select';

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
      priorities_id: this.state.priorities_id || 1,
      status_id: this.state.status_id,
      assigned_to: this.state.assigned_to || 1
    }

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
    this.setState({assigned_to: parseInt(event.target.value)});
  }

  handleChangePriority(event){
    event.preventDefault();
    this.setState({priorities_id: parseInt(event.target.value)});
  }

  handleChangeCreated(event){
    event.preventDefault();
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

            <Select
              list={this.props.users}
              label='Assigned To: '
              type='username'
              handler={this.handleChangeAssigned.bind(this)}
            />

            <Select
              list={this.props.priorities}
              label='Priority Level: '
              type='type'
              handler={this.handleChangePriority.bind(this)}
            />

            <Select
              list={this.props.users}
              label='Created By: '
              type='username'
              handler={this.handleChangeCreated.bind(this)}
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
    cards: state.cardList,
    statuses: state.statusList
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
    },
    loadStatus: (statuses) => {
      dispatch(loadStatus(statuses));
    }
  }
}

const ConnectNewCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm)


export default ConnectNewCardForm;


