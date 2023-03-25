import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryDetails from './Components/CountryDetails'
import NotFound from './Components/NotFound'
import SearchCountry from './Components/SearchCountry'
import Header from './Header'

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path='/' element={ <SearchCountry /> } />
        <Route path='/CountryDetails/:id' element={ <CountryDetails /> } />
        <Route path='/NotFound' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
