import React from 'react';

const TripEdit = ({ trip }) => {

    const { name, duration } = trip

    const defaultName = name ? name : ""
    const defaultDuration = duration ? duration : ""
    return (
    <>
      <h1>Edit Trip</h1>
      <form action={`/trips/${id}`} method="post">
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
          type="integer"
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