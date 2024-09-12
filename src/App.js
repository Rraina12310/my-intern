import { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Home'); // State to track active page
  const [reviews, setReviews] = useState([]); // State to store customer reviews
  const [newReview, setNewReview] = useState({ stars: 1, comment: '' }); // State to store new review input

  // Function to handle form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.comment.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview({ stars: 1, comment: '' });
    }
  };

  // Render star rating
  const renderStars = (stars) => {
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return (
          <div>
            <h2 className="text-2xl font-bold">Welcome to the Home Page</h2>
            <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">Consulting Services</h3>
              <p className="mt-4">
                Are you looking for expert advice on your project? I offer consulting services for individuals and
                businesses, ranging from tech startups to established companies. My areas of expertise include:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Software Development</li>
                <li>System Architecture</li>
                <li>API Design and Integration</li>
                <li>Data Structures & Algorithms</li>
                <li>Community Development Through Technology</li>
              </ul>
              <p className="mt-4">
                You can choose to pay for my consulting services in one of two ways:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>
                  <strong>Hourly Rate:</strong> $45 per hour
                </li>
                <li>
                  <strong>Equity Option:</strong> I'm open to equity offers if your project aligns with my interests.
                </li>
              </ul>
              <p className="mt-4">
                Feel free to reach out to discuss how we can work together to bring your project to life.
              </p>
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="mb-4">
                Hi, my name is <strong>Rohin Raina</strong>, and I am currently a student at the University of Texas at Dallas (UTD) majoring in Computer Science. I’m passionate about learning new skills and using technology to help others. 
              </p>
              <p className="mb-4">
                While I’m still developing my expertise in computer science, I am a strong researcher and always willing to put in the effort to find the best solutions. My goal is to contribute to impactful projects while continuing to learn and grow along the way.
              </p>
              <p className="mb-4">
                Feel free to reach out to me if you have any questions, need assistance with a project, or just want to connect. I may not have all the answers yet, but I promise to give my very best effort.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <ul>
                  <li><strong>Phone:</strong> 469-647-8409</li>
                  <li><strong>Email:</strong> rraina1119@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'Notifications':
        return (
          <div>
            <h2 className="text-2xl font-bold">Notifications</h2>
            <ul className="mt-4">
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">Project Consultation</p>
                <p>Amount Due: $20,000.00</p>
                <p>Due Date: September 25, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">Azure Database</p>
                <p>Amount Due: $250.50</p>
                <p>Due Date: October 1, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">WebApp Domain</p>
                <p>Amount Due: $66.20</p>
                <p>Due Date: September 30, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">AWS Cloud Services</p>
                <p>Amount Due: $1,340.00</p>
                <p>Due Date: October 15, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">GitHub Pro Subscription</p>
                <p>Amount Due: $49.99</p>
                <p>Due Date: October 10, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">Zoom Pro Annual Subscription</p>
                <p>Amount Due: $199.00</p>
                <p>Due Date: October 5, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">LinkedIn Premium</p>
                <p>Amount Due: $29.99</p>
                <p>Due Date: September 28, 2024</p>
              </li>
              <li className="mb-4 p-4 bg-white shadow rounded-lg">
                <p className="font-semibold">Google Workspace Business</p>
                <p>Amount Due: $120.00</p>
                <p>Due Date: October 3, 2024</p>
              </li>
            </ul>
          </div>
        );
      case 'CustomerReviews':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

            {/* Review Form */}
            <form onSubmit={handleReviewSubmit} className="bg-white p-4 shadow rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Rating:</label>
                <select
                  value={newReview.stars}
                  onChange={(e) => setNewReview({ ...newReview, stars: parseInt(e.target.value) })}
                  className="block w-full p-2 border border-gray-300 rounded"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 && 's'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Comment:</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="block w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  placeholder="Write your review..."
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Submit Review
              </button>
            </form>

            {/* Display Reviews */}
            <div>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="bg-white p-4 shadow rounded-lg mb-4">
                    <p className="text-yellow-500">{renderStars(review.stars)}</p>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet. Be the first to leave a review!</p>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold">Welcome</h2>
            <p>Select a page from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-full min-h-screen relative">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
        <div className="px-4 py-6">
          <h1 className="text-3xl font-bold">Raina's App</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'Home' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('Home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'About' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('About')}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'Notifications' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('Notifications')}
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${activePage === 'CustomerReviews' ? 'bg-gray-700' : ''}`}
                onClick={() => setActivePage('CustomerReviews')}
              >
                Customer Reviews
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>

      {/* Bouncing Ball with Tooltip */}
      <a
        href="https://www.boredbutton.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-10 right-10"
      >
        <div className="relative group">
          <div className="w-12 h-12 bg-gray-700 rounded-full animate-bounce"></div>
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs p-2 rounded">
            Are you bored? Click this button!
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;