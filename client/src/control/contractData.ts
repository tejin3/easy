import { ethers } from "ethers";
import { getProvider, getSigner } from "@/control/ethers";
// import { eth, ethList } from "@/control/data";

// import { ref, reactive } from "vue";
import NFTAbi from "@/data/ABI.json";

export const NFTAddress: string = import.meta.env.VITE_NFT;

export const getContract = async () => {
  const provider = await getProvider();
  const NFTContract = new ethers.Contract(NFTAddress, NFTAbi, provider);
  return NFTContract;
};

export const getContractSigner = async () => {
  const signer = await getSigner();
  const NFTContract = new ethers.Contract(NFTAddress, NFTAbi, signer);
  return NFTContract;
};

// export const callInfo = async () => {
//   const con = await getContract();
//   const phase = ref(0);
//   const sellAmount = ref(0);
//   const totalPrice = ref("0");
//   const nowSale = ref(true);

//   try {
//     const info: [number, bigint, bigint, boolean] = await con.basicData();
//     phase.value = Number(info[0]);
//     eth.value = ethList[info[0]];
//     sellAmount.value = Number(info[1]);
//     totalPrice.value = String(info[2]);
//     nowSale.value = info[3];
//     return { phase, eth, sellAmount, totalPrice, nowSale };
//   } catch (error) {
//     console.log(error);
//     alert("fail callInfo");
//     return { phase, eth, sellAmount, totalPrice, nowSale };
//   }
// };

// export const callCounter = async () => {
//   const con = await getContract();
//   const soldOut = reactive([0, 1000, 2000, 3000]);
//   try {
//     const counter: number[] = await con.tokenCounter();
//     for (const i in counter) {
//       soldOut[i] = counter[i];
//     }
//     return { soldOut };
//   } catch (error) {
//     console.log(error);
//     alert("fail callCounter");
//     return { soldOut };
//   }
// };
