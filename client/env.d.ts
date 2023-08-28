/// <reference types="vite/client" />

interface EthereumEvent {
  connect: import("hardhat/types").ProviderConnectInfo;
  disconnect: import("hardhat/types").ProviderRpcError;
  accountsChanged: Array<string>;
  chainChanged: string;
  message: import("hardhat/types").ProviderMessage;
}

type EventKeys = keyof EthereumEvent;
type EventHandler<K extends EventKeys> = (event: EthereumEvent[K]) => void;

interface Ethereumish {
  autoRefreshOnNetworkChange: boolean;
  chainId: string;
  isMetaMask?: boolean;
  isStatus?: boolean;
  networkVersion: string;
  selectedAddress: any;

  on<K extends EventKeys>(event: K, eventHandler: EventHandler<K>): void;
  enable(): Promise<any>;
  request?: (request: { method: string; params?: Array<any> }) => Promise<any>;
  /**
   * @deprecated
   */
  send?: (
    request: { method: string; params?: Array<any> },
    callback: (error: any, response: any) => void
  ) => void;
  sendAsync: (
    request: import("hardhat/types").RequestArguments
  ) => Promise<unknown>;
}

interface Window {
  ethereum: Ethereumish;
}
