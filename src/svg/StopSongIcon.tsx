import { PlayerBtnProps } from '@/types';

const StopSongIcon = ({ width = 32, height = 32, onClick }: PlayerBtnProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" onClick={onClick}>
      <title />
      <g data-name="Layer 2" id="Layer_2">
        <g id="Interface-Solid">
          <g id="interface-solid-multimedia-pause-button-1">
            <path
              d="M15,2.5A12.5,12.5,0,1,0,27.5,15,12.51408,12.51408,0,0,0,15,2.5ZM13.30371,18.92871a1.25,1.25,0,0,1-2.5,0V11.07129a1.25,1.25,0,0,1,2.5,0Zm5.89258,0a1.25,1.25,0,0,1-2.5,0V11.07129a1.25,1.25,0,0,1,2.5,0Z"
              fill="#959393"
            />
            <path d="M15,0A15,15,0,1,0,30,15,15.01672,15.01672,0,0,0,15,0Zm0,27.5A12.5,12.5,0,1,1,27.5,15,12.51408,12.51408,0,0,1,15,27.5Z" />
            <path d="M12.05371,9.82129a1.24991,1.24991,0,0,0-1.25,1.25v7.85742a1.25,1.25,0,0,0,2.5,0V11.07129A1.24991,1.24991,0,0,0,12.05371,9.82129Z" />
            <path d="M17.94629,9.82129a1.24991,1.24991,0,0,0-1.25,1.25v7.85742a1.25,1.25,0,0,0,2.5,0V11.07129A1.24991,1.24991,0,0,0,17.94629,9.82129Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default StopSongIcon;
