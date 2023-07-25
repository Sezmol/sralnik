'use client';

import { useEffect, useRef, useState } from 'react';
import NextSongIcon from '@/svg/NextSongIcon';
import PlaySongIcon from '@/svg/PlaySongIcon';
import StopSongIcon from '@/svg/StopSongIcon';
import PrevSongIcon from '@/svg/PrevSongIcon';
import styles from './styles.module.scss';
import { allMusic } from '@/constants';

const Music = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongName, setCurrentSongName] = useState(allMusic[currentSong]);
  const audio = useRef(new Audio(`/music/${allMusic[currentSong]}.mp3`));
  const progress = useRef<HTMLDivElement>(null);
  const progressWrapper = useRef<HTMLDivElement>(null);
  const volume = useRef<HTMLDivElement>(null);
  const volumeBarWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    audio.current.addEventListener('timeupdate', songProgress);
    audio.current.addEventListener('ended', nextSong);
  }, [audio]);

  const nextSong = () => {
    let nextSongIndex = currentSong + 1;
    if (nextSongIndex > allMusic.length - 1) {
      nextSongIndex = 0;
      setCurrentSong(nextSongIndex);
    }
    playSong(allMusic[nextSongIndex]);
  };

  const prevSong = () => {
    let prevSongIndex = currentSong - 1;
    if (currentSong < 0) {
      prevSongIndex = allMusic.length - 1;
      setCurrentSong(prevSongIndex);
    }
    playSong(allMusic[prevSongIndex]);
  };

  const playMusic = () => {
    audio.current.play();
    setIsPlaying(true);
  };

  const stopMusic = () => {
    audio.current.pause();
    setIsPlaying(false);
  };

  const playSong = (song: string) => {
    setCurrentSong(allMusic.findIndex((value) => value === song));
    audio.current.src = `/music/${song}.mp3`;
    console.log(currentSong, song);
    setCurrentSongName(song);
    playMusic();
  };

  const songProgress = () => {
    const { duration, currentTime } = audio.current;
    const progressPercent = (currentTime / duration) * 100;

    if (progress.current) {
      progress.current.style.width = `${progressPercent}%`;
    }
  };

  const changeSongProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progress.current;
    const progressBarWrapper = progressWrapper.current;

    if (progressBar && progressBarWrapper) {
      const clickX = e.clientX - progressBar.getBoundingClientRect().left;
      const width = progressBarWrapper.clientWidth;

      console.log(clickX, width);

      audio.current.currentTime = (clickX / width) * audio.current.duration;
    }
  };

  const changeVolume = (e: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = volume.current;
    const volumeWrapper = volumeBarWrapper.current;

    if (volumeBar && volumeWrapper) {
      const clickX = e.clientX - volumeBar.getBoundingClientRect().left;
      const newVolume = clickX / volumeWrapper.clientWidth;
      volumeBar.style.width = `${newVolume * 100}%`;
      audio.current.volume = newVolume;
    }
  };

  return (
    <div className={styles.music}>
      <h1>Music</h1>

      <div className={styles.songs}>
        {allMusic.map((song) => (
          <div key={song} className={styles.song}>
            {currentSongName === song && isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                onClick={stopMusic}
                className={styles.stop_song}
                height={40}
                width={40}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                    stroke="gray"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                    stroke="gray"
                    strokeWidth="1.5"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                onClick={() => playSong(song)}
                className={styles.play_song}
                height={40}
                width={40}
                viewBox="0 0 24 24"
                fill="none"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                    stroke="grey"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            )}

            <h3>{song}</h3>
          </div>
        ))}
      </div>

      <div className={styles.player__wrapper}>
        <div className={styles.song_name}>
          <h2>{currentSongName}</h2>
        </div>

        <div className={styles.player_n_progress}>
          <div className={styles.player}>
            <div className={`${styles.prev_song} ${styles.player_btn}`}>
              <PrevSongIcon onClick={prevSong} width={50} height={50} />
            </div>

            <div className={`${styles.play} ${styles.player_btn}`}>
              {isPlaying ? (
                <StopSongIcon onClick={stopMusic} width={50} height={50} />
              ) : (
                <PlaySongIcon onClick={playMusic} width={50} height={50} />
              )}
            </div>

            <div className={`${styles.next_song} ${styles.player_btn}`}>
              <NextSongIcon onClick={nextSong} width={50} height={50} />
            </div>
          </div>

          <div
            ref={progressWrapper}
            onClick={changeSongProgress}
            className={styles.progress__wrapper}
          >
            <div ref={progress} className={styles.progress_bar} />
          </div>
        </div>

        <div className={styles.volume}>
          <svg
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            stroke="#303030"
            height={50}
            width={50}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.9120000000000001"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z"
                stroke="#959393"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <div
            onClick={(e) => changeVolume(e)}
            className={styles.volumeBar_wrapper}
            ref={volumeBarWrapper}
          >
            <div ref={volume} className={styles.volume_bar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
