import React from 'react'
import { Provider } from 'react-redux'
import store from './components/redux/store'
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
