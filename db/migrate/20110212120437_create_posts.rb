class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.text :content
      t.string :title
      t.references :user
      t.integer :likes
      t.integer :rating
      t.boolean :published, :default => false
      t.timestamps
    end
  end

  def self.down
    drop_table :posts
  end
end
