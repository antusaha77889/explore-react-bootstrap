import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './Components/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <button>tohidul sexy boy </button>
      <Button variant='danger'>React-bootstrap</Button>
      <Spinner animation="grow" variant="info" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
