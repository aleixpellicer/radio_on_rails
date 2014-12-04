json.songs @songs do |song|
  	json.id song.id
  	json.name song.name
  	json.user_id song.user.name 
end