var playlist = {
 Phil Ochs: "before all"
};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist, {artistName:['Phil Ochs']});
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
}