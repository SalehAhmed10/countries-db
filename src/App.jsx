import { Route, Routes } from "react-router-dom";


import Countries from './components/Countries';
import Header from './components/Header';

import Country from "./components/Country";


function App() {
  return (
      <div>
        <Header/>
        <div className="body-style">
          <Routes>
            
            <Route exact path="/" element={<><Countries/></>}  />
            
            <Route exact path="/countries/:name" element={<><Country/> </>}  />
        
          </Routes>

          </div>
      </div>
  );
}

export default App;


