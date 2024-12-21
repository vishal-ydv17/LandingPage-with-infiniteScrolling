const Passenger = ({passenger}) => {
    return (
        <div className="bg-gray-300 p-4 m-2 w-full">
            <span className="font-bold">Id:</span> {passenger._id}   
            <div className="flex justify-between">
                <div>
                    <span className="font-bold">Name:</span> {passenger.name}   
                </div>
                <div>
                    <span className="font-bold">Trips:</span> {passenger.trips}
                </div>
            </div>
            <div>
                <span className="font-bold">Airline:</span> {passenger.airline[0].name}
            </div>
        </div>
    );
}

export default Passenger;