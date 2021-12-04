import React from 'react';

const TripNew = ({ user, trip }) => {

  const { name, duration } = trip
  const { id, first_name } = user
 
  const defaultName = name ? name : ""
  const defaultDuration = duration ? duration : ""
  return (
    <>
      <h1>Create new trip</h1>
      <form action={`/users/${user.id}/trips`} method="post">
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
            name="trip[Duration]"
        />

        <button type="submit">Add Trip</button>
      </form>
      <a href={`/users`}>Back to Users</a>
    </>
  )
}

export default TripNew;