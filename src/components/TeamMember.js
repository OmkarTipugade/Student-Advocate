import React from "react";
import { FaLinkedin } from "react-icons/fa";

const TeamMember = (props) => {
  return (
    <div class="bg-green-800 rounded-lg shadow-lg p-6 w-full md:w-72">
      <img
        class="rounded-full w-36 h-36 mx-auto mb-4"
        src={props.imgUrl}
        alt={props.name}
      />
      <h2 class="text-center text-xl font-semibold text-white">{props.name}</h2>
      <p class="text-center text-gray-400">{props.role}</p>
      <div class="flex justify-center mt-4 space-x-4 text-xl">
        <a href={props.link} class="text-blue-500">
          <FaLinkedin/>
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
