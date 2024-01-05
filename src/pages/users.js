import RootLayout from "@/components/Layoutes/RootLayout";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the GET API endpoint
    fetch("/api/getUsers")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received data
        setUsers(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(users);
  return (
    <div>
      <div>
        <h2>User List:</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;

Users.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
