import React from 'react';
import PrioritiesItem from '../../components/PrioritiesItem';


const PrioritiesList = ({priorities, onPriorityChange}) => {

  return (
    <div className='PrioritiesList'>
    <select onChange={onPriorityChange}>
      {
        priorities.map(priority => {
          return (

            <PrioritiesItem
              type={priority.type}
              id={priority.id}
              key={priority.id}
            />
            )
        })
      }
      </select>
    </div>
  );
}

export default PrioritiesList;