class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :name
      t.string :url
      t.integer :length_seconds
      t.integer :channel_id
      t.integer :user_id
      t.datetime :played, default:nil
      t.timestamps
    end
  end
end
