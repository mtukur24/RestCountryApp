import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Maindiv = styled.div`
    margin-top: 30px;
`;

const CountryDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;

    @media screen and (max-width: 60em) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 40em) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 25em) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

const Cdiv = styled.div`
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    box-shadow: 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
    height: 300px;
`;

const Img = styled.img`
    width: 100%;
    height: 50%;
`;

const H4 = styled.h4`
    padding: 0 0 0 15px;
    margin-top: 10px;
    
`;

const Details = styled.div`
    padding: 0 0 0 10px;
    font-size: 12px;
    margin: 5px;
`;

const CountrtLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    /* color: ${(props) => props.theme.color}; */
`;
 

const Countries = ({ getCountries, setGetCountries, searchCountry, filterCountry }) => {
    const [isError, setisError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if(!response.ok) {
                    throw Error('Could not fetch data from this resource');
                }
                return response.json();
            })
            .then(data => {
                setGetCountries(data);
                setisError(null);
                console.log(getCountries);
            })
            .catch(err => {
                setisError(err.message);
            })
    }, []);


    return ( 
        <Maindiv>
            {isError && <div>{isError}</div> }
            {getCountries && 
                <CountryDiv>
                    {getCountries.filter((country) => {
                        if (searchCountry === '' && filterCountry === 'nofilter') {
                            return country 
                        } 
                        if (filterCountry === 'nofilter' && country.name.common.toLowerCase().includes(searchCountry.toLowerCase())) {
                            return country
                        }
                        if (country.region.toLowerCase() === filterCountry && country.name.common.toLowerCase().includes(searchCountry.toLowerCase())) {
                            return country
                        }
                        return false
                    }).map((country)=> {
                        return (
                            <CountrtLink to={`/${country.cca3}`}> 
                                <Cdiv key={country.cca3}>
                                    <Img src={country.flags.png} alt='flag' /> 
                                    <H4>{country.name.common}</H4>
                                    <Details><b>Population: </b>{country.population}</Details>
                                    <Details><b>Region: </b>{country.region}</Details>
                                    <Details><b>Capital: </b>{country.capital}</Details>
                                </Cdiv>
                            </CountrtLink>
                            )
                        })} 
                </CountryDiv>
            }
        </Maindiv>

     );
}
 
export default Countries;