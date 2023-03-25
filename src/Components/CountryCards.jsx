import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const CountryCards = ({region}) => {

    const navigate = useNavigate()

    const [countryData, setCountryData] = useState(null)

    const getCountries = async () => {
        let endPoint = ''
    if(region){
        endPoint = `https://restcountries.com/v3.1/region/${region}`
    }else{
        endPoint = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region'
    }
        const res = await fetch(endPoint)
        if(res.ok){
            const data = await res.json()
            return data
        }
    }
    
    useEffect(() => {
        getCountries().then(data => {
            setCountryData(data)
        })
        .catch(err => console.log(err.message))
    },[region])

  return (
    <div className='pt-8 mx-auto w-[90%] grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {!countryData && <div className="h-screen flex items-center justify-center dark:bg-very-dark-blue mt-4">
            <button type="button" class="dark:bg-dark-blue mx-auto bg-white shadow-lg animate-pulse rounded-md p-4 text-very-dark-blue-light dark:text-white" disabled>
           Loading...
           </button>
        </div>
        }
        {countryData && countryData.map((country) => (
            <div key={country.name.common} className="w-[100%] rounded-md dark:bg-dark-blue bg-white hover:shadow-lg" onClick={() => navigate(`/CountryDetails/${country.name.common}`)}>
                <img src={country.flags.svg} alt="" className="rounded-t-md h-[170px] w-[100%] m-0" />
                <div className="mt-6 px-6 pb-12 text-very-dark-blue-light dark:text-white">
                    <h2 className="text-lg font-bold">{country.name.common}</h2>
                    <p className="opacity-[0.8] mt-4">Population: <span className="opacity-[0.4]">{country.population.toLocaleString()}</span></p>
                    <p className="opacity-[0.8]">Region: <span className="opacity-[0.4]">{country.region}</span></p>
                    <p className="opacity-[0.8]">Capital: <span className="opacity-[0.4]">{country.capital}</span></p>
                </div>
            </div>
        ))}
    
    </div>
  )
}

export default CountryCards