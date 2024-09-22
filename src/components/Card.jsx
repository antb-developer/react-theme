import React from 'react';

const Card = ({ body }) => {

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            { body }
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
