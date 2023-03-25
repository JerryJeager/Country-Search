import { useState } from "react"
import { Link, useNavigate, Form } from 'react-router-dom'
import CountryCards from "./CountryCards"


const SearchCountry = () => {
    
    const [searchValue, setSearchValue] = useState('')
    const [region, setRegion] = useState('')
    const navigate = useNavigate()

  return (
    <div className="dark:bg-very-dark-blue bg-very-light-gray h-[100%] px-4 md:px-12 pt-8">
        <form action="" className="flex flex-col md:flex-row  justify-between " onSubmit={ (e) => {
            e.preventDefault()
            navigate(`/CountryDetails/${searchValue}`)
        }}>
            <div className="flex px-4 py-2 items-center rounded-md dark:bg-dark-blue bg-white">
                <div><Link to={`/CountryDetails/${searchValue}`}><i class="fa-sharp fa-solid fa-magnifying-glass dark:text-white text-very-dark-blue-light"></i></Link></div>
                <div><input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-[100%] md:w-[340px] outline-none px-4 py-2 bg-transparent dark:text-white text-dark-gray" placeholder="Search for a Country"/></div>
            </div>
            <div className="mt-6 md:mt-0 px-4 py-2 dark:bg-dark-blue bg-white rounded-md flex items-center w-[170px]">
                <select name="filter" id="items" onChange={(e) => {
                    setRegion(e.target.value)
                    }} 
                    className="dark:bg-dark-blue bg-white outline-none dark:text-white w-[100%]">
                    <option value="" disabled selected className="hidden">Filter by Region</option>
                    <option value="Africa" className="bg-inherit">Africa</option>
                    <option value="America" className="bg-inherit">America</option>
                    <option value="Asia" className="bg-inherit">Asia</option>
                    <option value="Europe" className="bg-inherit">Europe</option>
                    <option value="Oceania" className="bg-inherit">Oceania</option>
                </select>
            </div>
        </form>
        <CountryCards region={region} />
    </div>
  )
}

export default SearchCountry