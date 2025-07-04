// src/components/OrganizationChart/OrgCard.js (Example file path)
import React from "react";
import logo from "../../assets/logo.svg"; // Example path for a default logo

const OrgCard = ({ person, onClick, className }) => {
  // Check if the card should be interactive
  const isClickable = !!onClick && person && person.name && person.title;

  // Define base and conditional classes
  const baseClasses =
    "w-52 flex flex-col items-center p-4 gap-4 rounded-xl shadow-lg text-white text-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";
  const interactiveClasses = isClickable
    ? "cursor-pointer hover:shadow-xl hover:scale-105"
    : "cursor-default opacity-80";

  // Determine the name and photo to display
  const displayPhoto = person?.photo || logo;

  const handleClick = () => {
    // Only call the onClick handler if the card is clickable
    if (isClickable) {
      onClick(person);
    }
  };

  return (
    <div
      className={`${baseClasses} ${className} ${interactiveClasses}`}
      onClick={handleClick}
    >
      <img
        src={displayPhoto}
        alt={person?.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-white/60"
      />
      <div className="ml-4 flex-1">
        <p className="font-bold text-sm leading-tight">{person?.name}</p>
        <p className="text-sm opacity-90 leading-tight">{person.title}</p>
      </div>
    </div>
  );
};

export default OrgCard;
