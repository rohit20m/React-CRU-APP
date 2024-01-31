import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Child from './Child';

function App() {
  // const data = "Hello from Parent!";

  // function sendData()
  // {
  //   alert("hello")
  // }

  return (
    <>
      <div className='App'>
        <h1>React JS CRUD Operation</h1>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/employee/create' element={<EmpCreate />} />
          <Route path='/employee/details/:empid' element={<EmpDetails />} />
          <Route path='/employee/edit/:empid' element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
      {/* <Child dataFromParent={data} data={sendData} /> */}
    </>
  );
}

export default App;
