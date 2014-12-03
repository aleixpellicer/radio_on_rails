require 'youtube_it'
class SongsController < ApplicationController
  def index
    
  end
  def show
    @channel = Channel.find(params[:channel_id])
    @currentsong = @channel.songs.where.not(played: nil).order(played: :desc).limit(1)
    
    if @currentsong.empty?
      puts "="*50
      puts "currentsong empty"
      puts "="*50
      @nextsong = @channel.songs.where(played: nil).order(id: :asc).limit(1)
      
      if(@nextsong.empty?)
        puts "="*50
        puts "nextsong empty"
        puts "="*50
        @error = "No songs to play"
      else
        @nextsong = @nextsong.take
        @nextsong.played = Time.now
        @nextsong.save
        @song = @nextsong
      end
    else
      @currentsong = @currentsong.take
      if (Time.now - @currentsong.played) >= @currentsong.length_seconds
        @nextsong = @channel.songs.where(played: nil).order(id: :asc).limit(1)
        if @nextsong.empty?
          puts "="*50
          puts "nextsong empty"
          puts "="*50
          @error = "No songs to play"
        else
          puts "="*50
          puts "nextsong not empty"
          puts "="*50
          @nextsong = @nextsong.take
          @nextsong.played = Time.now
          @nextsong.save
          @song = @nextsong
        end
      else
        puts "="*50
        puts "currentsong playing #{@currentsong.name}"
        @time = (Time.now - @currentsong.played).to_s
        puts "time: #{@time} >= #{@currentsong.length_seconds}"
        puts "="*50
        @song = @currentsong
      end
    end

  end
  def queue
    @channel = Channel.find_by(id: params[:channel_id])
    @songs = @channel.songs.where(played: nil).order(played: :desc)
  end
  def create
    client = YouTubeIt::Client.new
    # @channel = Channel.find_by(id: params[:client])
    search = client.videos_by(:query => params[:song]["q"], :maxResults => 1)
    @video = search.videos.first

    if @video
      @song = Song.create(name: @video.title, url: @video.unique_id, length_seconds: @video.duration, channel_id: params[:channel_id], user_id: 1)
      respond_to :js
    end


  end
end
