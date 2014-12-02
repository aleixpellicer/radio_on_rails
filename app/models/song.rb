class Song < ActiveRecord::Base
  belongs_to :channel
  belongs_to :user
  attr_accessor :q
end
