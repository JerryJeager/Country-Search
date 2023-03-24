import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryCards from './Components/CountryCards'
import Header from './Header'

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <CountryCards/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
