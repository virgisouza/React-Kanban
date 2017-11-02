import React from 'react';
import NewCardItem from '../../components/NewCardItem';

const CardList = ({cards}) => {

  return (
    <div className='CardList'>
      {
        cards.map((props, idx) => {
          return (
            <NewCardItem title={props.title} assigned_to={props.assigned_to} priorities_id={props.priorities_id} status_id={props.status_id} created_by={props.created_by} key={idx}/>
            )
        })
      }
    </div>
  );
}

export default CardList;

