import { NextApiRequest, NextApiResponse } from 'next';

const api = 'https://api2.apeboard.finance';
const address = '0xBFd4c5Daf93a65E61aCc7357b6ED0cd18F53b0e0';
const farms = ['dopple', 'pancakebunny'];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as { slug: string };
  let farmsResult = [];
  for (const farm of farms) {
    const response = await fetch(api + '/' + farm + '/' + address);
    const responseJson = await response.json();
    farmsResult.push(responseJson);
  }
  res.status(200).json(farmsResult);
};
