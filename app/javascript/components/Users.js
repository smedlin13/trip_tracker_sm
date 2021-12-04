import React from 'react';

const Users = ({ users }) => {

  return (
    <>
  
      <h1>Users Page</h1>
      
      <a href="/users/new">Add New User</a>
      { users.map( (user) => (
        <>
        <h3>{user.first_name} {user.last_name} Id: {user.id}</h3>
        <a href={`/users/${user.id}`}>Show</a>
        <a href={`/users/${user.id}/edit`}>Edit</a>
        <a href={`/users/${user.id}`} data-method='delete'>
          Delete
        </a>
      </>
      )) }
    </>
  )
}

export default Users;