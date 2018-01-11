var playlist = {
 artistName: "before all"
};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist,{artistName:['before all']});
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
}