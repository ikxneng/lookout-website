import React, {useState, useEffect} from "react";
import "./Home.css"; 
import homeImage from '../assets/IMG_0178.JPG';
import eventPoster from '../assets/Euphoria-Bevan.jpg';
import whiteLogo from '../assets/White_PNG.png'


const Home = () => {
    const eventDate = new Date("2025-01-16T00:00:00");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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


   return( 
    <div className="home-container">

    <div className="text-section">
        <h4 className="slogan">INNOVATION & COLLABORATION</h4>
        <h1>Be on <br /> The Lookout</h1>
        <p> Where Bold Ideas Meet <br />Exceptional Experiences </p>    
        <button className="view-gallery-btn"> View Gallery</button>
        {/* <img src={homeImage} alt="" className="home-image"/> */}

     </div>   


    {/* Event Section */}
    <div className="upcoming-event">
    <h2 className="event-title">Upcoming <br /> Event</h2>

    {/* Event Poster */}
    <div className="event-info">
    <img src={eventPoster} alt="Event Poster" className="event-poster" />

        <div className="event-details">

        <h2 className="event-name">Euphoria</h2>    
        <p className="event-location">Pablo VIP Lounge | 111 Main RD, Claremont</p>

        {timeLeft ? (
              <div className="countdown-clock">
                {/* <p className="event-starts">The Event Starts In: </p> */}
                <p> The Event Starts In: <br /> {timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s</p>
              </div>
            ) : (
              <p className="event-date">The event has started!</p>
            )}

        <button className="ticket-button">Purchase Tickets</button>

        </div>

    </div>    
    </div>

    <div className="about-us">

    <img src={whiteLogo} alt="White Logo" className="about-logo"/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, libero impedit. Nesciunt, earum quibusdam similique quis sunt tempore facilis non hic tenetur fugit adipisci quia voluptatem placeat deserunt repellat enim!
    Fugit dolore ex laudantium delectus asperiores maxime, illum officia repellat tempora accusamus aspernatur quaerat sapiente numquam nobis fugiat, neque, tenetur obcaecati facilis velit ullam officiis repellendus. Atque totam a iure.
    Sed minus fugit nihil itaque minima harum molestiae. Deserunt pariatur saepe facilis omnis eaque, at maiores vel dolor modi repudiandae, natus debitis. Rerum atque ad aliquam, beatae voluptates exercitationem quos?
    Nobis ipsa commodi dignissimos sunt a! Alias corporis veritatis voluptatibus ipsum ea labore quia commodi vitae explicabo vero, excepturi est. Voluptatibus, cupiditate harum? Ducimus aperiam, at exercitationem perferendis odio vitae?
    Officia itaque exercitationem, corporis porro et saepe pariatur alias sunt iure delectus adipisci unde praesentium corrupti, molestias deserunt fugiat, eveniet ratione excepturi quae quidem animi consectetur quibusdam culpa. Incidunt, consectetur.
    Aspernatur corporis voluptates est quo fuga minus vero nobis quae unde, ad possimus obcaecati, odit nesciunt perferendis vitae optio commodi, magni rerum provident! Dolor at harum culpa quidem in esse!
    Vero dicta sit est soluta praesentium labore blanditiis necessitatibus modi, asperiores fugiat, nulla repellat minus facere maxime aliquam ea consectetur nihil possimus earum quam. Debitis nostrum ducimus cupiditate eaque dolorum.
    </p>

    </div>

    </div>

    );
};

export default Home;
