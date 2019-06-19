class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :location
      t.string :age
      t.text :bio
      t.string :image

      t.timestamps
    end
  end
end
