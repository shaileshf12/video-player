import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const PlayerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledPlayer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  gap: 20px;
`;

const StyledVideo = styled.video`
  border: 0.2px solid grey;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  font-size: 20px;
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledTitle = styled.span`
  font-size: 16px;
  font-weight: 900;
`;

const StyledDescription = styled.div`
  font-size: 16px;
  text-align: left;
`;

function Player({ video, setCurrentVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsPlaying(true);
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <PlayerWrapper>
      <StyledPlayer>
        <StyledButton onClick={() => setCurrentVideo(null)}>
          Go to Playlist
        </StyledButton>
        <StyledVideo
          width="100%"
          height="100%"
          controls
          ref={videoRef}
          onClick={() => handleVideoClick()}
        >
          <source src={video.sources[0]} type="video/mp4" />
        </StyledVideo>
        <StyledTitle>
          {video.title} | {video.subtitle}
        </StyledTitle>
        <StyledDescription>{video.description}</StyledDescription>
      </StyledPlayer>
    </PlayerWrapper>
  );
}

Player.propTypes = {
  video: PropTypes.object,
  setCurrentVideo: PropTypes.func,
};

export default Player;
