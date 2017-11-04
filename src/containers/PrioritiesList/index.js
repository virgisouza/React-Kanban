import React from 'react';
import PrioritiesItem from '../../components/PrioritiesItem';


const PrioritiesList = ({priorities}) => {

  return (
    <div className='PrioritiesList'>
    <select>
      {
        priorities.map((props, idx) => {

          return (

            <PrioritiesItem type={props.type} key={idx}/>
            )
        })
      }
      </select>
    </div>
  );
}

export default PrioritiesList;