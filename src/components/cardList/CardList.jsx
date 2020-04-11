import React from 'react';
import { Card } from '../card/Card';


export const CardList = (props) => {
    return (
        <div className="container">
            <div className="row">
            { props.mosters.map(moster => (
                <div className="col-md-4">
                    <Card key={moster.id} 
                            mosters={moster} 

                        />
                </div>
                ))}
            </div>
        </div>
    );
}

 
    
