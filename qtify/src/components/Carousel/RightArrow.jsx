import arrowRight from "../../assets/arrow-right.svg";
import styles from "./Carousel.module.css";

const RightArrow = () => {
  return (
    <img
      src={arrowRight}
      alt="Next"
      className={`custom-next ${styles.customNext}`}

    />
  );
};

export default RightArrow;
