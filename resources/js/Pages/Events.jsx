import React from "react";
import event1 from '../../assets/website/recent-post-1.jpg';
import event2 from '../../assets/website/recent-post-2.jpg';
import event3 from '../../assets/website/recent-post-3.jpg';
import event4 from '../../assets/website/recent-post-4.jpg';
import Footer from '../components/Footer/Footer.jsx'; // Adjust the path based on your project structure

const RecentPosts = () => {
    const posts = [
        {
            id: 1,
            image: event1,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
        {
            id: 2,
            image: event2,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
        {
            id: 3,
            image: event3,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
        {
            id: 4,
            image: event4,
            badge: "Working Tips",
            title: "Helpful Tips for Working from Home as a Freelancer",
            text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
            tags: ["Travel", "Lifestyle"],
            readTime: "3 mins read",
        },
    ];

    return (
        <>
            {/* Recent Posts Section */}
            <div className="bg-gray-950 text-white py-10 px-">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 ml-16">Recent Updates</h2>
                    <p className="text-gray-400 mb-8 ml-16">Check out the upcoming and past events</p>
                    <ul className="space-y-8">
                        {posts.map((post) => (
                            <li
                                key={post.id}
                                className="flex flex-col md:flex-row items-start bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-[90%] mx-auto max-h-[400px]"
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/3 h-auto">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover rounded-l-lg md:rounded-t-none"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="p-4 flex-1">
                                    {/* Badge */}
                                    <span className="bg-blue-600 text-sm text-white px-3 py-1 rounded-full">
                                        {post.badge}
                                    </span>
                                    {/* Title */}
                                    <h3 className="text-4xl font-bold mt-3 hover:text-blue-500 cursor-pointer">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <br /><p className=" text-gray-400 mt-2 pb-20 text-lg">{post.text}</p>

                                    <div className="flex justify-between items-center mt-4">
                                        {/* Tags */}
                                        <div className="space-x-2">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-blue-400 text-sm hover:underline"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Read Time */}
                                        <div className="text-sm text-gray-400 flex items-center">
                                            <span className="material-icons text-lg mr-1">schedule</span>
                                            {post.readTime}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Pagination */}
                    <div className="flex justify-center items-center space-x-3 mt-8">
                        <button className="text-gray-400 hover:text-white flex items-center">
                            <span className="material-icons">Previous</span>
                        </button>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-full">
                            1
                        </button>
                        <button className="text-gray-400 hover:text-white">2</button>
                        <button className="text-gray-400 hover:text-white">3</button>
                        <span className="text-gray-400">...</span>
                        <button className="text-gray-400 hover:text-white flex items-center">
                            Next <span className="material-icons"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
};

export default RecentPosts;
