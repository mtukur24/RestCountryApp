import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import Searchbar from "./Components/Searchbar";
import Countries from "./Components/Countries";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
import NunitoSans from "./NunitoSans.woff";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    @font-face {
      font-family: 'Nunito Sans';
      src: url(${NunitoSans}) format('woff2'),
    }
    background: ${(props) => props.theme.background};
    padding: 10px 40px 10px 40px; 

    @media screen and (max-width: 25em) {
      padding: 10px 20px 10px 20px; 
    }
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1); 
  margin: -10px -40px 0px -40px;
  padding: 10px 40px 10px 40px; 
  background: ${(props) => props.theme.body};
  height: 40px;

  
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.text};
  align-self: center;

  @media screen and (max-width: 40em) {
      font-size: 15px ;
  }
  
`;

const Button = styled.button`
  border: none;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: 15px;
  margin-right: 5px;
  background: ${(props) => props.theme.body};

  &:hover {
    border-radius: 2mm;
  }
  
  @media screen and (max-width: 40em) {
      font-size: 15px ;
  }

`;

const Lightmode = styled(MdOutlineLightMode)`
  margin-bottom: -2px; 
`;

const Darkmode = styled(MdDarkMode)`
  margin-bottom: -2px; 
`;

const lightTheme = {
  body: 'hsl(0, 0%, 100%)',
  background: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
}

const darkTheme = {
  body: 'hsl(209, 23%, 22%)',
  background: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',

}

function App() {
  const [getCountries, setGetCountries] = useState('');
  const [theme, setTheme] = useState('light');

  const isdarkTheme = theme === 'dark';
  
  const themeToggle = () => {
    setTheme(isdarkTheme ? 'light' : 'dark')
  }

  const [searchCountry, setSearchCountry] = useState('');
  const [filterCountry, setFilterCountry] = useState('nofilter');

  const handleSearchInput = (e) => {
    setSearchCountry(e.target.value);
  }

  const handleFilterSelect = (e) => {
    setFilterCountry(e.target.value);
  }

  return (
    <ThemeProvider theme={isdarkTheme ? darkTheme : lightTheme} >
      <GlobalStyle />
      <Router>
        <MainDiv >
          <H3>Where in the world?</H3>
          <Button onClick={themeToggle}> {isdarkTheme ? <Lightmode />  : <Darkmode />} Theme </Button>
        </MainDiv>
        <Switch>
          <Route exact path="/">
            <Searchbar 
              handleSearchInput={handleSearchInput} 
              handleFilterSelect={handleFilterSelect} 
            />
            <Countries 
              getCountries={getCountries} 
              setGetCountries={setGetCountries} 
              searchCountry={searchCountry} 
              filterCountry={filterCountry}  
            />
          </Route>
          {/* <Route path="/:cca2">
            <CountryDetails 
              getCountries={getCountries} 
            />
          </Route> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;