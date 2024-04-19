import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop1}>
      <div className={styles.firstpage}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.dessert}>Dessert</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.robotics}>Dinner</b>
        </div>
        <div className={styles.theFastestFood}>
          The Fastest Food Ordering App
        </div>
        <div className={styles.firstpageChild} onClick={onRectangleClick} />
        <div className={styles.getStarted}>Get Started</div>
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <i className={styles.orderWithEase}>
        Order with ease and savor the flavor!
      </i>
    </div>
  );
};

export default Desktop;
