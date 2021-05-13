import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
type LayoutProps = {
  title?: string;
};
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div className="main-container main-background">
    <Head>
      <title>Wallet Logs</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar></Navbar>
    </header>
    {children}
  </div>
);
export default Layout;
