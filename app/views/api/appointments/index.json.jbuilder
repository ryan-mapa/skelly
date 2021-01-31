@appointments.each do |point|
  json.set! point.id do
    json.extract! point, :id, :physician_id, :patient_id, :time, :kind
    json.patient User.find(point.patient_id)
  end 
end 