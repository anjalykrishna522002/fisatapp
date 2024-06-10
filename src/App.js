import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AddFriend from './components/AddFriend'
import SearchFriend from './components/SearchFriend'
import ViewFriend from './components/ViewFriend'

const App = () => {
  return (
        <div>
     <BrowserRouter>
     <Routes>
      <Route>
      <Route  path ='/' element={<AddFriend/>}/>
      <Route  path ='/search' element={<SearchFriend/>}/>
      <Route  path ='/viewfriend' element={<ViewFriend/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  
  )
}

export default App
