import React from 'react';

const TripEdit = ({ user, trip }) => {

    const {id } = user
    const { name, duration } = trip

    const defaultName = name ? name : ""
    const defaultDuration = duration ? duration : ""
    return (
    <>
      <h1>Edit Trip</h1>
      <form action={`user/${user.id}/trips/${trip.id}`} method="post">
        {/* need for the update */}
        <input type='hidden' name='_method' value="patch" /> 
        <input
          type="text"
          placeholder="Trip name"
          required

          defaultValue={defaultName}
          name="trip[name]"
        />
       <input
          type="text"
          placeholder="Duration"
          required
          defaultValue={defaultDuration}
            name="trip[name]"
        />
    
        <button type="submit">Update Trip</button>
      </form>
      <a href="/trips">Back to Trip</a>
    </>
  )
}

export default TripEdit;