import './App.css';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Dashboard from './Pages/Dasboard/Dashboard';
import Login from './Pages/Login/Login';

const router = createBrowserRouter([
  {
    path:"/",
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;