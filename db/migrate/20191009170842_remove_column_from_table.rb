class RemoveColumnFromTable < ActiveRecord::Migration[6.0]
  def change

    remove_column :posts, :likes, :Integer
  end
end
