import React from 'react';
import Blog from '../components/Blog';
import MyPortfolio from '../components/MyPortfolio';
import Quiz from '../components/Quiz';
import WhoMe from '../components/WhoMe';

const Home = ({theme}) => {
  return (
    <div id='home'>
      <WhoMe theme={theme}/>
      <MyPortfolio theme={theme}/>
      <Blog theme={theme}/>
      <Quiz theme={theme}/>
    </div>
  );
}

export default Home;
