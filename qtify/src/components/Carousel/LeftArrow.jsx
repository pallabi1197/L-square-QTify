import arrowLeft from "../../assets/arrow-left.svg";
import styles from "./Carousel.module.css";

const LeftArrow = () => {
  return (
    <img
      src={arrowLeft}
      alt="Previous"
      className={`custom-prev ${styles.customPrev}`}

    />
  );
};

export default LeftArrow;
