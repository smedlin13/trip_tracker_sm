import React from 'react';

const UserNew = ({ user }) => {

  const { first_name, last_name } = user 
 
  const defaultFirst_name = first_name ? first_name : ""
  const defaultLast_name = last_name ? last_name : ""
  return (
    <>
      <h1>Create new User</h1>
      <form action="/users" method="post">
        <input
          type="text"
          placeholder="User name"
          required

          defaultValue={defaultFirst_name}
          name="user[first_name]"
        />
        <button type="submit">Add User</button>
      </form>
      <a href="/users">Back to Users</a>
    </>
  )
}

export default UserNew;