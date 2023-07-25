import { PlayerBtnProps } from '@/types';

const PlaySongIcon = ({ width = 32, height = 32, onClick }: PlayerBtnProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" onClick={onClick}>
      <g data-name="Layer 2" id="Layer_2">
        <g id="Interface-Solid">
          <g id="interface-solid-multimedia-play-button-1">
            <path
              d="M15,2.5A12.5,12.5,0,1,0,27.5,15,12.51408,12.51408,0,0,0,15,2.5Zm4.96777,14.13965v.001L14.32129,20.582a2.0003,2.0003,0,0,1-3.14453-1.64062V11.05859A2.0003,2.0003,0,0,1,14.32129,9.418l5.64648,3.94141a2,2,0,0,1,0,3.28027Z"
              fill="#959393"
            />
            <path d="M15,0A15,15,0,1,0,30,15,15.01641,15.01641,0,0,0,15,0Zm0,27.5A12.5,12.5,0,1,1,27.5,15,12.51408,12.51408,0,0,1,15,27.5Z" />
            <path d="M19.96777,13.35938,14.32129,9.418a2.0003,2.0003,0,0,0-3.14453,1.64062v7.88282A1.99947,1.99947,0,0,0,14.32129,20.582l5.64648-3.94141v-.001a2,2,0,0,0,0-3.28027Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PlaySongIcon;
