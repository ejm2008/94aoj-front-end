const useStyles = () => ({
  centralizar: {
    marginTop: "12%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  h1: {
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "4%",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  imagem: {
    boxSizing: "border-box",
    position: "absolute",
    width: "400px",
    height: "400px",
    marginTop: "10%",
    marginLeft: "16%",
  },
  TextField: {
    borderRadius: "5px",
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "2%",
    marginTop: "2%",
    backgroundColor: "white",
    width: "500px",
    "& label.Mui-focused": {
      color: "#547AA5",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#547AA5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#547AA5",
      },
      "&:hover fieldset": {
        borderColor: "#547AA5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#547AA5",
      },
    },
  },
  botao: {
    marginTop: "10px",
    marginBottom: "6%",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#547AA5",
    width: "500px",
    "&:hover": {
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: "#547AA5",
      color: "white",
      fontWeight: "bolder",
    },
  },
});

export default useStyles;