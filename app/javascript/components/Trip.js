import React from 'react';

const Trip = ({ trip }) => {

  // const { id, first_name, } = user
  const { name, duration, created_at, id } = trip
  return (
    <>
      <h3>Trip Name: {name}</h3>
      <h2>Duration: {duration}</h2>
      <h2>Created At: {created_at} Id: {trip.id}</h2>
      <a href="/">Back</a>
      <br />
      {/* <a href={`/users/${trip.id}/`}>See Trip Locations</a> */}
    </>
  )
}

export default Trip;