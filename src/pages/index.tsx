import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { injected } from "../lib/wallet/connector";
import { useWeb3React } from "@web3-react/core";

const Home: NextPage = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={connect}
            className="bg-blue-500 px-4 py-2 text-[24px] font-bold text-white rounded-lg"
          >
            Connect Wallet
          </button>
          <div className="text-center my-4">
            {active ? (
              <p>Connected with <span className="font-bold">{account}</span> </p>
            ) : (
              <p>Not connected</p>
            )}
          </div>

          <button
            onClick={disconnect}
            className="bg-blue-500 px-4 py-2 text-[24px] font-bold text-white rounded-lg"
          >
            Disconncted
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
