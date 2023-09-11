import React from 'react';
import '../Style/Index.css';
import InfoBlock from '../Components/Info';
import Work from '../Components/Work';
import Carousel from '../Components/Carousel';


function Home() {
  return (
    <React.Fragment>
      <InfoBlock />
      <Carousel />
      <Work />
    </React.Fragment>
  );
}



export default Home;
