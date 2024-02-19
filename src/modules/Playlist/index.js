import { useState } from "react";
import mediaJSON from "../../mediaData.json";
import { styled } from "styled-components";
import Player from "../../modules/Player";
import PlaylistItem from "../../components/PlaylistItem";

const PlaylistWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 10px;
  flex-grow: 1;
  height: 90vh;
`;

function Playlist() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState(mediaJSON.categories[0].videos);

  const moveVideo = (fromIndex, toIndex) => {
    const updatedVideos = [...videoList];
    const [movedMovie] = updatedVideos.splice(fromIndex, 1);
    updatedVideos.splice(toIndex, 0, movedMovie);
    setVideoList(updatedVideos);
  };

  return (
    <>
      {!currentVideo ? (
        <PlaylistWrapper>
          {videoList.map((video, index) => {
            return (
              <PlaylistItem
                key={index}
                video={video}
                setCurrentVideo={setCurrentVideo}
                index={index}
                moveVideo={moveVideo}
              />
            );
          })}
        </PlaylistWrapper>
      ) : (
        <Player video={currentVideo} setCurrentVideo={setCurrentVideo} />
      )}
    </>
  );
}

export default Playlist;
