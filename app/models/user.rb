class User < ApplicationRecord
  validates :fname, presence: true
  validates :lname, presence: true

  has_many :appointments,
    foreign_key: :physician_id,
    class_name: "Appointment"
  
  has_many :doctor_appointments,
    foreign_key: :patient_id,
    class_name: "Appointment"
  
end
