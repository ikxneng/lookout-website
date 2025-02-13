import Masonry from "react-masonry-css";
import "./Gallery.css";
import testerImage from "../assets/IMG_7239.JPG";
import homeImage from "../assets/IMG_0178.JPG";
import sunset1 from "../assets/IMG_0593 4.JPG";
import sunset2 from "../assets/IMG_0596 4.JPG"
import sunset3 from "../assets/IMG_0910 3.JPG"
import sunset4 from "../assets/IMG_0911 3.JPG"
import sunset5 from "../assets/IMG_0915 4.JPG"
import sunset6 from "../assets/IMG_0947 4.JPG"
import sunset7 from "../assets/IMG_0948 4.JPG"
import sunset8 from "../assets/IMG_0954 4.JPG"
import sunset9 from "../assets/IMG_0998 3.JPG"
import sunset10 from "../assets/IMG_0999 3.JPG"
import sunset11 from "../assets/IMG_1024 4.JPG"
import sunset12 from "../assets/IMG_1031 3.JPG"
import sunset13 from "../assets/IMG_1055 3.JPG"
import sunset14 from "../assets/IMG_1057 3.JPG"
import sunset15 from "../assets/IMG_1081 3.JPG"
import sunset16 from "../assets/IMG_5209 (1).JPG";
import sunset17 from "../assets/IMG_5220 (1).JPG";
import sunset18 from "../assets/IMG_5222 (1).JPG";
import sunset19 from "../assets/IMG_5184.JPG";
import sunset20 from "../assets/IMG_7936 (1).JPG";
import sunset21 from "../assets/IMG_7821 (1).JPG";
import sunset22 from "../assets/IMG_7873.JPG";
import sunset23 from "../assets/IMG_7950.JPG";
import sunset24 from "../assets/IMG_7333.JPG";


const Gallery = () => {
  const images = [
     sunset3, sunset19, sunset22, sunset4, sunset6, sunset7, sunset8, sunset12, sunset13, sunset14, 
     sunset9, sunset10, sunset23, sunset24 , sunset1, sunset2, sunset11, sunset15,
     sunset16, sunset5, sunset17, sunset18, sunset20, sunset21
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Gallery</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index}`} className="gallery-image" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
