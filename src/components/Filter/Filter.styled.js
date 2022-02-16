import styled from "@emotion/styled";


export const FilterLabel = styled.label`

font-family: sans-serif;
font-size: 25px;
`;


export const FilterInput = styled.input`
display: block;
width: 300px;
height: 30px;
margin-bottom: 20px;
margin-top: 20px;
border: 1px solid #bdbdbd;
border-radius: 5px;
background-color: #ccc;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:focus{
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
}
`;
