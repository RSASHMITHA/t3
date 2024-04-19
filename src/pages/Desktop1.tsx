import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onFavoriteCartIconClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className={styles.desktop2}>
      <div className={styles.home}>
        <div className={styles.menu}>Menu</div>
        <div className={styles.menuParent}>
          <div className={styles.menu1}>
            <div className={styles.searchHere}>Search here</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.header}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.all}>ALL</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <b className={styles.breakfast}>Breakfast</b>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <b className={styles.lunch}>Lunch</b>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <b className={styles.treats}>Treats</b>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild2} />
          <b className={styles.dessert}>Dessert</b>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild3} />
          <b className={styles.robotics}>Dinner</b>
        </div>
        <div className={styles.dishes}>
          <div className={styles.dishesChild} onClick={onRectangleClick} />
          <div className={styles.dishesItem} />
          <div className={styles.dishesInner} />
          <div className={styles.dishesChild1} />
          <div className={styles.dishesChild2} />
          <div className={styles.dishesChild3} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-58@2x.png"
          />
          <img
            className={styles.dishesChild4}
            alt=""
            src="/rectangle-60@2x.png"
          />
          <img
            className={styles.dishesChild5}
            alt=""
            src="/rectangle-62@2x.png"
          />
          <img
            className={styles.dishesChild6}
            alt=""
            src="/rectangle-63@2x.png"
          />
          <img
            className={styles.dishesChild7}
            alt=""
            src="/rectangle-61@2x.png"
          />
          <img
            className={styles.dishesChild8}
            alt=""
            src="/rectangle-59@2x.png"
          />
          <b className={styles.naan}>Naan</b>
          <b className={styles.butterChicken}>Butter Chicken</b>
          <b className={styles.dalTadka}>Dal Tadka</b>
          <b className={styles.ketoPancakes}>Keto pancakes</b>
          <b className={styles.alooTikki}>Aloo tikki</b>
          <b className={styles.iceCreamSundae}>Ice cream sundae</b>
          <img
            className={styles.tablerclockIcon}
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className={styles.tablerclockIcon1}
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className={styles.tablerclockIcon2}
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className={styles.tablerclockIcon3}
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className={styles.tablerclockIcon4}
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className={styles.tablerclockIcon5}
            alt=""
            src="/tablerclock.svg"
          />
          <div className={styles.min}>10min</div>
          <div className={styles.div}>4.8</div>
          <div className={styles.div1}>4.5</div>
          <div className={styles.div2}>4.7</div>
          <div className={styles.div3}>5.0</div>
          <div className={styles.div4}>4.9</div>
          <div className={styles.div5}>5.0</div>
          <div className={styles.min1}>15min</div>
          <div className={styles.min2}>10min</div>
          <div className={styles.min3}>15min</div>
          <div className={styles.min4}>20min</div>
          <div className={styles.min5}>30min</div>
          <img
            className={styles.materialSymbolsLightstarOuIcon}
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className={styles.materialSymbolsLightstarOuIcon1}
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className={styles.materialSymbolsLightstarOuIcon2}
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className={styles.materialSymbolsLightstarOuIcon3}
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className={styles.materialSymbolsLightstarOuIcon4}
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className={styles.materialSymbolsLightstarOuIcon5}
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <div className={styles.div6}>$25.00</div>
          <div className={styles.div7}>$15.00</div>
          <div className={styles.div8}>$10.00</div>
          <div className={styles.div9}>$35.00</div>
          <div className={styles.div10}>$20.00</div>
          <div className={styles.div11}>$45.00</div>
        </div>
        <div className={styles.homeChild} />
        <div className={styles.footer}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img
            className={styles.favoriteCartIcon}
            alt=""
            src="/favorite-cart@2x.png"
            onClick={onFavoriteCartIconClick}
          />
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
