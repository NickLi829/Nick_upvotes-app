import React, { useEffect, useState, useRef } from 'react';
import Upvote from './Upvote';
import PlusButton from './PlusButton';
import { useUpvotes } from '../context/UpvotesContext';

interface UpvotesListProps {
  initialCount: number;
  listKey: string; // Key to differentiate lists
}

const UpvotesList: React.FC<UpvotesListProps> = ({ initialCount, listKey }) => {
  const { lists, toggleUpvote, addUpvoteToList, createList } = useUpvotes();
  const [listId, setListId] = useState<string | null>(null);
  const isInitialized = useRef(false);
  
  // Create a new list only once when component mounts
  useEffect(() => {
    if (!isInitialized.current) {
      console.log(`Creating new list for key ${listKey}`);
      const uniqueId = createList(initialCount);
      setListId(uniqueId);
      isInitialized.current = true;
    }
  }, [createList, initialCount, listKey]);

  if (!listId) return <div>Loading...</div>;

  const currentList = lists.find(list => list.id === listId);
  if (!currentList) return <div>List not found</div>;

  return (
    <div style={{ 
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: 'white',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    }}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {currentList.upvotes.map((isSelected, index) => (
            <Upvote
              key={`${listId}-upvote-${index}`}
              isSelected={isSelected}
              onClick={() => toggleUpvote(listId, index)}
            />
          ))}
        </div>
        
        <PlusButton onClick={() => addUpvoteToList(listId)} />
      </div>
    </div>
  );
};

export default UpvotesList; 