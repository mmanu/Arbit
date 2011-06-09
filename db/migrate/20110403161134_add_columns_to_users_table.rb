class AddColumnsToUsersTable < ActiveRecord::Migration
  def self.up
    add_column :users, :last_name, :string
    rename_column :users, :name, :first_name
    add_column :users, :security_question, :string
    add_column :users, :security_answer, :string
    rename_column :users, :city, :location
    add_column :users, :login_name, :string
  end

  def self.down
    remove_column :users, :last_name, :string
    rename_column :users, :first_name, :name
    remove_column :users, :security_question
    remove_column :users, :security_answer
    rename_column :users, :location, :city
    remove_column :users, :login_name, :string
  end
  
end
