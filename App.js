import React, { useContext } from "react";
import { FruitContext, MeatContext } from './store';
import Meat from './Meat';

const App = () => {
  const [fruit] = useContext(FruitContext);
  const [meat] = useContext(MeatContext);  
  return (
    <div>
        <h1>React hooks and Context</h1>
        <h2>Today's fruit is {fruit}</h2>
        <Meat />
        <h3>{meat}</h3>
      </div>
  );
};

export default App;