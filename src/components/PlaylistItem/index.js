// import { useState } from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
// import Player from "../../modules/Player";
import { useDrag, useDrop } from "react-dnd";

const StyledPlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
`;

const StyledThumbnail = styled.div`
  width: 100%;
  height: 150px;
  border: 0.2px solid grey;
`;

const StyledTitle = styled.span`
  font-size: 16px;
  font-weight: 900;
`;

const StyledDescription = styled.span`
  font-size: 16px;
`;

function PlaylistItem({ video, setCurrentVideo, index, moveVideo }) {
  const [, ref] = useDrag({
    type: "MOVIE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "MOVIE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveVideo(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
  return (
    <>
      <StyledPlaylistItem
        ref={(node) => ref(drop(node))}
        onClick={() => setCurrentVideo(video)}
      >
        <StyledThumbnail>
          <img src={video.thumb} alt={video.title} width="100%" height="100%" />
        </StyledThumbnail>
        <div>
          <StyledTitle>{video.title} : </StyledTitle>
          <StyledDescription>
            {video.description.slice(0, 100)}...
          </StyledDescription>
        </div>
      </StyledPlaylistItem>
    </>
  );
}

PlaylistItem.propTypes = {
  video: PropTypes.object,
  setCurrentVideo: PropTypes.func,
  index: PropTypes.number,
  moveVideo: PropTypes.func,
};

export default PlaylistItem;
