import React, { useState } from 'react';

export const FruitContext = React.createContext('Apple');
export const MeatContext = React.createContext('Beef');

const Store = ({children}) => {
  const [fruit, setFruit] = useState('Apple');
  const [meat, setMeat] = useState('Beef');

    return (
      <FruitContext.Provider value={[fruit, setFruit]}>
        <MeatContext.Provider value={[meat, setMeat]}>
          {children}
        </MeatContext.Provider >
      </FruitContext.Provider>
    );
};

export default Store;