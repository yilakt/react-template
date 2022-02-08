import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

import { signout } from '../util/firebaseMethods';
import { Theme, Fonts } from '../Theme/Helpers';

const HeaderBar = ({ showLogout, addPadding, checkout, productCount }) => {
  const history = useHistory();

  return (
    <div
      style={addPadding ? styles.paddedContainer : styles.container}
    >
      <div style={styles.headerStyle}>
        <div
          onClick={() => history.push("/")}
          style={styles.logoContainer}
        >
          <img
            src="../../logo_long_text.png"
            style={{ width: 175, height: 50, paddingRight: 5 }}
          />
        </div>
      </div>
      {showLogout
      && <Button
        style={{ backgroundColor: "#252525" }}
        onClick={() => signout()}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Logout
      </Button>
      }
      {checkout
      && <div style={styles.horizontalContainer}>
          <p style={{...Fonts.subHeaderText, margin:0, paddingRight:5}}>Checkout</p>
          <p style={{...Fonts.subHeaderText, margin:0, padding:0}}>{productCount 
          ? `(${productCount} ${productCount == 1 ? 'item': 'items'})` 
          : `(0 items)` }
          </p>
        </div>
      }
    </div>
  );
};

const styles = {
  container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      width: '100%'
  },
  paddedContainer: {
    ...Theme.container,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%'
  },
  horizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
}

export default HeaderBar;
