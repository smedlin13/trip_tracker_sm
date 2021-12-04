import React from 'react';

const User = ({ user }) => {

  const { id, first_name, last_name, email, password, phone_number, created_at } = user
  return (
    <>
      <h3>{first_name} {last_name}</h3>
      <h2>Email: {email} Phone Number: {phone_number} </h2>
      <h2>Password: {password} Created At: {created_at} Id: {id}</h2>
      <a href="/">Back</a>
      <br />
      <a href={`/users/${id}/`}>See User Trips</a>
    </>
  )
}

export default User;