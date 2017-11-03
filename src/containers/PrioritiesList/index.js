import React from 'react';


const PrioritiesList = ({priorities}) => {

  return (
    <div className='PrioritiesList'>
      {
        priorities.map((props, idx) => {
          return (

            <PrioritiesItem type={props.type} key={idx}/>
            )
        })
      }
    </div>
  );
}

export default PrioritiesList;