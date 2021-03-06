
import './App.css';
import 'antd/dist/antd.css';
import { Toaster } from 'react-hot-toast';
import {Layout} from "./component/common/layout/index";
import Login from './component/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContextProvider from './utils/context/globalContext';
import { Warehouse } from './component/warehouse';
import { Inspection } from './component/inspection';
import { DailyInspection } from './component/inspection/dailyInspection';
import { ChooseEquipment } from './component/inspection/equipment';
import { Scan } from './component/inspection/scan';
import { Treatment } from './component/inspection/dailyInspection/treatment';
import { Report } from './component/inspection/dailyInspection/report';
import { InspectionList } from './component/list';

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
                <Route path='/inspection' element={<Inspection />} />
                <Route path='/dailyInspection' element={<DailyInspection />} />
                <Route path='/chooseEquipment' element={<ChooseEquipment />} />
                <Route path='/scan' element={<Scan />} />
                <Route path='/treatment' element={<Treatment />} />
                <Route path='/report' element={<Report />} />
                <Route path='/inspectionList' element={<InspectionList />} />
              </Routes>
      </Layout>
      </GlobalContextProvider>
      </BrowserRouter>

  );
}

export default App;
