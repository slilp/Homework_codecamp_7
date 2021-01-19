import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Container = styled.div`
  width:60%;
  margin:auto;
`;


const DataContents = [
  {
    title:'Toyota',
    img:'https://daxstreet.com/wp-content/uploads/2020/11/Toyota-Camry-Still.jpg',
    desc:'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937',
  },
  {
    title:'Honda',
    img:'https://cnet1.cbsistatic.com/img/7atoLtn_M7wOJwLdIgjrFporXu0=/1200x675/2019/09/18/3ab1190e-f4f8-4531-b4e9-4bd7c1c5bf39/ogi.jpg',
    desc:'The Honda Motor Company, Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, motorcycles, and power equipment.',
  },  {
    title:'BMW',
    img:'https://www.bmw.co.th/content/dam/bmw/marketTH/common/All%20Models/bmw-3series-sedan-2018.jpg',
    desc:'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.',
  },  {
    title:'Mercedes-Benz',
    img:'https://d2qak6y1qy86f6.cloudfront.net/medium/gallery/exterior/18/205/mercedes-benz-c-class-saloon-30604.jpg',
    desc:'Mercedes-Benz is both a German automotive marque and, from late 2019 onwards, a subsidiary – as Mercedes-Benz AG – of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles.',
  },  {
    title:'Lamborghini',
    img:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/Evo/restyle/3_RP---Huracan-Evo-88.jpg',
    desc:'Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant\'Agata Bolognese.',
  },  {
    title:'Ferrari',
    img:'https://www.arabianbusiness.com/public/images/2019/05/29/Ferrari_SF90_Stradale_5.jpg',
    desc:'Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 out of the Alfa Romeo race division as Auto Avio Costruzioni, the company built its first car in 1940.',
  },  {
    title:'Ford',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIvfxYVnyyowvT-WHOaqLQgAsA4qw79FIxw&usqp=CAU',
    desc:'Ford Motor Company, commonly known as Ford, is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903. ',
  },
];


const Corousel = (prop) => {
  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        {DataContents.map((item)=>
        <Item
          title={item.title}
          img={item.img}
          desc={item.desc}
        >
        </Item>)}
      </Carousel>
    </Container>
  );
};

export default Corousel;
