json.song(@song)
if @song
	json.user(@song.user.name)
end
json.time(@time)
json.error(@error)