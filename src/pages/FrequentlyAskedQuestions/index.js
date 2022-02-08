import Spinner from "react-spinkit";

import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";

import { Theme } from '../../Theme/Helpers';
import { Colors } from '../../Theme/Colors';
import { FAQuestions } from "../../util/constants";

const FrequentlyAskedQuestions = () => {

if(!FAQuestions) {
  return(
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Spinner name="folding-cube" color="#635BFF" />
    </div>
  )
}  

return (
    <div style={styles.container}>
      <HeaderBar showLogout={false}/>
      <h1>Frequently Asked Questions</h1>
        <div style={styles.faqContainer}>
          <p style={styles.titleText}>For farmers </p>
          {FAQuestions.map(elem => {
            return(
              <div style={styles.questionContainer}>
                <p style={styles.boldText}>{elem.question}</p>
                <p style={styles.answerTextStyles}>{elem.answer}</p>
              </div>
            )
          })}
        </div>
        <Footer />
    </div>
  )
}

const styles = {
  container: {
    ...Theme.container,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  faqContainer: {
    marginTop: '10vh',
  },
  questionContainer: {
    marginTop: '5vh',
  },
  answerTextStyles: {
    color: Colors.lightBlue,
    lineHeight: 1.5,
  }
}
export default FrequentlyAskedQuestions;