import React, { Component } from 'react';
import NewCardItem from '../../components/NewCardItem';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';


class CardList extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterInput: ''
    }
  }


  setfilter(){

  }

  render() {
    return (
      <div className='CardList'>
        {
          this.props.cards.filter(card => {
            return card.Status.type === this.props.columnStatus

          })
          .map((props) => {

            return (

              <NewCardItem
              title={props.title}
              assigned_to={props.Assigned.username}
              priorities_id={props.Priority.type}
              status_id={props.Status.type}
              created_by={props.Creator.username}
              key={props.id}/>
            )
          })
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cards: state.cardList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    }
  }

}

const ConnectCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)


export default ConnectCardList;
//filter card by status_id to columns


