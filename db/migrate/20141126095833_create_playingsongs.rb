class CreatePlayingsongs < ActiveRecord::Migration
  def change
      create_table :playingsongs do |t|
  		t.string :name
  		t.string :url
  		t.integer :length_seconds
  		t.integer :channel_id
  		t.integer :user_id
      t.datetime :startedplaying_time
      t.timestamps
    end
  end
end
