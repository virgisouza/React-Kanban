import React, { Component } from 'react';
import Columns from '../../components/Columns';
//import CardItem from '../../components/CardItem';
import { connect } from 'react-redux';
//import { loadCards } from '../../actions/cards';
import { loadStatus } from '../../actions/status';


class ColumnsList extends Component {

  constructor(props){
    super(props);

    this.state = {
      statusesInput: ''
    }
  }

  render(){
    return (
      <div className= 'Columns-List'>
      {
        this.props.statuses.filter(status => {
          return this.props.statuses === this.props.statusesName;
        })
        .map(props => {
          return (
            <Columns
              type={props.type}
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
    status: state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    loadStatus: () => {
      dispatch(loadStatus());
    }
  }
}

const ConnectColumnsList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(ColumnsList)

export default ConnectColumnsList;
