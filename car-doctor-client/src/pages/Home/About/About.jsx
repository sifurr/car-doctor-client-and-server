import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-10 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h4 className="text-2xl text-[#FF3811] font-bold">About Us</h4>
                    <h3 className="text-5xl font-bold">We are qualified & of experience in this field</h3>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="bg-[#FF3811] hover:outline hover:bg-transparent hover:outline-[#FF3811] hover:text-black duration-200 text-white rounded-lg font-bold py-3 px-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;