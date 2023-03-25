import { useState, useEffect } from "react"

const CountryCards = () => {

    const [countryData, setCountryData] = useState([])

    const getCountries = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
        if(res.ok){
            const data = await res.json()
            return data
        }
    }
    
    useEffect(() => {
        getCountries().then(data => {
            setCountryData(data)
            console.log(data[0].name.common)
            console.log(data[0].capital[0])
            console.log(data[0].population.toLocaleString())
            console.log(data[0].region)
            console.log(data[0].flags.svg)
        })
        .catch(err => console.log(err.message))
    },[])

  return (
    <div className='pt-8 mx-auto w-[90%] grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {countryData && countryData.map((country) => (
            <div key={country.name.common} className="w-[100%] rounded-md dark:bg-dark-blue bg-white">
                <img src={country.flags.svg} alt="" className="rounded-t-md h-[170px] w-[100%] m-0" />
                <div className="mt-6 px-6 pb-12 text-very-dark-blue-light dark:text-white">
                    <h2 className="text-lg font-bold">{country.name.common}</h2>
                    <p className="opacity-[0.8] mt-4">Population: <span className="opacity-[0.6]">{country.population.toLocaleString()}</span></p>
                    <p className="opacity-[0.8]">Region: <span className="opacity-[0.6]">{country.region}</span></p>
                    <p className="opacity-[0.8]">Capital: <span className="opacity-[0.6]">{country.capital[0]}</span></p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CountryCards