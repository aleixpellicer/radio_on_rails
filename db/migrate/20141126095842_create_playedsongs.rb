class CreatePlayedsongs < ActiveRecord::Migration
  def change
    create_table :playedsongs do |t|
      t.string :name
      t.string :url
      t.integer :length_seconds
      t.integer :channel_id
      t.integer :user_id
      t.datetime :played_time
      t.timestamps
    end
  end
end
