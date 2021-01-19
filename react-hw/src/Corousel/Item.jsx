import styled from 'styled-components';

const ItemCard = styled.div`
justify-content: center;
padding-bottom:1rem;
width: 100%;
color: black;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
margin: 0 15px;
height:450px;
border-bottom: 0.5px solid grey;
`;

const ImgCard = styled.img`
    width:100%;
    height:200px;
`;

const BtnCard = styled.button`
    padding-left:1.5rem;
    padding-right:1.5rem;
    font-size:1.5rem;
    background-color:salmon;
    color:white;
    &:hover{
        cursor:pointer;
        background-color:orange;
    }
`

const Content = styled.div`
    height:200px;
    overflow-y: scroll;
    margin-bottom:1rem;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Item =(props)=>{
    return (
        <ItemCard>
            <div>
                <ImgCard src={props.img}></ImgCard>
            </div>
            <Content>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </Content>
            <div>
                <BtnCard>Buy</BtnCard>
            </div>
            
        </ItemCard>
    )
}

export default Item;