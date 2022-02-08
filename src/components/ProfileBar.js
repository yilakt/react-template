const ProfileBar = ({ currentView, supplierProfile, setCurrentView }) => {
  if (!supplierProfile) {
    return (
      <div style={styles.profileBar}>
        <div>
          <p>Profile</p>
        </div>
      </div>
    );
  }

  const getCurrentDivStyle = (type) => {
    if (currentView === type) return styles.optionItemCurrent;
    return styles.optionItem;
  };

  const getCurrentTextStyle = (type) => {
    if (currentView === type) return styles.optionTextCurrent;
    return styles.optionText;
  };

  return (
    <div style={styles.profileBar}>
      <div
        onClick={() => setCurrentView("profile")}
        style={getCurrentDivStyle("profile")}
      >
        <p style={getCurrentTextStyle("profile")}>Profile</p>
      </div>
      <div
        onClick={() => setCurrentView("products")}
        style={getCurrentDivStyle("products")}
      >
        <p style={getCurrentTextStyle("products")}>Available Products</p>
      </div>
      <div
        onClick={() => setCurrentView("ordersManagement")}
        style={getCurrentDivStyle("ordersManagement")}
      >
        <p style={getCurrentTextStyle("ordersManagement")}>Orders</p>
      </div>
      <div
        onClick={() => setCurrentView("ordersConfig")}
        style={getCurrentDivStyle("ordersConfig")}
      >
        <p style={getCurrentTextStyle("ordersConfig")}>Configuration</p>
      </div>
      <div
        onClick={() => setCurrentView("analytics")}
        style={getCurrentDivStyle("analytics")}
      >
        <p style={getCurrentTextStyle("analytics")}>Analytics</p>
      </div>
    </div>
  );
};

const styles = {
  profileBar: {
    height: "5vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
  },
  optionItem: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  optionItemCurrent: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "#635BFF",
  },
  optionText: {
    fontSize: 18,
    padding: 0,
    margin: 0,
  },
  optionTextCurrent: {
    fontSize: 18,
    padding: 0,
    margin: 0,
    color: "white",
  },
};
export default ProfileBar;
