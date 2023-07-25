import { PlayerBtnProps } from '@/types';

const NextSongIcon = ({ width = 32, height = 32, onClick }: PlayerBtnProps) => (
  <svg
    enableBackground="new 0 0 32 32"
    height={width}
    version="1.1"
    viewBox="0 0 32 32"
    width={height}
    onClick={onClick}
  >
    <g id="play" />
    <g id="stop" />
    <g id="pause" />
    <g id="replay" />
    <g id="next">
      <g>
        <g>
          <path
            d="M4.561,3.728C4.184,3.328,4,3.45,4,4v24 c0,0.55,0.184,0.672,0.561,0.272l10.816-11.544c0.377-0.4,0.408-1.056,0.031-1.456L4.561,3.728z"
            fill="none"
            stroke="#808080"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <g>
          <path
            d="M17.561,3.728C17.184,3.328,17,3.45,17,4v24 c0,0.55,0.184,0.672,0.561,0.272l10.816-11.544c0.377-0.4,0.408-1.056,0.031-1.456L17.561,3.728z"
            fill="none"
            stroke="#808080"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </g>
    <g id="Layer_8" />
    <g id="search" />
    <g id="list" />
    <g id="love" />
    <g id="menu" />
    <g id="add" />
    <g id="headset" />
    <g id="random" />
    <g id="music" />
    <g id="setting" />
    <g id="Layer_17" />
    <g id="Layer_18" />
    <g id="Layer_19" />
    <g id="Layer_20" />
    <g id="Layer_21" />
    <g id="Layer_22" />
    <g id="Layer_23" />
    <g id="Layer_24" />
    <g id="Layer_25" />
    <g id="Layer_26" />
  </svg>
);

export default NextSongIcon;
