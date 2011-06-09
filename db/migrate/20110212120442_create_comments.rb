class CreateComments < ActiveRecord::Migration
  def self.up
    create_table :comments do |t|
      t.text :content
      t.references :post
      t.integer :likes
      t.timestamps
    end
  end

  def self.down
    drop_table :comments
  end
end
