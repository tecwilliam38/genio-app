import { COLORS } from "../../constants/theme";


export const styles = {
     container: {
        //  backgroundColor: COLORS.white,
         flex: 1,
         padding: 20,
         justifyContent: "center-between",
         alignItems:"center",
     },
     containerLogo: {
        justifyContent: "center-between",
        alignItems:"center",
     },
     logo: {
         width: 160,
         height: 210,
         padding:3,
         resizeMode: "cover"
     },
     tileText:{
        color:"#fff", 
        fontWeight:"bold", 
        fontSize:25, 
        marginBottom:20,
    },
     containerInput: {
         marginBottom: 15
     },
     input: {
         backgroundColor: COLORS.gray5,
         padding: 10,
         borderRadius: 6
     },
     footer: {
         alignItems: "center",
         justifyContent: "center",
         flexDirection: "row"
     },
     footerLink: {
         color: COLORS.blue
     }
 
 }