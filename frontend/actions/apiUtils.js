export const fetchPhysicians = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  })
}

export const fetchAppointments = (physId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${physId}/appointments`
  })
}
