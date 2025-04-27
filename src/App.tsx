import './App.css';
import UpvotesList from './components/UpvotesList';
import { UpvotesProvider } from './context/UpvotesContext';

function App() {
  return (
    <UpvotesProvider>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Upvotes App</h1>
        
        {/* Group with 3 upvotes */}
        <UpvotesList key="list-1" listKey="list-1" initialCount={3} />
        
        {/* Group with 2 upvotes */}
        <UpvotesList key="list-2" listKey="list-2" initialCount={2} />
        
        {/* Group with 5 upvotes */}
        <UpvotesList key="list-3" listKey="list-3" initialCount={5} />
      </div>
    </UpvotesProvider>
  );
}

export default App;
