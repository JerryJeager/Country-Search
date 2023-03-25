import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchCountry from './Components/SearchCountry'
import Header from './Header'

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <SearchCountry /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
