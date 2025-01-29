
const useStyles = () => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "2rem",
  },
  heroSection: {
    marginBottom: "2rem",
  },
  title: {
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#333",
  },
  subtitle: {
    marginBottom: "2rem",
    color: "#555",
  },
  menuButton: {
    backgroundColor: "#ff5722",
    color: "white",
    padding: "0.8rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "8px",
    '&:hover': {
      backgroundColor: "#e64a19",
    },
  },
  featuresSection: {
    padding: "2rem 0",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "800px",
  },
  featuresTitle: {
    fontWeight: 600,
    marginBottom: "1.5rem",
  },
  featuresList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  featureItem: {
    textAlign: "left",
  },
  footerSection: {
    marginTop: "auto",
    padding: "1rem 0",
    borderTop: "1px solid #ddd",
    color: "#888",
  },
  menuSection: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  menuTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  menuItem: {
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  headerButton: {
    backgroundColor: "#FFD700",
    color: "#000",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#FFC107",
    },
  },
});

export default useStyles;
