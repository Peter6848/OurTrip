class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
    	t.string :first_name
    	t.string :last_name
    	t.string :email
    	t.string :password_digest
    	t.string :phone_number
    	t.string :emergency_contact
    	t.string :emergency_contact_phone_number

      t.string :access_token, null: false
      t.timestamps
    end
  end
end
