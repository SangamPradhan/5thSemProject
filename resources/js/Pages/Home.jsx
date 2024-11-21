import React from 'react';
import BlogsComp from 'D:/Xampp/htdocs/5thSemProject/resources/js/components/Blogs/BlogsComp.jsx';
import BrandsLogo from 'D:/Xampp/htdocs/5thSemProject/resources/js/components/BrandsLogo/BrandsLogo.jsx';
import Footer from 'D:/Xampp/htdocs/5thSemProject/resources/js/components/Footer/Footer.jsx';
import Hero from 'D:/Xampp/htdocs/5thSemProject/resources/js/components/Hero/Hero.jsx';
import Services from 'D:/Xampp/htdocs/5thSemProject/resources/js/components/Services/Services.jsx';
import Testimonial from 'D:/Xampp/htdocs/5thSemProject/resources/js/components/Testimonial/Testimonial.jsx';

const Home = () => {
    return (
        <>
            <Hero />
            <BrandsLogo />
            <Services />
            <BlogsComp />
            <Testimonial />
            <Footer />
        </>
    )
}

// Home.layout = page => <Layout children={page} />
export default Home
