export const switchNetwork = async () => {
  if (window.ethereum.request) {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      // params: [{ chainId: "0x1" }],
      params: [{ chainId: "0x5" }], //test
    });
  } else {
    alert("switch network errr: check metamask!");
  }
};

export const isMetaMask = () => {
  if (window.ethereum.isMetaMask) {
    return true;
  }
  return false;
};
