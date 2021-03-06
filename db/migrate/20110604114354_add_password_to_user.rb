class AddPasswordToUser < ActiveRecord::Migration
  
  def self.up
    add_column :users, :hashed_password, :string
    add_column :users, :salt, :string
    add_column :users, :email, :string
  end

  def self.down
    remove_column :users, :hashed_password
    remove_column :users, :salt
    add_column :users, :email
  end
  
end
