import styled from "styled-components";

const Maindiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media screen and (max-width: 40em) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
        font-size: 15px;
    }
`;

const Input = styled.input`
    height: 20px;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: none;
    padding: 10px;
    border-radius: 1mm;
    outline: none;
    width: 40%;
    font-size: 12px;

    &::placeholder {
        color: ${(props) => props.theme.text};
    }

    @media screen and (max-width: 40em) {
        width: 90%;
    }
`;

const Select = styled.select`
    border: none;
    border-radius: 1mm;
    outline: none;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    width: 20%;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;

    @media screen and (max-width: 40em) {
        width: 70%;
        height: 35px;
    }

    /* option {
        background: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
    } */
`;

// const Option = styled.option`
//     background: ${(props) => props.theme.body};
//     color: ${(props) => props.theme.text};
// `;

const Searchbar = ({ handleSearchInput, handleFilterSelect }) => {
    return ( 
        <Maindiv>
            <Input 
                type='text'
                placeholder='Search for a Country...'
                onChange={handleSearchInput}
            />
            <Select name="filter" onChange={handleFilterSelect}>
                <option value="nofilter">All</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </Select>
        </Maindiv>
     );
}
 
export default Searchbar;