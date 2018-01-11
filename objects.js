var playlist = {
 artistName: "before all"
};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign({},playlist, {artistName:['Slowdow','My Bloody Valentine','Phil Ochs']});
}