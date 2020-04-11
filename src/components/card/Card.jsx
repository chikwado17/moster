import React from 'react';

export const Card = (props) => (
   <div className="conatiner">
        <div className="card-container">
            <img alt="mosters" 
                src={`https://robohash.org/${props.mosters.id}?set=set2`}
            />
            <h2>{props.mosters.name}</h2>
            <p>{props.mosters.email}</p>
        </div>
   </div>
);