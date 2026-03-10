import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Song from "../../assets/song.png";
import Play from "../../assets/play.png";
import MusicPlayer from "../../assets/musicplayer.png";
import styles from "./Footer.module.css";
import LinearDeterminate from "./ProgressBar";
import { useState } from "react";

export default function BasicGrid() {
  const [play, setPlay] = useState(false);
  return (
    <Box className={styles.container}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <img src={Song} alt="song" width={177} height={82} />
        </Grid>

        <Grid size={10} sx={{ textAlign: "center" }}>
          {play ? (
            <button onClick={() => setPlay(prev => !prev)} className={styles.button}>
            <img
              src={Play}
              alt="play"
              width={48}
              height={48}
              
            /></button>
          ) : (
            <button onClick={() => setPlay(prev => !prev)} className={styles.button}>
            <img src={MusicPlayer} alt="musicplayer" width={48} height={48} />
            </button>
          )}
          <LinearDeterminate play={play}/>
        </Grid>
      </Grid>
    </Box>
  );
}
