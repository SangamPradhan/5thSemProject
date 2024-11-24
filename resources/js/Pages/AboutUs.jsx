import React, { useState } from "react";
import { FaBriefcase, FaBullseye, FaHeart } from "react-icons/fa";
import about1 from '../../assets/blog/about1.jpg';
import about2 from '../../assets/blog/about2.jpg';
import about3 from '../../assets/blog/about3.jpg';
import banner from '../../assets/blog/banner.jpg'; // Importing the hero section image
import Footer from '../components/Footer/Footer.jsx';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('goals');

    const tabsContent = {
        goals: {
            image: about1,
            title: 'Our Goals',
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aspernatur natus dignissimos eos quod, odio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate ullam exercitationem molestiae illum?
            Nam magni, saepe sint maiores vitae! Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed
            dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt
            lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.`
        },
        work: {
            image: about2,
            title: 'Our Work',
            content: `Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit.
            Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non,
            rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
        passion: {
            image: about3,
            title: 'Our Passion',
            content: `Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet.
            Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis.
            Proin neque metus, pellentesque pharetra semper vel, accumsan a neque. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.`
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }} // Using the imported image
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        LEARN MORE <span className="text-primary">ABOUT US</span>
                    </h1>
                    <p className="text-lg">
                        Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula
                    </p>
                </div>
            </section>

            {/* About Us Content */}
            <section className="py-16 px-6 lg:px-20 bg-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left Section - Features */}
                    <div className="space-y-6">
                        <div
                            onClick={() => handleTabChange('goals')}
                            className={`flex items-center bg-white shadow-md p-6 rounded-md cursor-pointer ${activeTab === 'goals' ? 'bg-blue-100' : ''}`}
                        >
                            <FaBullseye className="text-primary text-3xl mr-4" />
                            <span className="text-xl font-semibold">Our Goals</span> {/* Increased font size */}
                        </div>
                        <div
                            onClick={() => handleTabChange('work')}
                            className={`flex items-center bg-white shadow-md p-6 rounded-md cursor-pointer ${activeTab === 'work' ? 'bg-blue-100' : ''}`}
                        >
                            <FaBriefcase className="text-primary text-3xl mr-4" />
                            <span className="text-xl font-semibold">Our Work</span> {/* Increased font size */}
                        </div>
                        <div
                            onClick={() => handleTabChange('passion')}
                            className={`flex items-center bg-white shadow-md p-6 rounded-md cursor-pointer ${activeTab === 'passion' ? 'bg-blue-100' : ''}`}
                        >
                            <FaHeart className="text-primary text-3xl mr-4" />
                            <span className="text-xl font-semibold">Our Passion</span> {/* Increased font size */}
                        </div>
                    </div>


                    {/* Right Section - Tab Content */}
                    <div className="w-full lg:col-span-2">
                        <div className="tab-content">
                            <img
                                src={tabsContent[activeTab].image}
                                alt={tabsContent[activeTab].title}
                                className="w-full mb-4 rounded-lg"
                            />
                            <h4 className="text-2xl font-semibold mb-2">{tabsContent[activeTab].title}</h4>
                            <p className="text-base text-gray-700">{tabsContent[activeTab].content}</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }} // Using the same banner image
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        SEND US A <span className="text-primary">MESSAGE</span>
                    </h2>
                    <p className="text-lg mb-6">
                        Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet
                        dapibus odio augue eget libero.
                    </p>
                    <button className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-700 transition">
                        <a href="/contactpage">CONTACT US</a>
                    </button>
                </div>
            </section>

            <Footer />
        </div>

    );
};

export default AboutUs;
