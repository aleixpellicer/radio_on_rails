require 'youtube_it'
class SongsController < ApplicationController
  def index
    
  end
  def show
    channel = Channel.find(params[:channel_id])
    currentsong = channel.songs.where.not(played: nil).order(played: :desc).first    
    if currentsong
      current_song_time = Time.now - currentsong.played
      if current_song_time >= currentsong.length_seconds
        get_next_song(channel)
      else
        @time = current_song_time.to_s
        @song = currentsong
      end
    else
      get_next_song(channel)
    end
  end
  def queue
    @channel = Channel.find_by(id: params[:channel_id])
    @songs = @channel.songs.where(played: nil).order(played: :desc)
    #binding.pry
  end
  def create
    if user_signed_in?
      client = YouTubeIt::Client.new
      search = client.videos_by(:query => params[:song]["q"], :maxResults => 1)
      video = search.videos.first
      if video
        @song = Song.create(name: video.title, url: video.unique_id, length_seconds: video.duration, channel_id: params[:channel_id], user_id: current_user.id)
        respond_to :js
      end
    else
      render :js => "window.location.href = ('/users/sign_in');" 
    end
  end

  private

  def get_next_song(channel)
    nextsong = channel.songs.next_songs.first
    if nextsong
      nextsong.update(played: Time.now)
      @song = nextsong
    else
      @error = "No songs to play"
    end
  end

end
