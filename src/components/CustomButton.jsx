import React from 'react';

// Reusable button component
function CustomButton({ type = "button", onClick, children }) {
  return (
    // Button element with customizable type and click handler
    <button type={type} onClick={onClick}>
      {children} {/* Button label/content passed as children */}
    </button>
  );
}

export default CustomButton;

