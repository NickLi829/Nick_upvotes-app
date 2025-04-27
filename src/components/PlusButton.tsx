import React from 'react';

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: '#F4F6F8',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#343A40',
      }}
    >
      +
    </button>
  );
};

export default PlusButton; 