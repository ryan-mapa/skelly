import React from 'react';

const AppointmentsIndex = (props) => {
  const appointments = props.appointments.map((appointment,idx) => {
    return <li 
      className={`appointment ${Number(idx) % 2 == 0 ? "gray" : ""}`} 
      key={appointment.id}
    >
      <div>
        {`${appointment.patient.fname} ${appointment.patient.lname}`}
      </div>
      <div>
        {`${new Date(appointment.time).toTimeString()}`}
      </div>
      <div>
        {`${appointment.kind}`}
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