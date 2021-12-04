import React from 'react';

const Trips = ({ user, trips }) => {

  const { first_name, last_name, id } = user
  const url = `/users/${id}/trips`
  return (
    <>
  
      <h1>All of {user.first_name} Trips</h1>
      
      <a href={`${url}/new`}>Add a New Trip </a>
      { trips.map( (trip) => (
        <>
        <h3>{user.first_name} {user.last_name} Id: {user.id}</h3>
        <a href={`${url}/${user.id}`}>Show</a>
        <a href={`${url}/${user.id}edit`}>Edit</a>
        <a href={`${url}/${user.id}`} data-method='delete'>
          Delete
        </a>
      </>
      )) }
    </>
  )
}

export default Trips;