import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-24">
      <span className="w-3 h-3 bg-gray-800 rounded-full animate-dot delay-0"></span>
      <span className="w-3 h-3 bg-gray-800 rounded-full animate-dot delay-200"></span>
      <span className="w-3 h-3 bg-gray-800 rounded-full animate-dot delay-400"></span>

      <style jsx>{`
        @keyframes dot {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }
        .animate-dot {
          animation: dot 1.2s infinite;
        }
        .delay-0 {
          animation-delay: 0s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
