import React from "react";
import Carousel from "react-elastic-carousel";
import ItemContent from './ItemContent';

const Corousel = (prop) => {

  const slides = [
    {
      title: "Ferrari",
      description: "Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg",
    },
    {
      title: "Aston martin",
      description: "",
      image: "",
    },
    {
      title: "Toyota",
      description: "",
      image: "",
    },
    {
      title: "Honda",
      description: "",
      image: "",
    },
    {
      title: "Lamborghini",
      description: "",
      image: "",
    },
  ];

  return (
    <>
      <Carousel itemsToShow={3} >
        <ItemContent>1</ItemContent>
        <ItemContent>2</ItemContent>
        <ItemContent>3</ItemContent>
        <ItemContent>4</ItemContent>
        <ItemContent>5</ItemContent>
        <ItemContent>6</ItemContent>
      </Carousel>
    </>
  );
};

export default Corousel;
