class ChannelController < ApplicationController
  def index
    
  end
  def show
    @queuedsongs = Queuedsong.new
  end
end
