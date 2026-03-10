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
      const [topRes, newRes, songRes, genreRes] = await Promise.all([
        axios.get("https://qtify-backend.labs.crio.do/albums/top"),
        axios.get("https://qtify-backend.labs.crio.do/albums/new"),
        axios.get("https://qtify-backend.labs.crio.do/songs"),
        axios.get("https://qtify-backend.labs.crio.do/genres"),
      ]);

      setTopAlbums(topRes.data);
      setNewAlbums(newRes.data);
      setShowSongs(songRes.data);
      setShowGenres(genreRes.data.data);
    } catch (error) {
      console.log("error fetching card data", error);
    }
  };

  const filteredSongs =
    selectedGenre === "all"
      ? showSongs
      : showSongs.filter((song) => song.genre?.key === selectedGenre);

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <>
      {/* Top Albums */}
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
              {topAlbums.map((card) => (
                <SwiperSlide key={card.id}>
                  <CardComponent card={card} label="100 Follows" />
                </SwiperSlide>
              ))}
              <LeftArrow />
              <RightArrow />
            </Carousel>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {topAlbums.map((card) => (
              <CardComponent key={card.id} card={card} label="100 Follows" />
            ))}
          </Grid>
        )}
      </Box>

      {/* New Albums */}
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
              {newAlbums.map((card) => (
                <SwiperSlide key={card.id}>
                  <CardComponent card={card} label="100 Follows" />
                </SwiperSlide>
              ))}
              <LeftArrow />
              <RightArrow />
            </Carousel>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {newAlbums.map((card) => (
              <CardComponent key={card.id} card={card} label="100 Follows" />
            ))}
          </Grid>
        )}
      </Box>

      {/* Songs Section */}
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
            {filteredSongs.map((card) => (
              <SwiperSlide key={card.id}>
                <CardComponent card={card} label="100 Likes" />
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