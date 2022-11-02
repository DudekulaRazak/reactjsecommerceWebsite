import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
    height : 60px;
    background-color:rgb(251, 211, 177);
    ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`;

const Menu = styled.button`
    flex:1;
    border: none;
    background-color:rgb(251, 211, 177);
    font-weight: 600;
    cursor: pointer;
    margin: 10px;
    
    &:hover{
        transform: scale(1.1);
        background-color: orange;
    }
`;
const SearchContainer =styled.div`
    border :0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:3px;
    ${mobile({margin:"0px"})}
`;

const Input = styled.input`
    border:none;
    ${mobile({width: "0px"})}
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Center = styled.div`
flex:2;
display: flex;
text-align:center;
${mobile({display:"none"})}
`;
const Logo = styled.h1`
    color:beige;
    font-weight:bold;
    ${mobile({fontSize:"20px",marginLeft:"20px"})}
`;
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({justifyContent:"right"})}
`;
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Merch.</Logo>
            </Left>
            <Center>
                <Menu>HOME</Menu>
                <Menu>MEN</Menu>
                <Menu>WOMEN</Menu>
                <Menu>KIDS</Menu>
                <Menu>FOOTWEAR</Menu>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <SearchContainer>
                    <Input placeholder="search"/>
                    <Search style={{color:"gray", fontsize:16}}></Search>
                </SearchContainer>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined></ShoppingCartOutlined>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar