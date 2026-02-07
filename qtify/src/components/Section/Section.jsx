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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [showSongs, setShowSongs] = useState([]);
  const [showGenres, setShowGenres] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsedNew, setIsCollapsedNew] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const getCardData = async () => {
    try {
      const response1 = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top",
      );

      const response2 = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new",
      );

      const response3 = await axios.get(
        "https://qtify-backend.labs.crio.do/songs",
      );

      const response4 = await axios.get(
        "https://qtify-backend.labs.crio.do/genres",
      );

      if (
        response1.status &&
        response2.status &&
        response3.status &&
        response4.status === 200
      ) {
        setTopAlbums(response1.data);
        setNewAlbums(response2.data);
        setShowSongs(response3.data);
        setShowGenres(response4.data.data);
      }
    } catch (error) {
      console.log("error fetching card data", error);
    }
  };

  console.log("song genre:", showSongs[0]?.genre?.key);

  const filteredSongs =
    selectedGenre === "all"
      ? showSongs
      : showSongs.filter((song) => song.genre?.key === selectedGenre);

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <>
      <Box className={styles.container}>
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
            {!isCollapsed ? "Show All" : "Collapse"}
          </button>
        </Box>
        {!isCollapsed ? (
          <Grid container spacing={3} className={styles.albumwrapper}>
            <Carousel>
              {topAlbums.length &&
                topAlbums.map((card) => (
                  <SwiperSlide>
                    <CardComponent
                      key={card.id}
                      card={card}
                      label="100 Follows"
                    />
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
                <CardComponent key={card.id} card={card} label="100 Follows" />
              ))}
          </Grid>
        )}
      </Box>
      <Box className={styles.container1}>
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
            onClick={() => setIsCollapsedNew((prev) => !prev)}
            className={styles.button}
          >
            {!isCollapsedNew ? "Show All" : "Collapse"}
          </button>
        </Box>
        {!isCollapsedNew ? (
          <Grid container spacing={3} className={styles.albumwrapper}>
            <Carousel>
              {newAlbums.length &&
                newAlbums.map((card) => (
                  <SwiperSlide>
                    <CardComponent
                      key={card.id}
                      card={card}
                      label="100 Follows"
                    />
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
                <CardComponent key={card.id} card={card} label="100 Follows" />
              ))}
          </Grid>
        )}
      </Box>
      <Box className={styles.container1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <p className={styles.title}>Songs</p>
        </Box>

        <Box>
          <Tabs
            sx={{ mb: 6 }}
            value={selectedGenre}
            onChange={(e, v) => setSelectedGenre(v)}
            textColor="inherit"
            slotProps={{
              indicator: {
                sx: { backgroundColor: "#34c94b" },
              },
            }}
          >
            <Tab label="All" value="all" className={styles.tab} />

            {showGenres.map((genre) => (
              <Tab
                key={genre.key}
                label={genre.label}
                value={genre.key}
                className={styles.tab}
              />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3} className={styles.albumwrapper}>
          <Carousel>
            {filteredSongs.length &&
              filteredSongs.map((card) => (
                <SwiperSlide>
                  <CardComponent key={card.id} card={card} label="100 Likes" />
                </SwiperSlide>
              ))}
            <LeftArrow />
            <RightArrow />
          </Carousel>
        </Grid>
      </Box>

    
    </>
  );
}
