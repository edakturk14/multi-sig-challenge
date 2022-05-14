import { useContractReader } from "eth-hooks";
import React from "react";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>👷‍♀️</span>
        Welcome to my multisig!
      </div>
      <div style={{ maxWidth: 820, margin: "auto", marginTop: 16, paddingBottom: 6 }}>
          <a href={"https://github.com/edakturk14/speed-run-ethereum/"} target="_blank">
              <input type="button" value="🌟 View My SpeedRun Repo on GitHub 🌟" />
          </a>
      </div>
      🌟 don't forget to put a <b>star</b> there 🌟
    </div>
  );
}

export default Home;
