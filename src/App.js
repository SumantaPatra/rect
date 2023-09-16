import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import { Provider } from 'react-redux';
import store from './utils/store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import VideoContainer from './components/videocontainer';
import WatchPage from './components/watchpage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<VideoContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]

  }
])

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Header/>
      <RouterProvider router={appRouter}/>
      {/* <Body/> */}
    </div>
    </Provider>
  );
}

export default App;
