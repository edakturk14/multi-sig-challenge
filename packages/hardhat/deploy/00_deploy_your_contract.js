// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("MultiSig", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [ ["0xf6ffc6916C2a3b8486d3C181209ed87AecC8bF08" ],2 ],
    log: true,
    waitConfirmations: 5,
  });

  // Getting a previously deployed contract
  const YourContract = await ethers.getContract("MultiSig", deployer);

};
module.exports.tags = ["MultiSig"];
