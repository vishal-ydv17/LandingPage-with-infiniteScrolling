import { useState, useEffect } from "react";
import axios from "axios";
import Passenger from "../components/Passenger.jsx/Passenger";
import { RotatingLines } from "react-loader-spinner";


const Passengers = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPassengers = async () => {
        const URL = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`;
        const data = await axios.get(URL, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        setData((prevData) => [...prevData, ...data.data.data]);
        
        setLoading(false);
    };

    useEffect(() => {
        if (loading == true) {
          setPage((prevPage) => prevPage + 1);
        }
    }, [loading]);
  
    useEffect(() => {
        fetchPassengers()        
    }, [page]);

    const handleScroll = (e) => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom) {
            setLoading(true);
        }
    }

    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            func(...args);
          }, delay);
        };
    }

    window.addEventListener("scroll", debounce(handleScroll, 500));

    return (
        <div>
            <h1 className="text-xl text-center my-8">Passengers</h1>
            <div>
                <div className="" onScroll={handleScroll}>
                    {data.length > 0 && data.map((passenger) => (
                        <Passenger key={passenger._id} passenger={passenger} />
                    ))}
                </div>
                {loading && (
                    <div className="flex justify-center items-center">
                        <RotatingLines color="#000" />
                    </div>
                )}

            </div>
        </div>
    );
}

export default Passengers;