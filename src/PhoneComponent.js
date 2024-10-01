import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import './PhoneComponent.css'; // Create a separate CSS file for styling

const PhoneComponent = () => {
  const [showPodcasts, setShowPodcasts] = useState(false);
  const [date, setDate] = useState(new Date()); // State for selected date

  const handleButtonClick = () => {
    setShowPodcasts(!showPodcasts); // Toggle the podcast UI
  };

  return (
    <div className="phone">
      {showPodcasts ? (
        <PodcastUI onClose={handleButtonClick} />
      ) : (
        <div className="calendar">
          <Calendar
            onChange={setDate}
            value={date}
            className="calendar-component"
          />
          <button className="daily-podcasts-button" onClick={handleButtonClick}>
            Daily Podcasts
          </button>
        </div>
      )}
    </div>
  );
};

const PodcastUI = ({ onClose }) => {
  return (
    <div className="podcast-ui">
      <h2>Podcasts</h2>
      <button className="close-button" onClick={onClose}>
        Back to Calendar
      </button>
      <div className="podcast-list">
        <PodcastCard
          title="Podcast Episode 1"
          description="The latest in mental wellness."
        />
        <PodcastCard
          title="Podcast Episode 2"
          description="Tips for handling daily stress."
        />
        <PodcastCard
          title="Podcast Episode 3"
          description="Meditation and mindfulness exercises."
        />
      </div>
    </div>
  );
};

const PodcastCard = ({ title, description }) => {
  return (
    <div className="podcast-card">
      <div className="podcast-icon">🎧</div>
      <div className="podcast-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PhoneComponent;
