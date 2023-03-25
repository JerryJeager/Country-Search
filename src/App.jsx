import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Regions from './Components/Regions'
import SearchCountry from './Components/SearchCountry'
import Header from './Header'

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <SearchCountry /> } />
        <Route path='/Regions' element={ <Regions /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
