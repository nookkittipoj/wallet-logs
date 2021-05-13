import Layout from '../components/Layout';
import React from 'react';
import Image from 'next/image';

const rawData =
  '{"farms":[{"tokens":[{"symbol":"DOP-UST-LP","address":"0x7edcdc8cd062948ce9a9bc38c477e6aa244dd545","logo":"https://dopple.finance/_next/image?url=%2Fimages%2Ficons%2Fust-pool.png&w=128&q=75","balance":1441.3062941926667,"price":1.010287413726243}],"balance":1441.3062941926667,"apr":150.95429248580396,"reward":{"symbol":"DOP","address":"0x844fa82f1e54824655470970f7004dd90546bb28","logo":"https://dopple.finance/_next/image?url=%2Fimages%2Flogo.svg&w=128&q=75","balance":8.517996256426503,"price":3.09}}]}';
const data = JSON.parse(rawData);
const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col pt-5">
          {data.farms.map((farm) => (
            <div className="flex bg-light-blue-600">
              {/* POOL */}
              <div className="flex-1">
                <div>POOL</div>
                <div className="flex items-center h-full">
                  <img
                    src={farm.tokens[0].logo}
                    alt={farm.tokens[0].symbol}
                    width={35}
                    height={35}
                    className="pr-2"
                  />
                  {farm.tokens[0].symbol}
                </div>
              </div>
              {/* BALANCES */}
              <div className="flex-1">
                <div>BALANCES</div>
                <div className="flex items-center h-full">
                  {farm.tokens[0].balance} {farm.tokens[0].symbol}
                  <br />
                  {'$'}
                  {farm.tokens[0].balance * farm.tokens[0].price}
                </div>
              </div>
              {/* REWARDS */}
              <div className="flex-1">
                <div>REWARDS</div>
                <div className="flex items-center h-full">
                  {farm.reward.balance} {farm.reward.symbol}
                  <br />
                  {'$'}
                  {farm.reward.balance * farm.reward.price}
                </div>
              </div>
              {/* APR */}
              <div className="flex-1">
                <div>APR</div>
                <div className="flex items-center h-full">
                  {farm.apr}
                  {'%'}
                  <br />
                  {(farm.balance * farm.apr) / 365}
                  {'% daily'}
                </div>
              </div>
              {/* VALUE */}
              <div className="flex-1">
                <div>VALUE</div>
                <div className="flex items-center h-full">
                  {'$'}
                  {farm.tokens[0].balance * farm.tokens[0].price +
                    farm.reward.balance * farm.reward.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
