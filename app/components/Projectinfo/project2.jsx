import React from "react";

const project2 = () => {
  return (
    <div className="w-[70vw] mx-auto my-20 text-gray-400 text-xl satoshi">
      <div className="mt-8">
        Innvoket developed a robust Web and Mobile Portal for antivirus dealers,
        leveraging the power of the MERN Stack for the web and Flutter for
        mobile applications. This solution simplifies dealer operations,
        enhances productivity, and provides a secure, intuitive experience
        across platforms.
      </div>

      <div className="my-2">
        The platform delivers cutting-edge tools to manage product activations,
        rewards tracking, and performance monitoring, ensuring that dealers stay
        connected and efficient. Key features include OTP-based secure logins,
        offline mode accessibility, push notifications, and exportable
        analytics.
      </div>

      <h2 className="text-white text-2xl my-4">Mobile App (Flutter):</h2>

      <div>
        <ul className="list-disc ml-4">
          <li>
            Cross-Platform Excellence: Developed for both iOS and Android for
            maximum reach.
          </li>
          <li>User-Focused Features:</li>
          <li>Secure OTP-based login for seamless access.</li>
          <li>
            Push notifications for real-time updates, schemes, and event
            reminders.
          </li>
          <li>Mobile-optimized dashboard with:</li>
          <li>Reward points and sales tracking.</li>
          <li>Callback renewals and software activation tools.</li>
          <li>Sales performance reports for actionable insights.</li>
          <li>
            Offline Mode: Key features remain accessible even without an
            internet connection, ensuring uninterrupted operations.
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-white text-2xl"> Web Portal (MERN): </h2>
        <ul className="list-disc ml-4">
          <li>
            Secure Authentication: Passwordless login with unique Dealer Code
            and OTP verification.
          </li>
          <li>Dealer Dashboard: Comprehensive tools to access:</li>
          <li>Ongoing antivirus schemes and rewards.</li>
          <li>Software activation tracking and updates.</li>
          <li>Upcoming event schedules and notifications.</li>
          <li>Enhanced Tools for Dealers:</li>
          <li>Detailed product information and lead tracking.</li>
          <li>Order management with exportable performance analytics.</li>
          <li>Training resources and dealership certification downloads.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-white text-2xl">Tech Stack</h2>
        <ul className="list-disc ml-4">
          
          <li>Web: MERN Stack (MongoDB, Express.js, React, Node.js).</li>
          <li>
            Mobile: Flutter (cross-platform development for iOS and Android).
          </li>
          <li>
            Responsive UI/UX: Ensures adaptability across web browsers and
            mobile devices.
          </li>
          <li>
            Comprehensive Testing: Guaranteed security, functionality, and a
            smooth user experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default project2;
