import React from 'react';

const AppointmentsIndex = (props) => {
  const appointments = props.appointments.map((point,idx) => {
    return <li 
      className={`appointment ${Number(idx) % 2 == 0 ? "gray" : ""}`} 
      key={point.id}
    >
      <div>
        {`${point.patient.fname} ${point.patient.lname}`}
      </div>
      <div>
        {`${point.time}`}
      </div>
      <div>
        {`${point.kind}`}
      </div>
    </li>
  })
  console.log(props.physician);

  return (
    <div>
      <ul>
        {appointments}
      </ul>
    </div>
  )
}

export default AppointmentsIndex;