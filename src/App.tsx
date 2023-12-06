import Title from "./components/Title";
import Box from "./components/Box";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const increaseOrDecreaseCount = (e: string) => {
    e === "plus" && setCount((count) => count + 1);
    e === "minus" && setCount((count) => count - 1);
  };
  return (
    <>
      <Box
        borderWidth='2px'
        borderColor='blue'
        borderStyle='solid'
        padding='4px'
        margin='2px'
      >
        <Title title='React Tutorial' color='red'>
          sub title: react basic
        </Title>
        <h1>Count: {count}</h1>
        <Counter increaseOrDecreaseCount={increaseOrDecreaseCount} />
      </Box>
    </>
  );
}

export default App;
