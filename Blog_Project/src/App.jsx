import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ByCategoryPage from './Pages/ByCategoryPage';
import DetailsPage from './Pages/DetailsPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Route path='/' element={<HomePage/>} />  
          <Route path='/byCategory/{categoryID}' element={<ByCategoryPage/>} />  
          <Route path='/details/:postID' element={<DetailsPage/>} />  
        </Router>     
      </BrowserRouter>
    </div>
  )
}

export default App