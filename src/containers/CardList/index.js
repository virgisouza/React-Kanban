import React from 'react';
import NewCardItem from '../../components/NewCardItem';

const CardList = ({cards}) => {

  return (
    <div className='CardList'>
      {
        cards.map((props, idx) => {
          return (

            <NewCardItem
            title={props.title}
            assigned_to={props.Assigned.username}
            priorities_id={props.Priority.type}
            status_id={props.Status.type}
            created_by={props.Creator.username}
            key={idx}/>
            )
        })
      }
    </div>
  );
}

export default CardList;

