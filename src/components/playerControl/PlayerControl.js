import {
  ButtonRefresh,
  ButtonVolume,
  Progressbar,
  ProgressbarDone,
  ProgressbarDoneMobile,
  ProgressbarMobile,
  WrapperControl,
} from './style';
import VolumeX from '../../assets/icons/VolumeX';
import VolumeOn from '../../assets/icons/VolumeOn';
import Refresh from '../../assets/icons/Refresh';

function CustomProgressbar({ done, mobile, seekToStart }) {
  return mobile ? (
    <ProgressbarMobile>
      <ProgressbarDoneMobile
        style={{ width: `${(done.playedSeconds / done.loadedSeconds) * 100}%` }}
      ></ProgressbarDoneMobile>
    </ProgressbarMobile>
  ) : (
    <Progressbar
      onClick={(e) => {
        seekToStart((e.clientX - done.loadedSeconds) / 100 - 1);
      }}
    >
      <ProgressbarDone style={{ width: `${(done.playedSeconds / done.loadedSeconds) * 100}%` }}></ProgressbarDone>
    </Progressbar>
  );
}

const PlayerControl = ({ setVolume, volume, progress, seekToStart }) => {
  return (
    <WrapperControl>
      {window?.innerWidth > 900 ? (
        <>
          <ButtonRefresh
            onClick={() => {
              seekToStart(0);
            }}
          >
            <Refresh />
          </ButtonRefresh>
          <ButtonVolume onClick={() => setVolume(!volume)}>{volume ? <VolumeX /> : <VolumeOn />}</ButtonVolume>
          <CustomProgressbar seekToStart={seekToStart} done={progress} />
        </>
      ) : (
        <CustomProgressbar mobile done={progress} />
      )}
    </WrapperControl>
  );
};

export default PlayerControl;
