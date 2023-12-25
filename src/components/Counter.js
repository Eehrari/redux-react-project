import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => { return state.counter });

  const toggleCounterHandler = () => { };

  const incrementHandler = () => { dispatch({ type: 'increment' }) };
  const decrementtHandler = () => { dispatch({ type: 'decrement' }) };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementtHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
