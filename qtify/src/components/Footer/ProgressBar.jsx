import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "50%", margin: "1rem auto", display:"flex", justifyContent:"center", alignItems:'center', gap:'6px'}}>
      <Typography variant="caption" color="#fff">
        0:38
      </Typography>
      <LinearProgress variant="determinate" value={progress} color="success" sx={{width:'100%'}} />
      <Typography variant="caption" color="#fff">
        3:38
      </Typography>
    </Box>
  );
}
