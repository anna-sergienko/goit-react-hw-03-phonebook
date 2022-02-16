import styled from "@emotion/styled";


export const Form = styled.form`
width: 600px;
display: flex;
flex-direction: column;

`;

export const FormLabel = styled.label`
font-family: sans-serif;
font-size: 25px;

`;


export const FormInput = styled.input`
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


export const AddButton = styled.button`
width: 90px;
height: 30px;
border: none;
border-radius: 5px;
background-color: #5F9EA0;
&:hover{
background-color: #008B8B;
transition: all 200ms cubic-bezier(0.4, 0, 0.3, 1);
}
`;
