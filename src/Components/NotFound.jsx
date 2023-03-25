import { useNavigate } from 'react-router-dom'


const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen p-6 dark:bg-very-dark-blue bg-very-light-gray dark:text-white text-very-dark-blue-light">
         <button className="text-very-dark-blue-light dark:text-white p-4 rounded-sm text-center mt-4 bg-white dark:bg-dark-blue" onClick={() => navigate('/')}>Back</button>
        <div className="p-4 rounded-md mx-auto dark:bg-dark-blue bg-white shadow-md mt-4">
            <h2 className="text-red-600 font-bold text-xl text-center">Error 404</h2>
            <p className="text-center">The country you entered does not exist, check if it's a spelling error and try again.</p>
        </div>
    </div>
  )
}

export default NotFound