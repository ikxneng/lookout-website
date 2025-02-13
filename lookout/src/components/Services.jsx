import React from "react";
import './Services.css';
import eventMan from '../assets/event-management.jpg';
import eventCon from "../assets/event-consultation.jpg";
import photography from "../assets/photography.jpg";
import marketing from "../assets/marketing.jpg";
import webDesign from "../assets/ux-store.jpg";
import {motion} from "framer-motion";

const Services = () => {

    const services = [
        {id: 1,
         name: "Event Management",
         image: eventMan,
         description: " We take care of the entire event planning process, from start to finish. We work with you to understand your goals and budget, and then we create a custom event plan that meets your needs. We handle everything from venue selection and catering to logistics and security. We also provide event coordination and on-site management to ensure that your event runs smoothly. "},

        {id: 2,
        name: "Event Consultation",
        image: eventCon,
        description: " If you already have a great idea for an event, but you need help bringing it to life, we can provide event consultation services. We can help you with everything from brainstorming ideas to developing a budget to executing the event. We have a wealth of experience in the event planning industry, and we can help you make your event a success. "},

        {id: 3,
        name: "Photography",
        image: photography,
        description: " We provide professional event photography services to capture your event memories in stunning detail. Our photographers are experienced in capturing the atmosphere and energy of events, and they will work with you to capture the perfect shots. We can also provide videography services to capture your event on film."},

        {id: 4,
        name: "Marketing",
        image: marketing,
        description: " We can help you promote your event to reach your target audience. We have a team of experienced marketing professionals who can create and execute a marketing plan that will get people excited about your event. We can also help you with social media marketing, email marketing, and event website design."},

        {id: 5,
        name: "Web Design",
        image: webDesign,
        description: " We offer premium web design services for businesses, startups, and personal brands. Our team creates visually stunning, user-friendly websites that are tailored to your specific needs. From responsive layouts to seamless navigation, we ensure that your website not only looks great but also delivers an exceptional user experience. We use the latest design trends and technologies to build modern, high-performing websites that align with your brand identity. Whether you need a portfolio, e-commerce site, or a corporate website, we provide customized solutions to help you stand out online." }
    ] 

    return(
        <div className="services-container">

        <h3 className="services-heading">Services</h3>

        {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`service-row ${
            index % 2 === 0 ? "image-first" : "description-first"
          }`}
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth effect
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% in view
        >
          {/* Image Section */}
          <motion.div 
          className="service-image"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={service.image} alt={service.name} />
          </motion.div>

          {/* Description Section */}
          <motion.div 
          className="service-description"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </motion.div>
        </motion.div>
      ))}

</div>
    );
};

export default Services;
