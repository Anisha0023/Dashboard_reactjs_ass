import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { Spring } from "react-spring";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgLevel, setBgLevel] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setBgLevel(Math.min(bgLevel + 5, 100));
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setBgLevel(Math.max(bgLevel - 5, 0));
  };

  const handleReset = () => {
    setCount(0);
    setBgLevel(0);
  };

  return (
    <Spring to={{ background: `rgba(0,0,255,${bgLevel / 100})` }}>
      {(styles) => (
        <Container style={{ ...styles, padding: "20px" }}>
          <Typography variant="h4">Counter: {count}</Typography>
          <Button onClick={handleIncrement}>Increment</Button>
          <Button onClick={handleDecrement}>Decrement</Button>
          <Button onClick={handleReset}>Reset</Button>
        </Container>
      )}
    </Spring>
  );
};

export default Counter;
