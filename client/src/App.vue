<script setup lang="ts">
import { ref, reactive } from "vue";

import { selectNetwork, getAccount1 } from "@/control/ethers";
import { switchNetwork } from "@/control/metamask";
import { getContract, getContractSigner } from "@/control/contractData";

import type { ContractTransaction } from "ethers";

const address = ref("0x");
const totalPrice = ref("0");
const phase = ref(0);
const sellAmount = ref(0);

const noMetamask = ref(false);
const nowSale = ref(true);

async function callMetamask() {
  if (typeof window.ethereum !== "undefined") {
    const result = await selectNetwork();
    if (result == 5) {
      // if (result == 1) {
      address.value = await getAccount1();
      alert(`connect ${address.value}`);

      const con = await getContract();

      const info: [number, bigint, bigint, boolean] = await con.basicData();

      const counter: number[] = await con.tokenCounter();
    } else {
      await switchNetwork();
    }
  }
}

const transactionHash = ref("");
async function mint(selectNum: number) {
  const conS = await getContractSigner();
  const counter: number[] = await conS.tokenCounter();

  try {
    const transaction: ContractTransaction = await conS.mintNXC(selectNum);

    const receipt = await transaction.wait();

    transactionHash.value = receipt.transactionHash;
  } catch (error) {
    alert("fail tx");
  }
}
</script>

<template>
  <div
    v-if="address === '0x'"
    @click="callMetamask()"
    :rounded="true"
    class="wallet3"
  >
    Connect Wallect
  </div>
  <div v-else>{{ address }}</div>
</template>
