"use client";

import { connectModalOptions } from "@/configs/providers/thirdweb";
import { defineChain } from "thirdweb";
import {
	useActiveAccount,
	useActiveWallet,
	useActiveWalletChain,
	useAutoConnect,
	useConnectModal,
	useSwitchActiveWalletChain,
} from "thirdweb/react";

import { base, modeTestnet } from "thirdweb/chains";

const Page = () => {
	const { connect } = useConnectModal();
	const account = useActiveAccount();
	const chain = useActiveWalletChain();
	const wallet = useActiveWallet();

	const switchChain = useSwitchActiveWalletChain();

	useAutoConnect(connectModalOptions);

	return (
		<div>
			<button onClick={() => connect({ ...connectModalOptions })}>Open connect Modal</button>
			<button onClick={() => wallet?.disconnect?.()}>Disconnect</button>

			<div>Account: {account?.address}</div>
			<div>Chain: {chain?.id}</div>

			<button onClick={() => switchChain(defineChain(base))}>Base</button>
			<button onClick={() => switchChain(defineChain(modeTestnet))}>Mode</button>
		</div>
	);
};

export default Page;
