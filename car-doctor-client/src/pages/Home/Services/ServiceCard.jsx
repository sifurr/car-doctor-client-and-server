

const ServiceCard = ({service}) => {
    
    const {title, img, price} = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="service" className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold text-[#FF3811] ">Price: ${price} </p>
                <div className="">
                <button className="bg-[#FF3811] hover:outline hover:bg-transparent hover:outline-[#FF3811] hover:text-black duration-200 text-white rounded-lg font-bold py-3 px-5">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;