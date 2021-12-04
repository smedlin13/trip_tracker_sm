import React from 'react';

const TripNew = ({ trip }) => {

  const { name, duration } = trip
 
  const defaultName = name ? name : ""
  const defaultDuration = duration ? duration : ""
  return (
    <>
      <h1>Create new trip</h1>
      <form action="/users" method="post">
        <input
          type="text"
          placeholder="Trip name"
          required

          defaultValue={defaultName}
          name="trip[name]"
        />
        <input
          type="integer"
          placeholder="Duration"
          required
          defaultValue={defaultDuration}
            name="trip[name]"
        />

        <button type="submit">Add Trip</button>
      </form>
      <a href="/trips">Back to Users</a>
    </>
  )
}

export default TripNew;