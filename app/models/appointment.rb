class Appointment < ApplicationRecord
  validates :physician_id, presence: true
  validates :patient_id, presence: true

  belongs_to :physician,
    class_name: :User

  belongs_to :patient,
    class_name: :User
end
