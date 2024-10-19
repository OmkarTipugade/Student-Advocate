import React, { useState } from "react";

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grievanceType: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const grievanceTypes = [
    "Academic",
    "Administrative",
    "Hostel",
    "Disciplinary",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      grievanceType: "",
      description: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10 sm:max-w-xl md:max-w-2xl">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center sm:text-4xl">
        Grievance Form
      </h2>
      {submitted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          Thank you for submitting your grievance. We will address it promptly.
        </div>
      )}
      <form className="space-y-4 text-base" onSubmit={handleSubmit}>
        <div className="gf-field flex flex-col">
          <label
            htmlFor="name"
            className=" font-medium text-gray-700 text-left"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="gf-field flex flex-col">
          <label
            htmlFor="email"
            className=" font-medium text-gray-700 text-left"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="gf-field flex flex-col">
          <label
            htmlFor="grievanceType"
            className=" font-medium text-gray-700 text-left"
          >
            Grievance Type <span className="text-red-500">*</span>
          </label>
          <select
            id="grievanceType"
            name="grievanceType"
            value={formData.grievanceType}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">--Select Grievance Type--</option>
            {grievanceTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="gf-field flex flex-col">
          <label
            htmlFor="description"
            className=" font-medium text-gray-700 text-left"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe your grievance in detail"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GrievanceForm;
