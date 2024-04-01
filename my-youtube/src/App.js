// import logo from './logo.svg';
import './App.css';
import Body from './components/body/Body';
import MainContainer from './components/body/MainContainer';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import WatchPage from './components/watchPage/WatchPage';

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="w-screen">
      <Head/>
      <RouterProvider router={appRouter}/>
      {/* <Body/> */}
    </div>
    </Provider>
  );
}

export default App;
