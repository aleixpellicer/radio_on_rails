class ChannelsController < ApplicationController
  def index
    
  end
  def show
    @channel = Channel.find_by(id: params[:id])
    @song = @channel.songs.new
    render layout: 'player'
  end
end
