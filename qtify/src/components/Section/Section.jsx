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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedNew, setIsCollapsedNew] = useState(false);

  const getCardData = async () => {
    try {
      const response1 = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );

      const response2 = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new",
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
            onClick={() => setIsCollapsed((prev) => !prev)}
            className={styles.button}
          >
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        </Box>
        {isCollapsed ? (
          <Grid container spacing={3} className={styles.albumwrapper}>
            <Carousel>
              {topAlbums.length &&
                topAlbums.map((card) => (
                  <SwiperSlide>
                    <CardComponent key={card.id} card={card} />
                  </SwiperSlide>
                ))}
              <LeftArrow />
              <RightArrow />
            </Carousel>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {topAlbums.length &&
              topAlbums.map((card) => (
                <CardComponent key={card.id} card={card} />
              ))}
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

          <button onClick={() => setIsCollapsedNew((prev) => !prev)} className={styles.button}>
            {isCollapsedNew ? "Show All" : "Collapse"}
          </button>
        </Box>
        {isCollapsedNew ? (
          <Grid container spacing={3} className={styles.albumwrapper}>
            <Carousel>
              {newAlbums.length &&
                newAlbums.map((card) => (
                  <SwiperSlide>
                    <CardComponent key={card.id} card={card} />
                  </SwiperSlide>
                ))}
              <LeftArrow />
              <RightArrow />
            </Carousel>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {newAlbums.length &&
              newAlbums.map((card) => (
                <CardComponent key={card.id} card={card} />
              ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
