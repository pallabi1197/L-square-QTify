import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Song from "../../assets/song.png";
import MusicPlayer from "../../assets/musicplayer.png";
import styles from "./Footer.module.css";
import LinearDeterminate from "./ProgressBar";

export default function BasicGrid() {
  return (
    <Box className={styles.container}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <img src={Song} alt="song" width={177} height={82} />
        </Grid>
        <Grid size={10} sx={{ textAlign: "center" }}>
          <img src={MusicPlayer} alt="musicplayer" width={48} height={48} />
          <LinearDeterminate />
        </Grid>
      </Grid>
    </Box>
  );
}
