class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.integer :physician_id, null: false
      t.integer :patient_id, null: false
      t.datetime :time
      t.string :kind

      t.timestamps
    end
  end
end
