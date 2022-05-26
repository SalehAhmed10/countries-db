import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';


function App() {
  return (
      <div>
        <Header/>
        <div className="body-style">
          <Routes>

            
            
            <Route exact path="/" element={<><Filter/><Countries/></>}  />
            
        
          </Routes>

          </div>
      </div>
  );
}

export default App;

{/* <Header/>
      
     

<div className='body-style'>

<Filter/>
<Countries/>

</div>  */}
