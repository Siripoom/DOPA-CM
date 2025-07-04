import React from "react";
import logo from "../../assets/logo.svg";

const OrgCard = ({ person, onClick, className = "" }) => {
  if (!person) return null;

  return (
    <div
      onClick={() => onClick(person)}
      className={`w-52 flex flex-col items-center p-4 rounded-xl shadow-lg text-white text-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}
    >
      <img
        src={person.photo || logo}
        alt={person.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-white/60 mb-3"
      />
      <h3 className="font-bold text-sm leading-tight">
        {person.title || person.name}
      </h3>
      {person.title && person.name && (
        <p className="text-xs opacity-80 mt-1">{person.name}</p>
      )}
    </div>
  );
};

export default OrgCard;
