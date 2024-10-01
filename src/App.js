import React from 'react';
import './index.css';
import PhoneComponent from './PhoneComponent';
import CardLayout from './CardComponent';

const App = () => {
  return(
    
    <>
      <nav>
        <h1 className='company-name'>Shine App is now part of your mental health</h1>
        <button className='learn-more'>Learn More</button>
      </nav>
      <div className='hero'>

      </div>
      <div className='about-us'>
        <div className='about-container'>
          <div className='phone'>
            <PhoneComponent />
          </div>
          <div className='icons'>
            <div className='icon-container'>
              <div className='icon'></div>
              <div className='about-text-container'>
                <h1>Daily Meditation</h1>
                <p>Start each day with calm clarity through guided meditation, centering your mind for whatever comes next.</p>
              </div>
            </div>
            <div className='icon-container'>
              <div className='icon'></div>
              <div className='about-text-container'>
                <h1>Self Care Podcasts</h1>
                <p>Unlock personal growth with inspiring self-help podcasts that offer actionable insights and motivation.</p>
              </div>
            </div>
            <div className='icon-container'>
              <div className='icon'></div>
              <div className='about-text-container'>
                <h1>Personalised Suppot</h1>
                <p>Get the support you need, tailored just for you, with customized guidance and care on your journey.</p>
              </div>
            </div>
            <div className='icon-container'>
              <div className='icon'></div>
              <div className='about-text-container'>
                <h1>Virtual Awareness</h1>
                <p>Enhance your mindfulness with virtual tools that cultivate self-awareness and a balanced, present mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cards'>
        <div>
          <CardLayout title="Hello" content="world"/>
          <CardLayout title="Hello" content="world"/>
          <CardLayout title="Hello" content="world"/>
          <CardLayout title="Hello" content="world"/>
          <CardLayout title="Hello" content="world"/>
          <CardLayout title="Hello" content="world"/>
          <CardLayout title="Hello" content="world"/>
        </div>
      </div>
    </>
  )
}
export default App;
