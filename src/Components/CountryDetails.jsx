import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'



const CountryDetails = () => {
    const [countryData, setCountryData] = useState(null)
    const { id } = useParams()
    if(!id){
        navigate('/NotFound')
    }
    // let countryData = null
    const navigate = useNavigate()

    const getCountries = async () => {
        let endPoint = ''
        endPoint = `https://restcountries.com/v3.1/name/${id}`
        const res = await fetch(endPoint)
        if (!res.ok) {
            throw Error("Otilo");
        }
        return res.json();
    }
    useEffect(() => {
      getCountries().then(data => {
            console.log(data)
            setCountryData(data)
        })  
        .catch(err => navigate('/NotFound'))
    },[id])

  return (
    <div className="h-screen p-6 bg-very-light-gray dark:bg-very-dark-blue">
        {!countryData && <div className="h-screen flex items-center justify-center dark:bg-very-dark-blue mt-4">
            <button type="button" class="dark:bg-dark-blue bg-white shadow-lg animate-pulse rounded-md p-4 text-very-dark-blue-light dark:text-white" disabled>
           Loading...
           </button>
        </div>}
        {countryData && <div >
            <button className="text-very-dark-blue-light dark:text-white p-4 rounded-sm text-center mt-4 bg-white dark:bg-dark-blue" onClick={() => navigate('/')}>Back</button>
        <div className="flex flex-col md:flex-row justify-between mt-6">
            <div>
                <img src={countryData[0].flags.svg} alt=""  className="h-[170px]"/>
            </div>
            <div>
                <div className="text-very-dark-blue-light dark:text-white mt-6">
                    <h2 className=" font-bold text-lg">{countryData[0].name.common}</h2>
                    <p className="opacity-[0.8] mt-4">Native Name: <span>{countryData[0].name.common}</span></p>
                    <p className="opacity-[0.8] mt-2">Population: <span>{countryData[0].population.toLocaleString()}</span></p>
                    <p className="opacity-[0.8] mt-2">Region: <span>{countryData[0].region}</span></p>
                    <p className="opacity-[0.8] mt-2">Sub Region: <span>{countryData[0].subregion}</span></p>
                    <p className="opacity-[0.8] mt-2">Capital: <span>{countryData[0].capital}</span></p>
                </div>
            </div>
        </div>

        </div>}
        
    </div>
  )
}

export default CountryDetails