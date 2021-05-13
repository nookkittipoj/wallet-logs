import Layout from '../components/Layout';
import Farms from '../components/Farms';
import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';

export interface Token {
  symbol: string;
  address: string;
  logo: string;
  balance: number;
  price: number;
}

export interface Reward {
  symbol: string;
  address: string;
  logo: string;
  balance: number;
  price: number;
}

export interface Farm {
  tokens: Token[];
  balance: number;
  apr: number;
  reward: Reward;
}

export interface Data {
  farms: Farm[];
}

interface Props {
  data: Data;
}

export default function index({ data }: Props): ReactElement {
  const { farms } = data;
  return (
    <Layout>
      <div className="container mx-auto">
        <Farms farms={farms}></Farms>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const url = 'https://api2.apeboard.finance/dopple/0xBFd4c5Daf93a65E61aCc7357b6ED0cd18F53b0e0';
  // const url = '/api/farms';
  const res = await fetch(url);
  const result = await res.json();
  const data: Data = result;
  return {
    props: {
      data
    }
  };
};
