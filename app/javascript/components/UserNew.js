import React from 'react';

const UserNew = ({ user }) => {

  const { first_name, last_name, phone_number, email, password } = user
 
  const defaultFirst_name = first_name ? first_name : ""
  const defaultLast_name = last_name ? last_name : ""
  const defaultPhone_number =phone_number ? phone_number : ""
  const defaultEmail = email ? email : ""
  const defaultPassword = password ? password : ""
  return (
    <>
      <h1>Create new User</h1>
      <form action="/users" method="post">
        <input
          type="text"
          placeholder="First name"
          required

          defaultValue={defaultFirst_name}
          name="user[first_name]"
        />
        <input
          type="text"
          placeholder="Last name"
          required

          defaultValue={defaultLast_name}
          name="user[last_name]"
        />
        <input
          type="text"
          placeholder="Email"
          required

          defaultValue={defaultEmail}
          name="user[email]"
        />

        <input
          type="text"
          placeholder="Password"
          required

          defaultValue={defaultPassword}
          name="user[password]"
        />

        <input
          type="integer"
          placeholder="Phone Number"
          required
          defaultValue={defaultPhone_number}
          name="user[phone_number]"
        />

        <button type="submit">Add User</button>
      </form>
      <a href="/users">Back to Users</a>
    </>
  )
}

export default UserNew;