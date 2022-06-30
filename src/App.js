
import './App.css';
import 'antd/dist/antd.css';
import { Toaster } from 'react-hot-toast';
import {Layout} from "./component/common/layout/index";
import Login from './component/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContextProvider from './utils/context/globalContext';
import { Warehouse } from './component/warehouse';

function App() {
  
  return (
  
      <BrowserRouter>
        <GlobalContextProvider>
      <Layout>
                <span><Toaster
                      position="top-right"
                      toastOptions={{
                        // Define default options
                        className: "",
                        duration: 5000,
                        style: {
                          background: "#19222f",
                          color: "#fff",
                        },
                        // Default options for specific types
                        success: {
                          duration: 3000,
                          theme: {
                            primary: "#fff",
                            secondary: "#19222f",
                          },
                        },
                      }}/>
                </span>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/warehouse' element={<Warehouse />} />
                <Route path='/' element={<Login />} />
              </Routes>
      </Layout>
      </GlobalContextProvider>
      </BrowserRouter>

  );
}

export default App;
