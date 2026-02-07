import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./Accordion.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AccordionUsage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://qtify-backend.labs.crio.do/faq");

    try {
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log("error fetching card data", error);
    }
  };

  console.log(data, "data");

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box className={styles.container}>
        <p className={styles.title}>FAQs</p>
        {data.map((item) => (
          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionsummary}
              expandIcon={<ExpandMoreIcon  sx={{color:" #34c94b", fontSize:'40px'}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className={styles.typography}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordiondetails}>{item.answer}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
