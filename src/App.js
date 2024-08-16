import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const percentage = 66;
  const value = 0.66;

  return (
    <div className="App">
      <div className='box'>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>
      <div className='box'>
        <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
      </div>
      
    </div>
  );
}

export default App;
