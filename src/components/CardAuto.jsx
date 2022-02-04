import React from 'react';

const CardAuto = ({
  placa,
  model
}) => {
  return (
      <div className="auto">
          <div className="auto__placa">
            Placa: {placa}
          </div>
          <div className="auto__model">
              {model}
          </div>
      </div>
  );
};

export default CardAuto;