import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/6.jpg'
import image4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">                
                <img src={image1} className="w-full rounded-xl"/>
                <div className="absolute rounded-xl flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className="text-5xl font-bold mb-8">Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>                        
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5 mr-5">Discover More</button>
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className="text-5xl font-bold mb-8">Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>                        
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5 mr-5">Discover More</button>
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className="text-5xl font-bold mb-8">Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>                        
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5 mr-5">Discover More</button>
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white w-1/2 pl-12'>
                        <h2 className="text-5xl font-bold mb-8">Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>                        
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5 mr-5">Discover More</button>
                        <button className="bg-[#FF3811] hover:outline hover:outline-white hover:bg-transparent rounded-lg font-bold py-3 px-5">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811] mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-gray-700 opacity-70 text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;