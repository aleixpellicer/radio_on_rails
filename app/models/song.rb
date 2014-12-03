class Song < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user
  attr_accessor :q

  scope :next_songs, -> { where(played: nil).order(id: :asc) }
end
