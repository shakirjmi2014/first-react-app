import React, { useRef } from "react";
import { useFetch } from "../customHooks/useFetch";

const UserList = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    isComponentMounted,
    []
  );
  
  console.log("users data", data);

  return (
    
    <div>
      <h3>Users Data from Users Component</h3>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.address.geo.lat}</td>
                <td>{user.address.geo.lng}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
