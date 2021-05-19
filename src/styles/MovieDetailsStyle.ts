import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    title:{
        marginTop:20,
        marginBottom:10,
        color:'green',
        fontWeight:'bold',
        fontSize:22,
    },
    subheader:{
        flex:1,
        flexDirection:'row',
        flexWrap: "wrap",
    },
    overview:{
        marginTop:30,
    },

    backButton:{
        marginTop:20
    }
});

export default styles;