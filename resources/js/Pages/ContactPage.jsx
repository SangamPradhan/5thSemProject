import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Footer from '../components/Footer/Footer';
// Assuming Footer component is in the same directory

const ContactPage = () => {
    return (
        <>
            <section className="container mx-auto my-8 px-4">
                <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="form-container space-y-4">
                        <form action="#" method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full p-2 text-sm border rounded-lg border-gray-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full p-2 text-sm border rounded-lg border-gray-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter the subject"
                                    className="w-full p-2 text-sm border rounded-lg border-gray-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    rows="4"
                                    className="w-full p-2 text-sm border rounded-lg border-gray-300"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 text-white font-bold bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info text-sm text-gray-700 ml-auto p-6 max-w-md">
                        <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
                        <p className="text-base">
                            <strong>Email: </strong>
                            contact@company.com
                        </p>
                        <p className="text-base">
                            <strong>Phone: </strong>
                            +1 333 4040 5566
                        </p>
                        <p className="text-base">
                            <strong>Address: </strong>
                            212 Barrington Court New York, ABC 10001, United States
                        </p>

                        <div className="follow-us mt-8">
                            <h4 className="text-lg font-semibold mb-4">Follow Us On</h4>
                            <div className="flex gap-6 justify-start">
                                <a href="#" className="text-3xl hover:text-blue-500 duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-3xl hover:text-blue-500 duration-300">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-3xl hover:text-blue-500 duration-300">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
};

export default ContactPage;
