@physicians.each do |phys|
  json.set! phys.id do
    json.extract! phys, :id, :fname, :lname, :email, :physician
  end 
end 