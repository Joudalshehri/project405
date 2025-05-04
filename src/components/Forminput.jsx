
import React from 'react';

// Reusable input component with customizable props
const FormInput = ({
  label,         // Label text for the input
  type = 'text', // Input type (default is text)
  name,          // Input name (used for form data and HTML 'id')
  value,         // Current value of the input field
  onChange,      // Function to handle value changes
  required = false, // Whether the field is required
  placeholder    // Optional placeholder text
}) => {
  return (
    <div className="form-field mb-4" dir="rtl"> {/* Container for RTL layout */}
      {/* Label for the input field */}
      <label htmlFor={name} className="block mb-2 text-sm font-semibold text-gray-800">
        {label}
      </label>

      {/* Input element */}
      <input
        id={name} // Connects label to input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type={type} // Type of input (text, date, time, etc.)
        name={name} // Name used in form data
        value={value} // Current input value
        onChange={onChange} // Called when value changes
        required={required} // Field required or not
        placeholder={placeholder} // Optional hint text inside the field
      />
    </div>
  );
};

export default FormInput;
