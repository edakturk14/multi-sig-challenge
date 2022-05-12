import { useState, useEffect } from "react";

export default function useEventListener(contracts, contractName, eventName, provider, startBlock, args) {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    if (contracts && contractName && contracts[contractName]) {
      try {
        contracts[contractName].on(eventName, (...args) => {
          let blockNumber = args[args.length-1].blockNumber
          setUpdates(messages => [Object.assign({blockNumber},args.pop().args), ...messages]);
        });
        return () => {
          contracts[contractName].removeListener(eventName);
        };
      } catch (e) {
        console.log(e);
      }
    }
  }, [provider, startBlock, contracts, contractName, eventName]);

  return updates;
}
