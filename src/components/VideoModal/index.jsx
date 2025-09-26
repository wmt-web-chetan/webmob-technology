// components/VideoModal/index.jsx (Improved)
"use client";
import { useEffect, useCallback } from "react";

const VideoModal = ({ isOpen, onClose, videoId }) => {
  // Handle escape key press
  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Add/remove event listeners and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return (
    <div 
      className={`
        fixed inset-0 bg-black/80 flex items-center justify-center z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'}
      `}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Video testimonial"
    >
      <div className={`
        relative w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw] 3xl:w-[65vw]
        max-w-6xl aspect-video bg-black rounded-xl lg:rounded-2xl overflow-hidden
        shadow-2xl transform transition-all duration-300 ease-out
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}>
        {/* Close button */}
        <button
          onClick={onClose}
          className={`
            absolute top-3 right-3 sm:top-4 sm:right-4 z-10 
            w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
            bg-black/50 hover:bg-black/70 rounded-full 
            flex items-center justify-center
            text-white hover:text-gray-300 
            transition-all duration-200 hover:scale-110
            backdrop-blur-sm
          `}
          aria-label="Close video"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Loading placeholder */}
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
        </div>
        
        {/* YouTube iframe */}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Video testimonial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="relative z-10"
        />
      </div>

      {/* Instructions text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
        <p className="hidden sm:block">Press ESC or click outside to close</p>
        <p className="sm:hidden">Tap outside to close</p>
      </div>
    </div>
  );
};

export default VideoModal;