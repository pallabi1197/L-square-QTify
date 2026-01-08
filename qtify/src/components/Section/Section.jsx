import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../Card/Card";
import styles from "./Section.module.css";

export default function Section() {
  const [cardData, setCardData] = useState([]);

  const getCardData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );

      if (response.status === 200) {
        console.log(response.data);
        setCardData(response.data);
      }
    } catch (error) {
      console.log("error fetching card data", error);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <Box sx={{ maxWidth: "96%", mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <p className={styles.title}>Top Albums</p>
        <button className={styles.button}>Collapse</button>
      </Box>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {cardData.length &&
          cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <CardComponent card={card} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
