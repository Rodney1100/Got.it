import React from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  object-fit :cover;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
height: 75%;

`;  
const Icon = styled.div`
  padding-left: 5px;
  padding-bottom: 5px;
`
const Info = styled.div`
  
`

export const Bestselling = ({item}) => {
  return (
    <Container>
      <Image src={item.img} key={item.id} />
      <Info> 
        <Icon> 
          <AddShoppingCartIcon/>
        </Icon>
        <Icon> 
<FavoriteBorderIcon/>
        </Icon>
        <Icon> 
          <SearchOutlinedIcon/>
        </Icon>
      </Info>
    </Container>
)}
