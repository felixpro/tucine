import Index from "./components/index";
import MoviesState from './context/moviesState';

function App() {

  return (
    <MoviesState>
      <Index/>
    </MoviesState>
  );
}

export default App;
