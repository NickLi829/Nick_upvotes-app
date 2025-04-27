import React from 'react';

interface UpvoteProps {
  isSelected: boolean;
  onClick: () => void;
}

const Upvote: React.FC<UpvoteProps> = ({ isSelected, onClick }) => {
  // Styles based on selection state
  const backgroundColor = isSelected ? '#E5E8FD' : '#F4F6F8';
  const arrowColor = isSelected ? '#253CF2' : '#343A40';

  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor,
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '5px',
      }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 4L6 10H10V20H14V10H18L12 4Z"
          fill={arrowColor} 
        />
      </svg>
    </div>
  );
};

export default Upvote; 