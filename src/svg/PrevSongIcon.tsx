import { PlayerBtnProps } from '@/types';

const PrevSongIcon = ({ width = 32, height = 32, onClick }: PlayerBtnProps) => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      height={height}
      width={width}
      version="1.1"
      viewBox="0 0 32 32"
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
              d="M27.136,3.736C27.508,3.332,28,3.45,28,4v24 c0,0.55-0.492,0.668-0.864,0.264L16.449,16.736c-0.372-0.405-0.325-1.068,0.047-1.473L27.136,3.736z"
              fill="none"
              stroke="#808080"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <g>
            <path
              d="M14.297,3.736C14.669,3.332,15,3.45,15,4v24 c0,0.55-0.331,0.668-0.703,0.264L3.69,16.736c-0.372-0.405-0.365-1.068,0.007-1.473L14.297,3.736z"
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
};

export default PrevSongIcon;
