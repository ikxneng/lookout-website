import React from "react";
import "./Events.css";
import { motion, useInView } from "framer-motion";
import imageFour from "../assets/IMG_5222 (1).JPG";
import img3 from "../assets/Sip and Paint.JPG";
import img4 from '../assets/IMG_0168.JPG';
import img5 from '../assets/IMG_5220 (1).JPG';

const events = [
  {
    id: 1,
    title: "Sunset Social",
    description: "A gathering that’s all about energy, connection, and celebration. Think vibrant conversations, uplifting music, and an atmosphere charged with excitement. Whether you’re catching up with old friends or making new ones, this event is about unwinding, letting loose, and enjoying the moment. From laid-back grooves to high-energy beats, the night flows effortlessly, creating a space where everyone feels welcome and alive.",
    image: imageFour
  },
  {
    id: 2,
    title: "Wine and Paint",
    description: "Wine & Paint is an immersive creative escape, where guests let their artistic side shine while sipping on fine wine and enjoying a laid-back, social atmosphere. Whether you’re a seasoned painter or just here for the experience, it’s a day filled with color, laughter, and good vibes. No pressure—just creativity, self-expression, and a glass (or two) of inspiration.",
    image: img3
  },  
  {
    id: 3,
    title: "Tales From The Dead",
    description: "Our annual Halloween event that first came to life in 2021, marking the beginning of our journey. A night where eerie stories unfold, the supernatural feels closer than ever, and guests immerse themselves in a world of mystery, fright, and thrill. Expect hauntingly good entertainment, spine-chilling surprises, and an atmosphere that lingers long after the night is over. If you love all things spooky, this is the one event you don’t want to miss.",
    image: img4
  },

  { id: 4,
    title: "& Many More", 
    description: "We promise that the magic doesn’t stop here. From pop-ups and themed nights to unexpected experiences that spark joy and curiosity, we’re always dreaming up something new. Stay tuned—you never know what’s coming next, but you can bet it’ll be unforgettable.",
    image: img5
  }
];

const Events = () => {
    return (
        <div className="events-container">
          <motion.h1 
            className="events-heading"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Events
          </motion.h1>

          <div className="events-grid">
            {events.map((event, index) => (
              <motion.div 
                key={event.id} 
                className="events-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={event.image} alt={event.title} className="events-image" />
                <div className="events-details">
                  <h2 className="events-title">{event.title}</h2>
                  <p className="events-description">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    );
};

export default Events;
