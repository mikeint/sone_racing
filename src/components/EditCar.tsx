// Import React
import React from "react";
import Navbar from "./Navbar";

const EditCar = ({ carId }: { carId: string }) => { 
    return (
        <div>
			<Navbar />
            <h1>Edit Car</h1>
            <p>Car ID: {carId}</p>
        </div>
    );
};

export default EditCar;
