import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import React from 'react';

const imageData = [
  {src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frauantiques.com%2Fproducts%2Fenglish-skeleton-clock-by-smiths-of-clerkenwell&psig=AOvVaw2ffOAikLHfPca2aIP9I3qI&ust=1624740529444000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCIjy5aLUs_ECFQAAAAAdAAAAABAE",
  thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.liveauctioneers.com%2Fnews%2Fcolumns-and-international%2Fmiscellaneana%2Fmiscellaneana-getting-the-straight-skinny-on-skeleton-clocks%2F&psig=AOvVaw2ffOAikLHfPca2aIP9I3qI&ust=1624740529444000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCIjy5aLUs_ECFQAAAAAdAAAAABAK",
  thumnailWidth:100,
  thumbnailHeight:100,
},
{src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faahs.org.au%2Fastro-clock%2F&psig=AOvVaw2ffOAikLHfPca2aIP9I3qI&ust=1624740529444000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCIjy5aLUs_ECFQAAAAAdAAAAABAS",
  thumbnail:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oldetimeantiqueclocks.co.uk%2Fwp-content%2Fuploads%2F2014%2F08%2F250714532.jpg&imgrefurl=https%3A%2F%2Fwww.oldetimeantiqueclocks.co.uk%2Fclock%2Fvictorian-skeleton-clock-dell-bristol%2F&tbnid=M4JABNlkCZKicM&vet=12ahUKEwi97JKi1LPxAhVIOq0KHbQkDO8QMygdegUIARDnAw..i&docid=Hi1KwOukRy75ZM&w=1778&h=2700&q=clocks%20skeleton&ved=2ahUKEwi97JKi1LPxAhVIOq0KHbQkDO8QMygdegUIARDnAw",
  thumnailWidth:100,
  thumbnailHeight:100,
}]

function Sayhello() {
  return(
    <h1>Hello World!</h1>
  )
}

function Make_clocks() {
  return(
    <Gallery
      images={imageData}
    />
  )
}

function App() {
  return (
    <div>
      <Sayhello />
      <Make_clocks />
    </div>
  );
}

export default App;
