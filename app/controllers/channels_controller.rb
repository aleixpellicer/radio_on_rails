class ChannelsController < ApplicationController
  def index
    @channel = Channel.new
  end
  def show
    @channel = Channel.find_by(id: params[:id])
    @song = @channel.songs.new
    render layout: 'player'
  end
end
