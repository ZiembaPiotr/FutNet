import {StyleSheet} from "react-native";

export const userAuthenticationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    option: {
        margin: 15,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center"
    },
    optionText: {
        fontSize: 24,
        padding: 20,
    },
    optionMarked: {
        fontSize: 26,
        padding: 20,
        color: "#E83134",
        textDecorationLine: "underline",
        textDecorationColor: "#E83134",
    },
    formInput: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        fontSize: 24,
        padding: 10,
    },
    formInputMarked: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 2,
        borderColor: "#E83134",
        borderRadius: 5,
        fontSize: 24,
        padding: 10,
    },
    button: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#E83134",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center"
    },
    buttonText: {
        padding: 10,
        fontSize: 26,
        color: "white",
        fontWeight: "bold"
    }
})