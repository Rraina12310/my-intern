import { useState, useEffect } from 'react';
import './App.css';
import { FaHome, FaUser, FaBell, FaStar, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';
import CubeAnimation from './CubeAnimation'; // Import the 3D Animation Component

function App() {
  const [activePage, setActivePage] = useState('Home'); // State to track active page
  const [darkMode, setDarkMode] = useState(false);

  // Add useEffect hook for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Function to render different pages based on activePage state
  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return (
          <div>
            <div className="hero-section bg-gray-200 dark:bg-black p-10 text-center">
              <img
                src="your-profile-photo-url"
                alt="Profile"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h1 className="text-4xl font-bold dark:text-white">Rohin Raina</h1>
              <p className="text-lg mt-2 dark:text-gray-300">
                Aspiring Software Engineer | Problem Solver | Community Builder
              </p>
              <button
                onClick={() => setActivePage('About')}
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Get in Touch
              </button>
            </div>
            <h2 className="text-2xl font-bold mt-10 dark:text-white">Welcome to My Portfolio</h2>
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold dark:text-white">Consulting Services</h3>
              <p className="mt-4 dark:text-gray-300">
                Are you looking for expert advice on your project? I offer consulting services
                for individuals and businesses, ranging from tech startups to established companies.
              </p>
              <ul className="list-disc list-inside mt-4 dark:text-gray-300">
                <li>Software Development</li>
                <li>System Architecture</li>
                <li>API Design and Integration</li>
                <li>Data Structures & Algorithms</li>
                <li>Community Development Through Technology</li>
              </ul>
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">About Me</h2>
              <p className="mb-4 dark:text-gray-300">
                Hi, my name is <strong>Rohin Raina</strong>, and I am currently a student at the
                University of Texas at Dallas (UTD) majoring in Computer Science. I’m passionate about learning new skills and using technology to help others.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Technical Skills</h3>
                <ul className="list-disc list-inside dark:text-gray-300">
                  <li>Programming Languages: Java, C++, Python</li>
                  <li>Data Visualization: Power BI, Tableau</li>
                  <li>Data Analysis: SQL</li>
                  <li>Web Development: HTML, CSS, React.js, Tailwind CSS, Flutter</li>
                  <li>Operating Systems: Linux, Unix</li>
                  <li>Tools: Microsoft Office, Figma</li>
                  <li>Additional Skills: Communication, Leadership, Problem-Solving</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'Projects':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
                <h3 className="text-xl font-semibold dark:text-white">Solar Residential Calculator</h3>
                <p className="mt-2 dark:text-gray-300">
                  A full-stack app to calculate solar panel needs based on location, using Google Maps API.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
                <h3 className="text-xl font-semibold dark:text-white">PharmaSite</h3>
                <p className="mt-2 dark:text-gray-300">
                  A secure backend for medical data scanning with login functionality and clustering models.
                </p>
              </div>
            </div>
          </div>
        );
        case 'Resume':
          return (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">My Resume</h2>
              <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
                <h3 className="text-xl font-semibold dark:text-white">Rohin Raina</h3>
                <p className="mt-2 dark:text-gray-300">
                  Frisco, Texas 75035 | 469-647-8409 | rraina1119@gmail.com
                </p>
                <p className="mt-2 dark:text-gray-300">
                  <a href="https://www.linkedin.com/in/rohin-raina" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </p>
                <h4 className="text-lg font-semibold mt-4 dark:text-white">Education</h4>
                <p className="mt-2 dark:text-gray-300">
                  <strong>The University of Texas at Dallas</strong> - August 2022 - May 2026
                </p>
                <p className="dark:text-gray-300">
                  Bachelors in Computer Science | GPA: 3.6
                </p>
                <p className="dark:text-gray-300">
                  <strong>Relevant Courses:</strong> Advanced Algorithms, Automata Theory, Java Programming, C++ Coding Basics, Unix/Linux, Computer Architecture, Data Structures and Algorithms, Discreet Math for Computers, Intro to Frontend, Beginners Data Science
                </p>
                
                <h4 className="text-lg font-semibold mt-4 dark:text-white">Technical Skills</h4>
                <ul className="list-disc list-inside dark:text-gray-300">
                  <li>Programming Languages: Java, C++</li>
                  <li>Data Visualization: Power BI, Tableau</li>
                  <li>Data Analysis: SQL</li>
                  <li>Web Development: HTML, CSS, React.js, Tailwind CSS, Flutter</li>
                  <li>Operating Systems: Linux, Unix</li>
                  <li>Tools: Microsoft Office (Excel, PowerPoint, Docs, Outlook), Figma</li>
                  <li>Soft Skills: Communication, Leadership, Research, Problem-Solving</li>
                </ul>
        
                <h4 className="text-lg font-semibold mt-4 dark:text-white">Work Experience</h4>
                <p className="mt-2 dark:text-gray-300">
                  <strong>UpUnikSelf - Frontend Developer Intern</strong> (Sep 2024 - Dec 2024)
                </p>
                <p className="dark:text-gray-300">
                  Developed the frontend of a consulting company website using React.js and Tailwind CSS.
                </p>
        
                <h4 className="text-lg font-semibold mt-4 dark:text-white">Academic Project Experience</h4>
                <p className="mt-2 dark:text-gray-300">
                  <strong>Solar Residential Calculator - Full Stack Project Lead</strong> (Aug 2024 - Current)
                </p>
                <p className="dark:text-gray-300">
                  Led a team to build a solar panel calculator using APIs for optimal panel types and location-based calculations.
                </p>
                {/* Add more project experiences here in a similar format */}
                
                <h4 className="text-lg font-semibold mt-4 dark:text-white">Volunteer Experience</h4>
                <p className="mt-2 dark:text-gray-300">
                  <strong>Radha Krishna Temple - Hindi Assistant Teacher & Retail Assistant</strong> (Jul 2017 - Mar 2020)
                </p>
                <p className="dark:text-gray-300">
                  Taught Hindi and worked in sales promotions in the gift shop.
                </p>
        
                <h4 className="text-lg font-semibold mt-4 dark:text-white">Additional Information</h4>
                <p className="dark:text-gray-300">
                  Languages: English (Fluent), Hindi (Intermediate)
                </p>
                <p className="dark:text-gray-300">
                  US Citizen, eligible for internships and full-time work with no restrictions.
                </p>
                
                <button
                  onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
                  className="text-blue-500 mt-4 inline-block"
                >
                  Download Full Resume (PDF)
                </button>
              </div>
            </div>
          );
      case 'CustomerReviews':
        // Replace the CustomerReviews page with the 3D Animation
        return (
          <div>
            <CubeAnimation />
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold dark:text-white">Welcome</h2>
            <p className="dark:text-gray-300">Select a page from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className={`flex h-full min-h-screen ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 dark:bg-black text-white flex flex-col min-h-screen">
        <div className="px-4 py-6">
          <h1 className="text-3xl font-bold">Raina's Portfolio</h1>
        </div>
        <nav className="mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle Dark Mode
          </button>
          <ul>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'Home' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('Home')}
              >
                <FaHome className="inline-block mr-2" /> Home
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'About' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('About')}
              >
                <FaUser className="inline-block mr-2" /> About Me
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'Projects' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('Projects')}
              >
                <FaProjectDiagram className="inline-block mr-2" /> Projects
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'Resume' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('Resume')}
              >
                <FaFileAlt className="inline-block mr-2" /> Resume
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'Notifications' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('Notifications')}
              >
                <FaBell className="inline-block mr-2" /> Notifications
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'CustomerReviews' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('CustomerReviews')}
              >
                <FaStar className="inline-block mr-2" /> 3D Animation
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white dark:bg-black">{renderContent()}</div>
    </div>
  );
}

export default App;