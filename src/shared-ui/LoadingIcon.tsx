import React from "react";

const LoadingIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIcon;
