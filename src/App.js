import React, { useState, Fragment } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((preventUserList) => {
      return [
        ...userList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
