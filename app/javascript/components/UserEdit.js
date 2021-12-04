import React from 'react';

const UserEdit = ({ user }) => {

    const { first_name, last_name, id } = user

    const defaultFirst_name = first_name ? first_name : ""
    const defaultLast_name = last_name ? last_name : ""
    return (
    <>
      <h1>Edit Users</h1>
      <form action={`/users/${id}`} method="post">
        {/* need for the update */}
        <input type='hidden' name='_method' value="patch" /> 
        <input
          type="text"
          placeholder="User name"
          required
          // these next ones are a must
          defaultValue={defaultFirst_name}
          name="users[first_name]"
        />
        <button type="submit">Update User</button>
      </form>
      <a href="/subs">Back to Users</a>
    </>
  )
}

export default UserEdit;