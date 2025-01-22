import React from 'react'
import config from "../../config"


const Newsletter = () => {

    const { socialMedia } = config.contact;

  return (
    <div>
      <div className='flex flex-col '> 

        <div className='my-4'>
        Join our newsletter list
        </div>

        <div>
        Sign up to get the most recent blog articles in your email every week.
        </div>

        <div className='flex'>
            <div>
                <input>
                    name@email.com
                </input>
            </div>
            <div>
            <button>
                Subscribe
            </button>
            </div>

        </div>

        <div className='flex'>
            <div>Share this post to the social media</div>
        </div>

        <div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Follow Us:</h2>
          <ul className="space-y-1">
            {socialMedia.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>
        </div>


      </div>
    </div>
  )
}

export default Newsletter
