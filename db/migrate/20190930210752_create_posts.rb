class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :title
      t.string :description
      t.decimal :latitude, precision:15, scale:10
      t.decimal :longitude, precision:15, scale:10
      t.string :location
      t.integer :likes

      t.timestamps
    end
  end
end
