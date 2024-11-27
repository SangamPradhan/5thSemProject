import React from "react";
import project1 from "../../assets/projects/project-1.jpg";
import project2 from "../../assets/projects/project-2.jpg";
import project3 from "../../assets/projects/project-3.jpg";
import project4 from "../../assets/projects/project-4.jpg";
import project5 from "../../assets/projects/project-5.jpg";
import project6 from "../../assets/projects/project-6.jpg";
import Footer from "../components/Footer/Footer.jsx";

const projects = [
    {
        id: 1,
        title: "Designing a better cinema experience",
        subtitle: "SEO Optimization",
        image: project1,
    },
    {
        id: 2,
        title: "Building design process within teams",
        subtitle: "Digital Marketing",
        image: project2,
    },
    {
        id: 3,
        title: "How intercom brings play into their design process",
        subtitle: "Keyword Targeting",
        image: project3,
    },
    {
        id: 4,
        title: "Stuck with to-do list, I created a new app for",
        subtitle: "Email Marketing",
        image: project4,
    },
    {
        id: 5,
        title: "Examples of different types of sprints",
        subtitle: "Marketing & Reporting",
        image: project5,
    },
    {
        id: 6,
        title: "Redesigning the New York times app",
        subtitle: "Development",
        image: project6,
    },
];

const Projects = () => {
    const today = new Date().toLocaleDateString();

    return (
        <>
            <section className="bg-gray-950 py-12" id="projects" aria-label="Projects">
                <div className="container mx-auto px-4">
                    <h2 className="text-white text-3xl font-semibold text-center mb-4">
                        Our Recent Projects
                    </h2>
                    <p className="text-gray-400 text-center mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <li key={project.id} className="group">
                                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
                                    <figure className="relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </figure>
                                    <div
                                        className="p-4 flex flex-col justify-between h-[160px]"
                                    >
                                        <div>
                                            <p className="text-orange-500 text-sm font-semibold">
                                                {project.subtitle}
                                            </p>
                                            <h3 className="text-white text-xl font-bold mt-2">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-end justify-between mt-4">
                                            <a
                                                href="#"
                                                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors"
                                            >
                                                View Details
                                            </a>
                                            <p className="text-gray-400 text-sm mt-4 self-end">
                                                {today}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;
