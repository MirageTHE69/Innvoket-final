import React from "react";

const project3 = () => {
  return (
    <div className="w-[70vw] mx-auto my-20 text-gray-400 text-xl satoshi">
      <p>
        Innvoket designed and developed a comprehensive CRM & Inventory
        Management System alongside a robust Mobile App, offering advanced
        ticket management, inventory tracking, and automated notifications to
        improve operational workflows. Built with MERN Stack for the web and
        Flutter for mobile, the platform provides scalable, secure, and
        user-friendly solutions to meet growing business needs.
      </p>

      <h2 className="text-white text-2xl my-4"> Mobile App (Flutter): </h2>

      <div>
        <ul className="list-disc ml-4">
          <li>Cross-Platform Accessibility:</li>
          <li>
            Developed using Flutter for seamless performance on both iOS and
            Android devices.
          </li>
          <li>Key Features:</li>
          <li>
            Ticket Management: Create, assign, and track tickets directly from
            the mobile app.
          </li>
          <li>
            Inventory Management: Real-time stock updates with reorder alerts.
          </li>
          <li>
            Push Notifications: Stay informed with instant updates on ticket
            escalations, stock reorders, and follow-ups.
          </li>
          <li>
            Analytics on the Go: Access key performance metrics and reports
            anytime, anywhere.
          </li>
          <li>
            Offline Mode: Core functionalities remain available without internet
            connectivity.
          </li>
        </ul>
      </div>

      <h2 className="text-white text-2xl my-4">Web Portal (MERN Stack):</h2>

      <ul className="list-disc ml-4">
        <li>User & Role Management:</li>
        <li>
          Role-based access control for Admin, Support Engineer, Panel Manager,
          Inventory Manager, and Installation Support Manager.
        </li>
        <li>
          Customizable user roles to enable task-specific permissions securely.
        </li>
        <li>Inventory Management:</li>
        <li>
          Real-time tracking of inventory components (e.g., motherboards,
          remotes, speakers).
        </li>
        <li>
          Stock level monitoring, reorder alerts, and usage insights for better
          inventory planning.
        </li>
        <li>
          Tracking of dispatched and returned items to ensure operational
          transparency.
        </li>
        <li>Ticket Management System:</li>
        <li>
          Automated workflows for ticket creation, assignment, and escalation.
        </li>
        <li>Real-time tracking and alerts for unresolved tickets.</li>
        <li>
          Multi-channel notifications via email and in-app alerts to improve
          response times.
        </li>
        <li>Automated Processes & Notifications:</li>
        <li>Daily reminders for pending and unresolved tickets.</li>
        <li>Escalation alerts to ensure timely follow-ups and resolutions.</li>
        <li>
          Comprehensive email and push notifications to keep teams updated.
        </li>
        <li>Reporting & Analytics:</li>
        <li>
          Dynamic Dashboards: Visualize ticket statuses, resolution times, and
          escalations in real time.
        </li>
        <li>
          Inventory Metrics: Analyze stock usage, return rates, and reorder
          requirements.
        </li>
        <li>
          Performance Insights: Evaluate team efficiency with detailed analytics
          and reports.
        </li>
      </ul>

      <h2 className="text-white text-2xl my-4">Technical Excellence:</h2>

      <div>
        <ul className="list-disc ml-4">
          <li>Tech Stack:</li>
          <li>Web: MERN (MongoDB, Express.js, React.js, Node.js).</li>
          <li>
            Mobile: Flutter (for fast and efficient cross-platform development).
          </li>
          <li>
            Scalable Architecture: Built to adapt and grow with evolving
            business needs.
          </li>
          <li>
            User-Centric Design: Focused on delivering a seamless, intuitive
            user experience.
          </li>
          <li>
            Secure Framework: Multi-layered access control to safeguard
            sensitive data.
          </li>
        </ul>
      </div>

      <div>Impact & Outcome:</div>

      <div>
        <ul className="list-disc ml-4">
          <li>
            Enhanced Operational Efficiency: Unified web and mobile platforms
            streamline workflows, reducing manual processes.
          </li>
          <li>
            Improved Inventory Management: Real-time tracking and automated
            alerts minimize stock discrepancies and optimize usage.
          </li>
          <li>
            Faster Ticket Resolution: Automated escalations and real-time
            notifications ensure timely issue handling.
          </li>
          <li>
            Greater Accessibility: Cross-platform mobile integration empowers
            teams to stay productive on the go.
          </li>
          <li>
            Increased Customer Satisfaction: Streamlined processes, efficient
            communication, and actionable insights lead to faster,
            higher-quality service delivery.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default project3;
