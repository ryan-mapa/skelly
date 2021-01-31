class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.boolean :physician, null: false, default: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email

      t.timestamps
    end
  end
end
