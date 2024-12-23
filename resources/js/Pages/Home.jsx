import React from 'react';
import BlogsComp from '../../../resources/js/components/Blogs/BlogsComp.jsx';
import BrandsLogo from '../../../resources/js/components/BrandsLogo/BrandsLogo.jsx';
import Footer from '../../../resources/js/components/Footer/Footer.jsx';
import Hero from '../../../resources/js/components/Hero/Hero.jsx';
import Services from '../../../resources/js/components/Services/Services.jsx';
import Testimonial from '../../../resources/js/components/Testimonial/Testimonial.jsx';

const Home = () => {
    return (
        <>
            <Hero />
            <BrandsLogo />
            <Services />
            <Testimonial />
            <BlogsComp />
            <Footer />
        </>
    )
}

// Home.layout = page => <Layout children={page} />
export default Home
