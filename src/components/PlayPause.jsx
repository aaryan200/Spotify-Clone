import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';


const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title === song.title ? 
  (
  <BsPauseCircle size={35} className="text-gray-300"
  onClick={handlePause}
  />
  ) : 
  (
  <BsPlayCircle size={35} className="text-gray-300"
  onClick={handlePlay}
  />
  )
);

export default PlayPause;
