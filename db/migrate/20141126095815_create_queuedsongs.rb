class CreateQueuedsongs < ActiveRecord::Migration
  def change
    create_table :queuedsongs do |t|
      t.string :name
      t.string :url
      t.integer :length_seconds
      t.integer :channel_id
      t.integer :user_id
      t.timestamps
    end
  end
end