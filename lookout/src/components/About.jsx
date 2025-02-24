import React from "react";
import "./About.css";
import {motion} from "framer-motion"
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import whiteLogo from '../assets/White_PNG.png';
import blackLogo from '../assets/Black_PNG.png';
import curatedEvents from '../assets/anthony-delanoix-hzgs56Ze49s-unsplash (1).jpg';
import experiences from "../assets/samantha-gades-fIHozNWfcvs-unsplash.jpg";
import atmosphere from "../assets/atmosphere.jpg";
import ikaneng from '../assets/IMG_6549 2.jpg';
import siya from '../assets/siya.jpeg';
import thabiso from '../assets/thabiso.jpg';
import kwazi from '../assets/Kwazi.jpg';


const teamData = [
    {
        image: ikaneng,
        name: "Ikaneng 'Creative Genius' Konyana",
        position: "Creative Director",
        bio: "Ethan lives for the perfect playlist and a well-balanced cocktail menu. Rumor has it, he can predict a viral TikTok trend before it even happens.",
        favoriteFood: "Loaded Nachos (extra guac, always).",
        weakness: "Can't function without coffee before 10 AM.",
    },
    {
        image: thabiso,
        name: "Thabiso 'Baddie Fumbler' Manukuza",
        position: "Human Resources Manager",
        bio: "If there’s a plan, Sienna made it. If there’s a problem, she solved it before you even noticed. Once rescheduled an entire event in 30 minutes due to unexpected rain.",
        favoriteFood: "Sushi with an unreasonable amount of soy sauce.",
        weakness: "Overthinks restaurant menu choices for hours.",
    },
    {
        image: siya,
        name: "Siyabonga 'Jimmy' Ndukuya",
        position: "Digital Marketing Specialist",
        bio: "Social butterfly and networking wizard. Can make friends with a brick wall. Probably already DM'd your favorite artist about our next event.",
        favoriteFood: "Tacos. Will debate endlessly about the best taco spot in Cape Town.",
        weakness: "Forgets names but never forgets a good party.",
    },
    {
        image: kwazi,
        name: "Kwazi 'Nkabi Levol' Mazibuko",
        position: "CEO",
        bio: "If an event doesn’t have the right aesthetic, Ava will personally redesign the entire venue. Once made a PowerPoint look so good it got a standing ovation.",
        favoriteFood: "Mac & Cheese, but make it gourmet.",
        weakness: "Physically incapable of choosing just one font.",
    },
];

const whyUsData = [
    {
        image: curatedEvents,
        title: "Expertly Curated Events",
        description: "We turn ideas into reality with precision and creativity.",
    },
    {
        image: experiences,
        title: "Unparalleled Atmosphere",
        description: "Every detail is designed to captivate and excite.",
    },{
        image: atmosphere,
        title: "Tailored Experiences",
        description: "Whether private or public, each event is designed to fit your vibe.",
    },

]

const About = () => {
    return (
        <div className="about-us">
            <motion.h2 
            className="about-us-title"
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -50 }}
            transition={{duration: 0.8, ease: "easeOut" }}
            viewport={{once: true}}            
            >
            About Us

            </motion.h2>

            <motion.div 
            className="get-to-know-us"
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -50}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut"}}
            viewport={{once: true}}
            >

                <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                >
                Who Are We?
                </motion.h2>

                <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                >
                    At <strong>The Lookout</strong>, we don’t just plan events—we curate unforgettable moments that leave lasting impressions. 
                    Whether it’s a high-energy club night pulsating with electrifying beats, an intimate Wine & Paint session under the Cape Town skyline, 
                    or an exclusive pop-up where trendsetters connect, every gathering is designed to inspire, engage, and elevate.
                </motion.p>
                <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                >
                    With a deep passion for bringing people together, we blend cutting-edge event planning, strategic marketing, and innovative brand collaborations 
                    to craft immersive experiences. Our expertise in creating the perfect synergy between ambiance, music, and engagement ensures that each event 
                    feels unique, vibrant, and unforgettable.
                </motion.p>
            </motion.div>

            <motion.div 
            className="why-us"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}        
            >
                <h2>Why Choose The Lookout?</h2>
                <div className="why-us-cards">
                {whyUsData.map((item, index) => (
                        <motion.div 
                        key={index} 
                        className="why-us-card"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 1.1, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        >
                            <img src={item.image} alt={item.title} className="card-image" />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
            className="meet-the-team"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            >
                <h2>Meet The Team</h2>
                <div className="team-cards">
                {teamData.map((member, index) => (
                    <motion.div 
                    key={index}
                    className="team-card"
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    >
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h3>{member.name}</h3>
                        <p className="position">{member.position}</p>
                        <p className="bio">{member.bio}</p>
                        <p><strong>Favorite Food:</strong> {member.favoriteFood}</p>
                        <p><strong>Weakness:</strong> {member.weakness}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        <motion.div 
        className="call-to-action"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
    <h2>Contact our friendly team.</h2>
    <p>
     <strong> Get in touch, and let’s bring your vision to life. </strong>
    </p>

    <div className="contact-info"
     >
    <motion.div 
    className="contact-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    >
        <FaEnvelope className="contact-icon" />
        <h3>Email Us</h3>
        <span>Speak to our friendly team.</span>
        <p>hello@thelookout.com</p>
    </motion.div>
    <motion.div
    className="contact-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    >
        <FaWhatsapp className="contact-icon" />
        <h3>WhatsApp Us</h3>
        <span>We're here to help</span>
        <p>+27 76 123 4567</p>
    </motion.div>
    <motion.div 
    className="contact-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    >
        <FaPhoneAlt className="contact-icon" />
        <h3>Call Us</h3>
        <span>Mon - Fri from 8am to 5pm.</span>
        <p>+27 21 987 6543</p>
    </motion.div>
    <motion.div 
    className="contact-card"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.3 }}
    >
        <FaInstagram className="contact-icon" />
        <h3>Follow Us</h3>
        <span>Stay updated & tag us.</span>
        <p>@TheLookoutEvents</p>
    </motion.div>
</div>
</motion.div>
</div>
    );
}

export default About;
