import React from "react";
import "./About.css";
import {motion} from "framer-motion"
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import whiteLogo from '../assets/White_PNG.png';
import whoAreWe from '../assets/IMG_2408.JPG';
import curatedEvents from '../assets/anthony-delanoix-hzgs56Ze49s-unsplash (1).jpg';
import experiences from "../assets/samantha-gades-fIHozNWfcvs-unsplash.jpg";
import atmosphere from "../assets/atmosphere.jpg";
import ikaneng from '../assets/IMG_6549 2.jpg';
import siya from '../assets/siya.jpeg';
import thabiso from '../assets/thabiso.jpg';
import kwazi from '../assets/Kwazi.jpg';


const teamData = [
    {
        image: kwazi,
        name: "Kwazi 'Nkabi Levol' Mazibuko",
        position: "CEO",
        bio: "He is a hardworking visionary, always cooking up new ideas and rubbing his hands for good luck as he leads the team to success.",
        favoriteFood: "Braai Meat",
        weakness: "Physically incapable of speaking Sotho",
    },
    {
        image: siya,
        name: "Siyabonga 'Jimmy' Ndukuya",
        position: "Digital Marketing Specialist",
        bio: "Social butterfly and networking wizard. Can make friends with a brick wall. Probably already DM'd his crush about our next event.",
        favoriteFood: "Sushi",
        weakness: "Forgets names but never forgets a good party.",
    },
    {
        image: ikaneng,
        name: "Ikaneng 'Ika' Konyana",
        position: "Creative Director",
        bio: "Innovator, always cooking up new ideas and bringing energy to every challenge. With a hands-on approach and a touch of good luck, he drives the team toward success.",
        favoriteFood: "Chicken Alfredo",
        weakness: "Baddies",
    },
    {
        image: thabiso,
        name: "Thabiso 'Baddie Fumbler' Manukuza",
        position: "Human Resources Manager",
        bio: "He is a people-focused leader dedicated to building a strong, supportive workplace. With a keen eye for talent and a passion for employee growth ( though he hasn't grown an inch since age 16), he’s all about helping others reach new heights—just not in the height department.",
        favoriteFood: "Lasanya",
        weakness: "Can't spell Lasagne",
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

                <div className="who-are-we">
                <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                >
                    At <strong>The Lookout</strong>, we don’t just plan events—we curate unforgettable moments that leave lasting impressions. 
                    Whether it’s a high-energy club night pulsating with electrifying beats, an intimate Wine & Paint session under the Cape Town skyline, 
                    or an exclusive pop-up where trendsetters connect, every gathering is designed to inspire, engage, and elevate.
                    <br />
                    <br />
                    With a deep passion for bringing people together, we blend cutting-edge event planning, strategic marketing, and innovative brand collaborations 
                    to craft immersive experiences. Our expertise in creating the perfect synergy between ambiance, music, and engagement ensures that each event 
                    feels unique, vibrant, and unforgettable. 
                </motion.p>
                <img id="about-img" src={whoAreWe} alt="WHO" />
                </div>
            </motion.div>

            <motion.div 
            className="why-us"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}        
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
        <p>@thelookoutza</p>
    </motion.div>
</div>
</motion.div>
</div>
    );
}

export default About;
