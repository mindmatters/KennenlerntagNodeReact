import React from 'react';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Users and Posts
      </header>
      <main className="App-main">
        <div>
          Listing User
        </div>
        <div>
          <UserList />
        </div>
      </main>
    </div>
  );
}

export default App;
