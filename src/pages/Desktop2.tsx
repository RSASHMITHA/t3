import { FunctionComponent } from "react";
import styles from "./Desktop2.module.css";

const Desktop2: FunctionComponent = () => {
  return (
    <div className={styles.desktop3}>
      <div className={styles.addtocart}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.dessert}>Dessert</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.robotics}>Dinner</b>
        </div>
        <div className={styles.items}>
          <img className={styles.itemsChild} alt="" src="/rectangle-52.svg" />
          <b className={styles.naan}>Naan</b>
          <div className={styles.tablerclock} />
          <div className={styles.min}>10min</div>
          <div className={styles.div}>4.8</div>
          <img
            className={styles.materialSymbolsLightstarOuIcon}
            alt=""
            src="/materialsymbolslightstaroutline1.svg"
          />
          <img className={styles.itemsItem} alt="" src="/group-31.svg" />
        </div>
        <div className={styles.div1}>$25.00</div>
        <div className={styles.addtocartChild} />
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img
            className={styles.favoriteCartIcon}
            alt=""
            src="/favorite-cart@2x.png"
          />
          <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        </div>
        <img
          className={styles.addtocartItem}
          alt=""
          src="/rectangle-58@2x.png"
        />
        <div className={styles.softAndFluffy}>
          Soft and fluffy, our freshly baked naan bread is the perfect
          accompaniment to your favorite curry, offering a taste of authentic
          Indian cuisine delivered right to your doorstep.
        </div>
        <b className={styles.viewSimilar}>View Similar</b>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-60@2x.png"
          />
          <img
            className={styles.groupChild1}
            alt=""
            src="/rectangle-61@2x.png"
          />
          <b className={styles.garlicNaan}>Garlic naan</b>
          <b className={styles.paneerNaan}>Paneer naan</b>
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
          <img className={styles.groupIcon2} alt="" src="/group1.svg" />
          <div className={styles.div2}>4.5</div>
          <div className={styles.div3}>4.9</div>
          <div className={styles.min1}>15min</div>
          <div className={styles.min2}>20min</div>
          <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <div className={styles.div4}>$15.00</div>
          <div className={styles.div5}>$20.00</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
