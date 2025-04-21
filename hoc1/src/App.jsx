import React from 'react';
import './App.css';
import UserList from './userlist';
import withLoading from './withloading';
const UserListWithLoading = withLoading(UserList);
function App() {
  const users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'c' },
  ];
 
  const isLoading = true;
  return (
    <div className="App">
      <h1>My HOC Demo</h1>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}
export default App;