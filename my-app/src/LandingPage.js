// import React, { useState, useEffect } from 'react';
// import './LandingPage.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faUserMd, faBriefcaseMedical, faHospital, faInfoCircle, faUserSecret } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import img1 from './styles/img1.jpg'; // Import images
// import img2 from './styles/img2.png';
// import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// function LandingPage({ handleAdminClick }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Define the list of images
//   const images = [img1, img2];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Move to the next image
//       setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 3000); // Adjust the interval as needed (in milliseconds)

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <ul className="navbar-list">
//           <li className="navbar-item">
//             <FontAwesomeIcon icon={faHome} />
//             <span>Home</span>
//           </li>
//           <li className="navbar-item" onClick={handleAdminClick}>
//             <FontAwesomeIcon icon={faUserSecret} />
//             <span>Admin</span>
//           </li>
//           <li className="navbar-item">
//             <FontAwesomeIcon icon={faUser} />
//             <span>User</span>
//           </li>
//           <li className="navbar-item">
//             <FontAwesomeIcon icon={faUserMd} />
//             <span>Doctor</span>
//           </li>
//           <li className="navbar-item">
//             <FontAwesomeIcon icon={faBriefcaseMedical} />
//             <span>Services</span>
//           </li>
//           <li className="navbar-item">
//             <FontAwesomeIcon icon={faHospital} />
//             <span>Departments</span>
//           </li>
//           <li className="navbar-item">
//             <FontAwesomeIcon icon={faInfoCircle} />
//             <span>About Us</span>
//           </li>
//         </ul>
//       </nav>
//       <h1 className="fade-in-out">Welcome to MediConnect!</h1>
//       <div className="image-carousel">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className={index === currentIndex ? 'active' : ''}
//           />
//         ))}
//       </div>
//       <footer className="footer">
//         <div className="social-icons">
//           <FontAwesomeIcon icon={faTwitter} />
//           <FontAwesomeIcon icon={faInstagram} />
//           <FontAwesomeIcon icon={faWhatsapp} />
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;
import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faUserMd, 
  faBriefcaseMedical, 
  faHospital, 
  faInfoCircle, 
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'; 
import { 
  faTwitter as faTwitterBrands, 
  faInstagram as faInstagramBrands, 
  faWhatsapp as faWhatsappBrands 
} from '@fortawesome/free-brands-svg-icons';
import img1 from './styles/img1.jpg'; // Import images
import img2 from './styles/img2.png';

function LandingPage({ handleAdminClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the list of images
  const images = [img1, img2];

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </li>
          <li className="navbar-item" onClick={handleAdminClick}>
            <FontAwesomeIcon icon={faUserSecret} />
            <span>Admin</span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faUser} />
            <span>User</span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faUserMd} />
            <span>Doctor</span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faBriefcaseMedical} />
            <span>Services</span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faHospital} />
            <span>Departments</span>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>About Us</span>
          </li>
        </ul>
      </nav>
      <h1 className="fade-in-out">Welcome to MediConnect!</h1>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <footer className="footer">
        <div className="social-icons">
          <FontAwesomeIcon icon={faTwitterBrands} />
          <FontAwesomeIcon icon={faInstagramBrands} />
          <FontAwesomeIcon icon={faWhatsappBrands} />
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

