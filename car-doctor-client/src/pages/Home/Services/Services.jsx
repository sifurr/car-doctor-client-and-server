import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center space-y-5 my-10">
                <h2 className="text-xl text-[#FF3811] text-center">Service</h2>
                <h2 className="text-5xl text-center">Our Service Area</h2>
                <p className="text-[#737373] w-1/2 mx-auto ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => 
                        <ServiceCard key={service._id} service={service} >

                        </ServiceCard>
                        )
                }
            </div>
        </div>
    );
};

export default Services;