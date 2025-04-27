import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

// Define types
interface UpvoteList {
  id: string;
  upvotes: boolean[];
}

interface UpvotesContextType {
  lists: UpvoteList[];
  toggleUpvote: (listId: string, upvoteIndex: number) => void;
  addUpvoteToList: (listId: string) => void;
  createList: (initialUpvotesCount: number) => string;
}

// Create context
const UpvotesContext = createContext<UpvotesContextType | undefined>(undefined);

// Storage key
const STORAGE_KEY = 'upvotes-state';

// Provider component
interface UpvotesProviderProps {
  children: ReactNode;
}

export const UpvotesProvider: React.FC<UpvotesProviderProps> = ({ children }) => {
  const [lists, setLists] = useState<UpvoteList[]>(() => {
    // Load from localStorage on initial render
    try {
      const savedState = localStorage.getItem(STORAGE_KEY);
      return savedState ? JSON.parse(savedState) : [];
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return [];
    }
  });
  
  // Counter to ensure unique IDs even with rapid creation
  const idCounter = useRef(0);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [lists]);

  // Toggle upvote state for all upvotes in the list
  const toggleUpvote = (listId: string, upvoteIndex: number) => {
    console.log(`Toggling upvote in list ${listId}, index ${upvoteIndex}`);
    
    setLists(prevLists => {
      return prevLists.map(list => {
        if (list.id === listId) {
          // Get the current upvote state to determine what to toggle to
          const currentUpvoteState = list.upvotes[upvoteIndex];
          // Set all upvotes in this list to the opposite of the clicked upvote's current state
          return { 
            ...list, 
            upvotes: list.upvotes.map(() => !currentUpvoteState) 
          };
        }
        return list;
      });
    });
  };

  // Add a new upvote to a list
  const addUpvoteToList = (listId: string) => {
    console.log(`Adding upvote to list ${listId}`);
    
    setLists(prevLists => {
      return prevLists.map(list => {
        if (list.id === listId) {
          // When adding a new upvote, it should match the current state of other upvotes in the list
          const currentState = list.upvotes.length > 0 ? list.upvotes[0] : false;
          return { 
            ...list, 
            upvotes: [...list.upvotes, currentState] 
          };
        }
        return list;
      });
    });
  };

  // Create a new list with initial upvotes
  const createList = (initialUpvotesCount: number): string => {
    const timestamp = Date.now();
    const uniqueCounter = idCounter.current++;
    const newListId = `list-${timestamp}-${uniqueCounter}`;
    
    console.log(`Creating new list with ID ${newListId} and ${initialUpvotesCount} upvotes`);
    
    const newList: UpvoteList = {
      id: newListId,
      upvotes: Array(initialUpvotesCount).fill(false)
    };
    
    setLists(prevLists => [...prevLists, newList]);
    return newListId;
  };

  const contextValue = {
    lists,
    toggleUpvote,
    addUpvoteToList,
    createList
  };

  return (
    <UpvotesContext.Provider value={contextValue}>
      {children}
    </UpvotesContext.Provider>
  );
};

// Custom hook to use the context
export const useUpvotes = (): UpvotesContextType => {
  const context = useContext(UpvotesContext);
  if (context === undefined) {
    throw new Error('useUpvotes must be used within an UpvotesProvider');
  }
  return context;
}; 