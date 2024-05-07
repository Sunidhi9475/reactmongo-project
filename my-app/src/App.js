// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// import './App.css'; // Import your CSS file for styling

// function App() {
//   return (
//     <div className="app">
//       <header className="header">
//         <h1>Dashboard</h1>
//       </header>
//       <div className="container">
//         <div className="sidebar">
//           <h2>Sidebar</h2>
//           <ul>
//             <li>Menu Item 1</li>
//             <li>Menu Item 2</li>
//             <li>Menu Item 3</li>
//           </ul>
//         </div>
//         <div className="main-content">
//           <h2>Main Content</h2>
//           <p>Welcome to your dashboard!</p>
//         </div>
//       </div>
//       <footer className="footer">
//         <p>Footer</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import About from './About';
import Services from './Services';
import LandingPage from './LandingPage';
import AdminPanel from './AdminPanel';
import DoctorManagement from './DoctorManagement'; // Import DoctorManagement component
import Department from './Department'; // Import Department component
import PatientManagement from './PatientManagement';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeComponent, setActiveComponent] = useState('landing');

  const handleAdminClick = () => {
    setIsAdmin(true);
    setActiveComponent('admin');
  };

  const handleMenuClick = (menu) => {
    setActiveComponent(menu);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setActiveComponent('landing');
  };

  return (
    <div className="App">
      {!isAdmin ? (
        <LandingPage handleAdminClick={handleAdminClick} />
      ) : (
        <>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item" onClick={() => handleMenuClick('departments')}>Departments</li>
              <li className="navbar-item" onClick={() => handleMenuClick('doctors')}>Doctors</li>
              <li className="navbar-item" onClick={() => handleMenuClick('patients')}>Patients</li>
              <li className="navbar-item" onClick={() => handleMenuClick('about')}>About</li>
              <li className="navbar-item" onClick={() => handleMenuClick('services')}>Services</li>
              <li className="navbar-item" onClick={handleLogout}>Logout</li>
            </ul>
          </nav>
          <div className="content">
            {activeComponent === 'landing' && <LandingPage handleAdminClick={handleAdminClick} />}
            {activeComponent === 'departments' && <Department />}
            {activeComponent === 'doctors' && <DoctorManagement />}
            {activeComponent === 'patients' && <PatientManagement />}
            {activeComponent === 'about' && <About />}
            {activeComponent === 'services' && <Services />}
            {activeComponent === 'admin' && <AdminPanel handleMenuClick={handleMenuClick} handleLogout={handleLogout} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
