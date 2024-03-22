// import logo from './logo.svg';
import './App.css';
import Body from './components/body/Body';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
