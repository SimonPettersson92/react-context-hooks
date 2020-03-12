import React, { useContext } from 'react';
import { MeatContext } from './store';

const Meat = () => {
  const [, setMeat] = useContext(MeatContext);

  return(
    <div>
      <button onClick={() => setMeat('Pork')} >Set Meat to Pork</button>
    </div>
  );
};

export default Meat;