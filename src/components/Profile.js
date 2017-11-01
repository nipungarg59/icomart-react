import React from 'react'

const Profile = ({ user }) => (
  <div>
    { user ?
      <div className="panel panel-default">
        <div className="panel-heading">Profile</div>
        <table className="table table-bordered">
          <tbody>
            {Object.keys(user).map((k, i) => <tr key={i}><th>{k}</th><td>{user[k]}</td></tr>)}
          </tbody>
        </table>
      </div>:
      <h1>Please login to continue.</h1>
    }
  </div>
)

export default Profile