import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import "./Home.css"; 
import homeImage from '../assets/IMG_0178.JPG';
import eventPoster from '../assets/Euphoria-Bevan.jpg';
import logo from '../assets/Black_PNG-c6d0ce6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faXTwitter, faTiktok, faLinkedin} from '@fortawesome/free-brands-svg-icons';



const Home = () => {
    const eventDate = new Date("2025-02-18T00:00:00");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    function calculateTimeLeft () {
        const now = new Date()
        const difference = eventDate - now;

        if (difference > 0) {
            return{
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference/ (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference/ (1000 * 60)) % 60),
              seconds: Math.floor((difference/1000) % 60),
            };
        } else {
            return null;
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer);
    }, []);

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData ({ ...formData, [name]:value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        console.log("Inquiry Submitted:", formData);
    };

    const [experience, setExperience] = useState(0);
    const [attendees, setAttendees] = useState(0);
    const [eventsHosted, setEventsHosted] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setExperience ((prev) => (prev < 5 ? prev + 1 : 5));
            setAttendees ((prev) => (prev < 10000 ? prev + 100 : 10000));
            setEventsHosted ((prev) => (prev < 50 ? prev + 1 : 50));
        }, 50);

        return () => clearInterval(interval);
    }, []);

   return( 
<div className="home-container flex flex-col items-center px-4 sm:px-6 md:px-8">

    <div className="text-section-container">
    <motion.div
    className="text-section text-center sm:text-left w-full max-w-lg"
    initial={{opacity: 0, y: 50}}
     whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up when in view
    //  animate={{opacity: 1, y: 0}}
     viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% is visible
     transition={{duration: 1, ease: "easeOut" }}
     >
    <h4 className="slogan text-sm sm:text-lg">INNOVATION & COLLABORATION</h4>
    <h1 className="text-3xl sm:text-4xl font-bold">Be on <br /> The Lookout</h1>
    <p className="text-gray-600 text-sm sm:text-base">
        Where Bold Ideas Meet <br />Exceptional Experiences
    </p>    
    <button className="view-gallery-btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">View Gallery</button>
     </motion.div>   
     <motion.div 
    className="polaroid w-full max-w-xs sm:max-w-sm md:max-w-md"
    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
     whileInView={{ opacity: 1, scale: 1, rotate: -5 }} // Expands and rotates to normal when in view
     viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% is visible
    //  animate={{ opacity: 1, scale: 1, rotate: -5 }}
     whileHover={{ rotate: 5, scale: 1.05 }} 
     transition={{ duration: 1.3 }}

     >
    <img src={homeImage} alt="Home Image" className="home-image w-full rounded-lg shadow-lg" />
    <div className="caption text-center text-sm font-semibold mt-2">#TFTD2023</div>
  </motion.div>         
  </div>

    {/* Event Section */}
    <div className="upcoming-event">
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    >
    <h2 className="event-title text-red-500">Upcoming <br /> Event</h2>
    </motion.div>

    {/* Event Poster */}
    <div className="event-info">
    <motion.img 
    src={eventPoster}
    alt="Event Poster"
    className="event-poster w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg" 
    initial={{ opacity: 0, x: -50 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    />

        <div className="event-details">

        <motion.h2 
        className="event-name"
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        Euphoria
        </motion.h2>    
        <p className="event-location">Pablo VIP Lounge | 111 Main RD, Claremont</p>

        {timeLeft ? (
              <div 
              className="countdown-clock"
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              >
                {/* <p className="event-starts">The Event Starts In: </p> */}
                <p> The Event Starts In <br /> {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s</p>
              </div>
            ) : (
              <p className="event-date">The event has started!</p>
            )}

        <motion.button 
        className="ticket-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}

        >
        Purchase Tickets
        </motion.button>


        </div>

    </div>    
    </div>
    <motion.div 
                 className="stats-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="stat">
                    <h2>{experience}+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className="stat">
                    <h2>{attendees.toLocaleString()}+</h2>
                    <p>Attendees</p>
                </div>
                <div className="stat">
                    <h2>{eventsHosted}+</h2>
                    <p>Events Hosted</p>
                </div>
            </motion.div>

    <div className="chat-with-us">
       <div className="cwu-logo"> 
        <img src={logo} alt="Chat Logo" className="chat-logo" /> 
            <div className="social-icons" style={{marginLeft: '150px'}}>

            {/* Facebook */}
            <a href="www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon facebook"/>
            </a>

            {/* Instagram */}
            <a href="www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon instagram" />
            </a>

            {/* Twitter/X */}
            <a href="www.twitter.com" >
            <FontAwesomeIcon icon={faXTwitter} size="2x" className="social-icon twitter" />
            </a>

            {/* TikTok */}
            <a href="www.tiktok.com" target="_blank">
            <FontAwesomeIcon icon={faTiktok} size="2x" className="social-icon tiktok" />
            </a>

            <a href="www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon linkedin" />
            </a>
            </div>


       </div>

                    <motion.form 
                    onSubmit={handleSubmit}
                    className="chat-form"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }} 
                     
                     >
                        <div className="chat-title"><h3>Chat With Us</h3></div>
                        <div className="form-group-horizontal">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="chat-submit-btn">
                            Submit
                        </button>
                        {formSubmitted && (
                          <motion.p 
                          className="confirmation-message"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true, amount: 0.2 }} 
                          >
                            ✅ Thank you for your inquiry! We'll get back to you soon.
                          </motion.p>
                    )}
                    </motion.form>
            </div>
    </div>

    );
};

export default Home;
