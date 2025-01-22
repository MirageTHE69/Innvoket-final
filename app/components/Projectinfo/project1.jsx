import React from 'react'

const project1 = () => {
  return (
    <section className="md:w-[70vw] mx-auto my-20 text-gray-400 text-xl satoshi">
        <p>
          Innvoket developed Elite Sports Training, a comprehensive Web and
          Mobile application designed to revolutionize sports training and
          performance. Built on the MERN Stack for web and Flutter for mobile,
          this platform provides a seamless user experience across devices.
        </p>
        <p className="my-4">
          The application is tailored for admins, trainers, and trainees,
          empowering each role with unique tools:
        </p>
        <ul className="list-disc mb-4 md:ml-8">
          <li>
            Trainees access personalized exercise programs, track body metrics,
            and engage with trainers in real time.
          </li>
          <li>
            Trainers manage schedules, utilize a rich exercise library, and
            communicate directly with their trainees.
          </li>
          <li>
            Admins oversee the platform with advanced tools like user
            management, package creation, and analytics dashboards.
          </li>
        </ul>
        <p>
          With its intuitive design, secure architecture, and cross-platform
          compatibility, Elite ensures optimized performance, robust
          communication, and improved sports outcomes.
        </p>
        <h2 className="my-8 text-3xl text-white font-bold">Key Features:</h2>
        <ul className="list-disc md:ml-8">
          <li>
            Mobile App(Flutter)
            <ul className="list-disc ml-4">
              <li>Profile creation for personalized data input.</li>
              <li>
                Video-guided exercise programs with real-time progress tracking.
              </li>
              <li>
                Interactive dashboards to monitor training volume and body
                metrics.
              </li>
              <li>
                Notes, feedback, and direct chat for seamless trainee-trainer
                communication.
              </li>
            </ul>
          </li>
          <li>
            Web Portal(MERN)
            <ul className="list-disc ml-4">
              <li>
                Admin tools for user and package management, payment
                integration, and analytics.
              </li>
              <li>
                Trainer tools for profile creation, custom schedules, exercise
                library access, and trainee communication.
              </li>
              <li>
                Role-based access control for enhanced security and
                functionality.
              </li>
            </ul>
          </li>
        </ul>
      </section>
  )
}

export default project1
