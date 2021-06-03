import React from 'react';
import Layout from './Layout';
import Banner from './Banner';
import Feature from './Feature';
import Inspiration from './Inspiration';
import Tip from './Tip';
import Products from './Products';

const Dashboard = () => {
  return (
    <Layout>
      <Banner />
      <Feature />
      <Products />
      <Inspiration />
      <Tip />
    </Layout>
  );
};

export default Dashboard;
