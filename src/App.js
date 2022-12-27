
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

function App() {
  return (
    <div className="">
      <div>
        <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
