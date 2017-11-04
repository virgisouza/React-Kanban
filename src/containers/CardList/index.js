import React from 'react';
import NewCardItem from '../../components/NewCardItem';

const CardList = ({cards}) => {


  return (
    <div className='CardList'>
      {
        cards.map((props) => {

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

export default CardList;

