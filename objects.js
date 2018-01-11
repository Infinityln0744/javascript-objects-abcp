var playlist = {
 artistName: "before all"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({artistName,playlist,songTitle} )
}