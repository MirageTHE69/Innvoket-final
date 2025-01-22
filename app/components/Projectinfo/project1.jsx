import React from 'react'

const project1 = () => {
  return (
    <div className='satoshi'>
        <div>
        <div>Innvoket developed <b>Elite Sports Training</b>, a comprehensive Web and Mobile application designed to revolutionize sports training and performance. Built on the MERN Stack for web and Flutter for mobile, this platform provides a seamless user experience across devices.</div>
        
        <div className='my-4'> The application is tailored for admins, trainers, and trainees, empowering each role with unique tools:</div>

        <ul className='list-disc ml-4'>
            <li>Trainees access personalized exercise programs, track body metrics, and engage with trainers in real time.</li>

            <li>Trainers manage schedules, utilize a rich exercise library, and communicate directly with their trainees.</li>
            <li>Admins oversee the platform with advanced tools like user management, package creation, and analytics dashboards.</li>

        </ul>

        <div className='my-4'>
        With its intuitive design, secure architecture, and cross-platform compatibility, Elite ensures optimized performance, robust communication, and improved sports outcomes.
        </div>

        <div className='gap-y-4'>
                <div>Key Features:</div>

                <ul className='list-disc ml-2'>
                <li>Mobile App (Flutter):</li>
                </ul>

                <ul className='list-disc ml-6'>
                    <li>Profile creation for personalized data input.</li>
                    <li>Video-guided exercise programs with real-time progress tracking.</li>
                    <li>Interactive dashboards to monitor training volume and body metrics.</li>
                    <li>Notes, feedback, and direct chat for seamless trainee-trainer communication.</li>

                </ul>

                    <ul className='ml-2 list-disc'>
                    <li>Web Portal (MERN):</li>
                    </ul>

                    <ul className='list-disc ml-6'>
                    <li>Admin tools for user and package management, payment integration, and analytics.</li>
                    <li>Trainer tools for profile creation, custom schedules, exercise library access, and trainee communication.</li>
                    <li>Role-based access control for enhanced security and functionality.</li>
                    </ul>
         </div>

        </div>
    </div>
  )
}

export default project1
