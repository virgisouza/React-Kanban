import React, { Component } from 'react';
import CardItem from '../../components/CardItem';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';


class CardList extends Component {
  constructor(props){
    super(props);

    this.state = {
      statusInput: ''
    }
  }



  render() {
    return (
      <div className='CardList'>
        {
          this.props.cards.filter(card => {
            console.log(card.Priority.type, "CARDLIST");
            // console.log(card.Status.type, "column status");
            return card.Status.type === this.props.columnStatus

          })
          .map((props) => {

            return (

              <CardItem
                title={props.title}
                assigned_to={props.Assigned.username}
                priorities_id={props.Priority.type}
                status_id={props.Status.type}
                created_by={props.Creator.username}
                key={props.id}
              />
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


