import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './routers';

function App() {
  return (
    <div className='App'>
      <Router>
        <RouterView></RouterView>
      </Router>
    </div>
  );
}

export default App;

