import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Topdiv = styled.div`
    margin-top: 50px;
`;

const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 50px;
    color: ${(props) => props.theme.text};

    @media screen and (max-width: 45em) {
        grid-template-columns: 1fr;
        width: fit-content;
    }
`;

const Backarrow = styled(MdOutlineArrowBackIosNew)`
  margin-bottom: -2px; 
`;

const Button = styled.button`
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: none;
    width: auto;
    padding: 10px;
`;


const H4 = styled.h4`
    padding: 0 0 0 15px;
    margin-top: 10px;
    
    @media screen and (max-width: 45em) {
        margin-top: 30px;
    }
`;

const Details = styled.div`
    padding: 0 0 0 10px;
    font-size: 12px;
    margin: 5px;
`;

const DetailsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    line-height: 20px;

    @media screen and (max-width: 45em) {
        grid-template-columns: 1fr;
    }   
`;

const FooterDiv = styled.div`
    margin-top: 40px;

    @media screen and (max-width: 45em) {
        margin-top: 30px;
    }
`;

const Span1 = styled.span`
    padding: 0 0 0 15px;
    font-size: 12px;
`;

const Span2 = styled.button`
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: none;
    font-size: 10px;
    box-shadow: 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.4); 
    margin: 5px;
    padding: 8px
`;

const CountryDetails = ({ getCountries }) => {
    const { cca2 } = useParams();
    const country = getCountries.find(item => item.cca2 === cca2);

    return ( 
        <>
            <Topdiv>
                <Link to='/' >
                    <Button><Backarrow /> Back</Button>
                </Link>
            </Topdiv>
            <MainDiv>
                <img src={country.flags.png} alt='flag' />
                <div>
                    <H4>{country.name.common}</H4>
                    <DetailsDiv>
                        <div>
                            <Details><b>Population: </b>{country.population}</Details>
                            <Details><b>Region: </b>{country.region}</Details>
                            <Details><b>Sub Region: </b>{country.subregion}</Details>
                        </div>
                        <div>
                            <Details><b>Capital: </b>{country.capital}</Details>
                            <Details><b>Top Level Domain: </b>{country.tld}</Details>
                            <Details><b>Time Zone: </b>{country.timezones}</Details>
                        </div>
                    </DetailsDiv>
                    <FooterDiv>
                        {country.borders && 
                            <><Span1><b>Border Countries:</b> </Span1> {country.borders.map((name) => <Span2>{name} </Span2>)}</>}
                    </FooterDiv>
                </div>
            </MainDiv>
        </>
     );
}
 
export default CountryDetails;