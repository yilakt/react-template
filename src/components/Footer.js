import { Colors } from '../Theme/Colors';
import { useHistory } from "react-router-dom";
import { isMobile } from 'react-device-detect';

const  Footer = ({homePage}) => {
    const history = useHistory();

    return(
        <div style={homePage ? styles.homeContainer : styles.container}>
            <div style={styles.leftContainer}>
                <div>
                    <p style={styles.textStyleExtraPaddingLeft}>Have a question? Reach us at</p>
                    <p 
                    onClick={()=> window.location.href = "mailto:hello@farmsthatship.com"}
                    style={styles.textStyleExtraPaddingLeftWithCursor}>hello@farmsthatship.com</p>
                </div>
            </div>
            <div style={styles.rightContainer}>
                <div 
                onClick={() => history.push('/faq')}
                style={styles.textContainer}>
                    <p style={styles.boldText}>Frequently Asked Questions (FAQ)</p>
                </div>
            </div>
        </div>
    )
}

const styles = { 
    container: {
        width:'100vw',
        height: '15vh',
        backgroundColor: Colors.lightBlue,
        display: 'flex',
        flexDirection:'row',
        marginLeft: '-5vw',
        marginTop: '35vh',
    },
    homeContainer: {
        width:'100vw',
        height: '15vh',
        backgroundColor: Colors.lightBlue,
        display: 'flex',
        flexDirection:'row',
        marginTop: '35vh',
    },
    leftContainer: {
        width: isMobile? '90vw':'55vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        cursor:'pointer',
        padding:0,
    },
    textContainerNoCursor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding:0,
    },
    textStylePaddingRight: {
        paddingRight: 10,
        color: 'white',
    },
    textStylePaddingLeft: {
        paddingLeft: 10,
        color: 'white',
    },
    textStyleExtraPaddingLeft: {
        paddingLeft: '5vw',
        color: 'white',
    },
    textStyleExtraPaddingLeftWithCursor: {
        paddingLeft: '5vw',
        color: 'white',
        cursor: 'pointer',
    },
    boldText: {
        fontWeight: 'bold',
        color: 'white',
    },
    rightContainer: {
        width: '45vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems:'center',
        paddingRight: '5vw',
    }
};

export default Footer;