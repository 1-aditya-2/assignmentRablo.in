import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Show = () =>{
    const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch individual employee details based on the ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setEmployee(data));
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className='card1'>
      <h2><center>Employee Details</center></h2><br/>
      {/* Display all details for the specific employee */}
      <p><b>ID:</b> {employee.id}</p>
      <p><b>Name:</b> {employee.name}</p>
      <p><b>Username:</b> {employee.username}</p>
      <p><b>Email:</b> {employee.email}</p>
      <p><b>Phone:</b> {employee.phone}</p>
      <p><b>Address:</b> {employee.address.street}, {employee.address.suite}, {employee.address.city}, {employee.address.zipcode}</p>
      <p><b>Website:</b> {employee.website}</p>
      <p><b>Company:</b> {employee.company.name} ({employee.company.catchPhrase})</p>
    </div>
  );
};

export default Show;