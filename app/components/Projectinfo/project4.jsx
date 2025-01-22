import React from "react";

const project4 = () => {
  return (
    <div className="md:w-[70vw] mx-auto my-20 text-gray-400 text-xl satoshi flex-col space-y-4">
      <h2 className="text-white text-2xl">Web Portal Features:</h2>
      <div>Academy Administration:</div>

      <ul className="list-disc ml-4">
        <li>
          Centralized management for academy-level operations, including student
          invitations and tier assignments.
        </li>
        <li>Secure registration and login with role-based credentials.</li>
      </ul>

      <div>Student Dashboard:</div>

      <ul className="list-disc ml-4">
        <li>Access to assigned tasks, goals, and progress tracking.</li>
        <li>
          Interactive tools like chess puzzles, games, and quizzes to reinforce
          learning.
        </li>
        <li>
          Interactive tools like chess puzzles, games, and quizzes to reinforce
          learning.
        </li>
      </ul>

      <div>Coach Dashboard:</div>

      <ul className="list-disc ml-4">
        <li>
          Task assignment for students, including quizzes, homework, and weekly
          goals.
        </li>
        <li>Batch-specific performance analytics with actionable insights.</li>
        <li>
          Attendance tracking and delivery of monthly puzzle packets for
          structured practice.
        </li>
      </ul>

      <div>Tournament & Camp Management:</div>

      <ul className="list-disc ml-4">
        <li>
          Multiple Tournament Formats: Swiss, Round Robin, Knockout, and League
          systems.
        </li>
        <li>
          Real-time game tracking, scoring, and automated standings updates
          after each round
        </li>
      </ul>

      <div>Learn and Train Module:</div>

      <ul className="list-disc ml-4">
        <li>
          Tiered video content and practice drills tailored to student skill
          levels.
        </li>
        <li>
          Exercises focused on openings, tactics, and endgames with progress
          tracking.
        </li>
        <li>
          Move Analysis supported by a chess engine for accuracy and performance
          improvement.
        </li>
      </ul>

      <div>Mobile App (Flutter):</div>
      <div>Cross-Platform Accessibility:</div>

      <ul className="list-disc ml-4">
        <li>
          Built with Flutter for smooth, consistent performance on iOS and
          Android devices.
        </li>
      </ul>

      <div>Key Mobile Features:</div>

      <ul className="list-disc ml-4">
        <li>
          Optimized dashboards for students and coaches to manage tasks and
          goals on the go.
        </li>
        <li>
          Push Notifications for task assignments, tournament updates, and
          progress alerts.
        </li>
        <li>
          Access to puzzles, games, and practice drills anytime, anywhere.
        </li>
        <li>
          Offline Mode ensures uninterrupted learning without internet
          connectivity.
        </li>
      </ul>

      <div>Technical Excellence:</div>

      <ul className="list-disc ml-4">
        <li>Tech Stack:</li>
        <li>Web: MERN (MongoDB, Express.js, React.js, Node.js).</li>
        <li>
          Mobile: Flutter for high-performance cross-platform development.
        </li>
        <li>Key Highlights:</li>
        <li>
          Mobile Responsiveness: Optimized for all devices, ensuring seamless
          functionality.
        </li>
        <li>
          Secure Framework: Multi-layered role-based access control to protect
          user data.
        </li>
        <li>
          Scalable Architecture: Designed to support multiple academies and
          growing student bases.
        </li>
      </ul>
    </div>
  );
};

export default project4;
