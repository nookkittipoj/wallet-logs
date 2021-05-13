import { GetStaticProps, NextPage } from 'next';

interface Farms {
  farms: any[];
}

export function rateWithTwoDecimal(rate: number, isNull: boolean = false): string | null {
  if (isNull && rate === null) {
    return null;
  } else {
    const rateString = (Math.round(Number((rate * 100).toPrecision(15))) / 100).toFixed(2);
    return parseFloat(rateString)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

const Farms: React.FunctionComponent<Farms> = ({ farms }) => {
  return (
    <div className="flex flex-col pt-5">
      {farms.map((farm, index) => (
        <div className="flex bg-light-blue-600" key={index}>
          {/* POOL */}
          <div className="flex-1 text-center">
            <div>POOL</div>
            <div className="flex items-center justify-center h-full">
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
          <div className="flex-1 text-center">
            <div>BALANCES</div>
            <div className="flex items-center justify-center h-full">
              {rateWithTwoDecimal(farm.tokens[0].balance)} {farm.tokens[0].symbol}
              <br />
              {'$'}
              {rateWithTwoDecimal(farm.tokens[0].balance * farm.tokens[0].price)}
            </div>
          </div>
          {/* REWARDS */}
          <div className="flex-1 text-center">
            <div>REWARDS</div>
            <div className="flex items-center justify-center h-full">
              {rateWithTwoDecimal(farm.reward.balance)} {farm.reward.symbol}
              <br />
              {'$'}
              {rateWithTwoDecimal(farm.reward.balance * farm.reward.price)}
            </div>
          </div>
          {/* APR */}
          <div className="flex-1 text-center">
            <div>APR</div>
            <div className="flex items-center justify-center h-full">
              {rateWithTwoDecimal(farm.apr)}
              {'%'}
              <br />
              {rateWithTwoDecimal((farm.balance * farm.apr) / 365)}
              {'% daily'}
            </div>
          </div>
          {/* VALUE */}
          <div className="flex-1 text-center">
            <div>VALUE</div>
            <div className="flex items-center justify-center h-full">
              {'$'}
              {rateWithTwoDecimal(
                farm.tokens[0].balance * farm.tokens[0].price +
                  farm.reward.balance * farm.reward.price
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Farms;
