const useStyles = () => ({
    margem: {
        marginTop: "35px",
        marginRight: "35px",
    },
    botao: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#547AA5",
        width: "120px",
        "&:hover": {
            backgroundColor: "#547AA5",
            color: "white",
            fontWeight: "bolder",
        },
        textTransform: "none",
    },
});

export default useStyles;