class Queuedsong < ActiveRecord::Base
	belongs_to :channel
  attr_accessor :q

end
