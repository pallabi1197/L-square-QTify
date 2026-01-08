import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

export default function CardComponent({ card }) {
  return (
    <>
      <Card className={styles.card}>
        <CardActionArea className={styles.cardactionarea}>
          <CardMedia
            className={styles.image}
            component="img"
            image={card.image}
            
          />
          <CardContent className={styles.cardcontent}>
            <Chip className={styles.chip} label="100 Follows" />
          </CardContent>
        </CardActionArea>
        <p className={styles.title}>{card.title}</p>
      </Card>
    </>
  );
}
