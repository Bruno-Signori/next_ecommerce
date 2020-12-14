import MyFooter from "../components/Footer";
import MyHeader from "../components/Header";
import ThemeContainer from "../contexts/theme/ThemeContainer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer> 
         <MyHeader/>
            <Component {...pageProps} />
         <MyFooter /> 
    </ThemeContainer>
  )
}

export default MyApp;
