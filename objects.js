var playlist = {
 artistName: "before all"
};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist, {artistNam:['Phil Ochs']});
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
}