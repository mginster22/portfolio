import React from 'react';
import MyPortfolio from '../components/MyPortfolio';
import WhoMe from '../components/WhoMe';

const Home = ({theme}) => {
  return (
    <div id='home'>
      <WhoMe theme={theme}/>
      <MyPortfolio theme={theme}/>
    </div>
  );
}

export default Home;
