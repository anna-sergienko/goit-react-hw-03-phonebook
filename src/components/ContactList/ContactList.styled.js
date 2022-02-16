import styled from "@emotion/styled";

export const ContactsList = styled.ul`
list-style: none;
padding: 0;
`;


export const ContactsItem = styled.li`
margin: 0 0 15px 15px;

`;


export const ContactsName = styled.p`
font-weight: 500;
font-size: 18px;
font-family: sans-serif;
`;


export const DelContactBtn = styled.button`
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
