import React from 'react';

const Trips = ({ user, trips }) => {

  const { first_name, last_name, id } = user
  const { name, duration } = trips
  const url = `/users/${user.id}/trips`
  return (
    <>
  
      <h1>All of {user.first_name} Trips</h1>
      
      <a href={`${url}/new`}>Add a New Trip </a>
      { trips.map( (trip) => (
        <>
        <h3>{trip.name} Duration: {trip.duration} Id: {trip.id}</h3>
        <a href={`${url}/${trip.id}`}>Show</a>
        <a href={`${url}`}>Edit</a>
        <a href={`${url}/${trip.id}`} data-method='delete'>
          Delete
        </a>
      </>
      )) }
    </>
  )
}

export default Trips;