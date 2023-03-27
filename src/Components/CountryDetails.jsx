import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'



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
    <div className="h-[100%] p-8 lg:px-16 bg-very-light-gray dark:bg-very-dark-blue">
        {!countryData && <div className="h-screen flex items-center justify-center dark:bg-very-dark-blue mt-4 w-[120px] mx-auto">
            <button type="button" class="dark:bg-dark-blue bg-white shadow-lg animate-pulse rounded-md p-4 text-very-dark-blue-light dark:text-white" disabled>
           Loading...
           </button>
        </div>}
        {countryData && <div >
            <Link to='/'><button className="text-very-dark-blue-light dark:text-white p-4 rounded-sm text-center mt-4 bg-white dark:bg-dark-blue"><i class="fa-solid fa-arrow-left"></i> Back</button></Link>       
 <div className="flex flex-col md:flex-row justify-between mt-6">
            <div>
                <img src={countryData[0].flags.svg} alt=""  className="h-[170px] pb-6 lg:h-[340px] w-[440px]"/>
            </div>
            <div  className="text-very-dark-blue-light dark:text-white ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                    <h2 className=" font-bold text-lg">{countryData[0].name.common}</h2>
                    <p className="opacity-[0.8] mt-4">Native Name: <span className="opacity-[0.5]">{countryData[0].name.common}</span></p>
                    <p className="opacity-[0.8] mt-2">Population: <span className="opacity-[0.5]">{countryData[0].population.toLocaleString()}</span></p>
                    <p className="opacity-[0.8] mt-2">Region: <span className="opacity-[0.5]">{countryData[0].region}</span></p>
                    <p className="opacity-[0.8] mt-2">Sub Region: <span className="opacity-[0.5]">{countryData[0].subregion}</span></p>
                    <p className="opacity-[0.8] mt-2">Capital: <span className="opacity-[0.5]">{countryData[0].capital}</span></p>
                    </div>
                    <div>
                    <p className="opacity-[0.8] mt-4">Top Level Domain:  <span className="opacity-[0.4]">{countryData[0].tld}</span></p>
                        <p className="opacity-[0.8]">Currencies: <span className="opacity-[0.4]">{Object.keys(countryData[0].currencies)}</span></p>
                        <p className="opacity-[0.8]">Languages: <span className="opacity-[0.4]">{Object.values(countryData[0].languages).join(',')}</span></p>
                        </div>
                </div>
                {countryData[0].borders && <div className="mt-4 text-very-dark-blue-light dark:text-white">
                    <h3 className="text-lg">Border Countries</h3>
                    <div className="flex justify-between mt-4">
                        {countryData[0].borders.map(border => (
                            <div key={border} className="bg-white dark:bg-dark-blue rounded-md p-2">
                                {border}
                            </div>
                        ))}
                    </div>
                </div>}
                
            </div>
        </div>

        </div>}
        
    </div>
  )
}

export default CountryDetails
