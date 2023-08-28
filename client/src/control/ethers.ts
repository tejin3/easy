import { ethers } from "ethers";

export const getProvider = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
      window.location.reload();
    }
  });
  return provider;
};

export const getSigner = async () => {
  const provider = await getProvider();
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  return signer;
};

export const getAccount1 = async () => {
  const signer = await getSigner();
  const Account = await signer.getAddress();

  return Account;
};

export const selectNetwork = async () => {
  const provider = await getProvider();
  const network = await provider.getNetwork();
  return network.chainId;
};

export const getBlock = async () => {
  const provider = await getProvider();
  const block = await provider.getBlockNumber();

  return block;
};
