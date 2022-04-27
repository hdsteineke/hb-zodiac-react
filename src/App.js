import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { zodiacs } from './data.js';
import './App.css';

{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      
      <Header text='Alchemy Astrology'/>

     
      <Main zodiacs={zodiacs} />


      
      <Footer text='Copyright Alchemy Codelab 2022'/>
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
