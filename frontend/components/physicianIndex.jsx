import React from 'react';

const PhysicianIndex = (props) => {
  const physicians = props.physicians.map(doc => {
    return <li key={doc.id}
      onClick={() => {
        props.updateSelected(doc.id)
        props.fetchAppointments(doc.id)
      }}
    >
      {`${doc.lname}, ${doc.fname}`}
    </li>
  })

  return (
    <div>
      <h2>Physicians</h2>
      <ul>
        {physicians}
      </ul>
    </div>
  )
}

export default PhysicianIndex;