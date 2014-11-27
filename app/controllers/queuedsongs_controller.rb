require 'youtube_it'
class QueuedsongsController < ApplicationController
  def index
    
  end
  def create
    client = YouTubeIt::Client.new
    # @channel = Channel.find_by(id: params[:client])
    search = client.videos_by(:query => params[:queuedsong]["q"], :maxResults => 1)
    @video = search.videos.first

    if @video
      @song = Queuedsong.create(name: @video.title, url: @video.unique_id, length_seconds: @video.duration, channel_id: 3, user_id: 1)
      respond_to :js
    end


  end
end
