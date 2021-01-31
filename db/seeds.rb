# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Appointment.destroy_all

julius = User.create!({fname: "Julius", lname: "Hibbert", physician: true, email: "hibbert@noteablehealth.com"})
krieger = User.create!({fname: "Algemop", lname: "Krieger", physician: true, email: "krieger@noteablehealth.com"})
nick = User.create!({fname: "Nick", lname: "Riviera", physician: true, email: "riviera@noteablehealth.com"})

archer = User.create!({fname: "Sterling", lname: "Archer", physician: false, email: ""})
cyril = User.create!({fname: "Cyril", lname: "Figis", physician: false, email: ""})
ray = User.create!({fname: "Ray", lname: "Gilette", physician: false, email: ""})
lana = User.create!({fname: "Lana", lname: "Kane", physician: false, email: ""})
pam = User.create!({fname: "Pam", lname: "Poovey", physician: false, email: ""})

Appointment.create!({physician_id: krieger.id, patient_id: archer.id, time: Time.now, kind: "New Patient"})
Appointment.create!({physician_id: krieger.id, patient_id: cyril.id, time: Time.now + 100000, kind: "Follow-up"})
Appointment.create!({physician_id: krieger.id, patient_id: ray.id, time: Time.now + 200000, kind: "Follow-up"})
Appointment.create!({physician_id: krieger.id, patient_id: lana.id, time: Time.now + 300000, kind: "New Patient"})
Appointment.create!({physician_id: krieger.id, patient_id: pam.id, time: Time.now + 400000, kind: "New Patient"})