import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import LeftArrow from "../Carousel/LeftArrow";
import RightArrow from "../Carousel/RightArrow";

export default function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [text, setText] = useState("Collapse");
  const [text2, setText2] = useState("Collapse");

  const getCardData = async () => {
    try {
      const response1 = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );

      const response2 = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new"
      );

      if (response1.status && response2.status === 200) {
        setTopAlbums(response1.data);
        setNewAlbums(response2.data);
      }
    } catch (error) {
      console.log("error fetching card data", error);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <>
      <Box sx={{ maxWidth: "96%", mx: "auto", mt: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <p className={styles.title}>Top Albums</p>

          <button
            className={styles.button}
            onClick={() =>
              setText(text === "Collapse" ? "Show All" : "Collapse")
            }
          >
            {text}
          </button>
        </Box>
        {text === "Collapse" ? (
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {topAlbums.length &&
              topAlbums
                .slice(0, 8)
                .map((card) => <CardComponent card={card} />)}
          </Grid>
        ) : (
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center" }}
            className={styles.albumwrapper}
          >
            <Carousel>
              {topAlbums.length &&
                topAlbums.map((card) => (
                  <SwiperSlide>
                    <CardComponent card={card} />
                  </SwiperSlide>
                ))}
            </Carousel>
            <LeftArrow />
            <RightArrow />
          </Grid>
        )}
      </Box>
      <Box sx={{ maxWidth: "96%", mx: "auto", mt: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <p className={styles.title}>New Albums</p>

          <button
            className={styles.button}
            onClick={() =>
              setText2(text2 === "Collapse" ? "Show All" : "Collapse")
            }
          >
            {text2}
          </button>
        </Box>
        {text2 === "Collapse" ? (
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {newAlbums.length &&
              newAlbums
                .slice(0, 8)
                .map((card) => <CardComponent card={card} />)}
          </Grid>
        ) : (
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center" }}
            className={styles.albumwrapper}
          >
            <Carousel>
              {newAlbums.length &&
                newAlbums.map((card) => (
                  <SwiperSlide>
                    <CardComponent card={card} />
                  </SwiperSlide>
                ))}
            </Carousel>
            <LeftArrow />
            <RightArrow />
          </Grid>
        )}
      </Box>
    </>
  );
}
