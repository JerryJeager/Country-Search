import { useState } from "react"
import { Link } from 'react-router-dom'


const SearchCountry = () => {
    
    const [searchValue, setSearchValue] = useState('')

  return (
    <>
        <form action="" className="flex flex-col md:flex-row  justify-between ">
            <div className="flex px-4 py-2 items-center rounded-md dark:bg-dark-blue bg-white">
                <div><Link to="/"><i class="fa-sharp fa-solid fa-magnifying-glass dark:text-white"></i></Link></div>
                <div><input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-[100%] md:w-[340px] outline-none px-4 py-2 bg-transparent dark:text-white" placeholder="Search for a Country"/></div>
            </div>
            <div className="mt-6 md:mt-0 px-4 py-2 dark:bg-dark-blue bg-white rounded-md flex items-center">
                <select name="filter" id="items" onChange={(e) => setSearchValue(e.target.value)} className="dark:bg-dark-blue bg-white outline-none dark:text-white">
                    <option value="" disabled selected className="hidden">Filter by Region</option>
                    <option value="Africa" className="bg-inherit">Africa</option>
                    <option value="America" className="bg-inherit">America</option>
                    <option value="Asia" className="bg-inherit">Asia</option>
                    <option value="Europe" className="bg-inherit">Europe</option>
                    <option value="Oceania" className="bg-inherit">Oceania</option>
                </select>
            </div>
        </form>
    </>
  )
}

export default SearchCountry