import React, { useState } from "react";
import logo from '../../assets/brands/logo.svg';
import insta1 from '../../assets/website/insta-post-1.png';
import insta2 from '../../assets/website/insta-post-2.png';
import insta3 from '../../assets/website/insta-post-3.png';
import insta4 from '../../assets/website/insta-post-4.png';
import insta5 from '../../assets/website/insta-post-5.png';
import insta6 from '../../assets/website/insta-post-6.png';
import insta7 from '../../assets/website/insta-post-7.png';
import insta8 from '../../assets/website/insta-post-8.png';
import insta9 from '../../assets/website/insta-post-9.png';
import Footer from '../components/Footer/Footer.jsx'; // Assuming the Footer component is in this directory

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const instaPosts = [
        insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8, insta9,
    ];

    // Videos Data
    const videoPosts = [
        { title: "Video 1", url: "https://www.youtube.com/embed/KNE8o4gK_y0?si=_yt5eI6YQPEgCO2c" },
        { title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
        { title: "Video 3", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    ];

    return (
        <>
            {/* Dark Themed Section */}
            <div className="bg-gray-950 p-6 text-center">
                {/* Logo */}
                <a href="#" className="block mb-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="mx-auto"
                        width={119}
                        height={37}
                    />
                </a>

                {/* Description */}
                <p className="text-white text-lg font-medium mb-6">Following Event Pictures</p>

                {/* Instagram Post Grid */}
                <ul className="grid grid-cols-4 gap-10" style={{ gap: "12px" }}>
                    {instaPosts.map((post, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setSelectedImage(post)}
                                className="block focus:outline-none"
                            >
                                <img
                                    src={post}
                                    alt={`Insta post ${index + 1}`}
                                    className="w-full h-auto rounded-md shadow-lg"
                                />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Modal for Enlarged Image */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected post"
                                className="max-w-full max-h-screen rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 text-white text-3xl"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}

                {/* Videos Section */}
                <div className="mt-10">
                    <h2 className="text-white text-xl font-medium mb-6">Featured Videos</h2>
                    <ul className="grid grid-cols-3 gap-6">
                        {videoPosts.map((video, index) => (
                            <li key={index} className="rounded-md overflow-hidden shadow-lg">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-48"
                                ></iframe>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <br />

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Gallery;
