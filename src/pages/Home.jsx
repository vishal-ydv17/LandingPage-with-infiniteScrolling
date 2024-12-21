import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center m-4 space-y-8'>
                <h1 className="text-xl">Home Page</h1>
                <button className="bg-orange-600 py-2 px-4 rounded-md text-white">
                    <Link to='/passengers'>Passengers</Link>    
                </button>
            </div>
        </div>
    )
}

export default Home