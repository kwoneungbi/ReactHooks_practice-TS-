const Counter = ({
  increaseOrDecreaseCount,
}: {
  increaseOrDecreaseCount: (e: string) => void;
}) => {
  return (
    <>
      <button onClick={() => increaseOrDecreaseCount("plus")}>+1</button>
      <button onClick={() => increaseOrDecreaseCount("minus")}>-1</button>
    </>
  );
};

export default Counter;
