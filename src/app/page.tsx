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

import { arbitrum, base, modeTestnet } from "thirdweb/chains";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

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
			<button onClick={() => switchChain(defineChain(arbitrum))}>Arbitrum</button>
			<button onClick={() => switchChain(defineChain(modeTestnet))}>Mode</button>

			<div className={cn("bg-red-500", chain?.id === base.id && "bg-green-500")}>Base</div>
			<div className={cn("bg-red-500", chain?.id === arbitrum.id && "bg-green-500")}>Arbitrum</div>
			<div className={cn("bg-red-500", chain?.id === modeTestnet.id && "bg-green-500")}>Mode</div>
		</div>
	);
};

export default Page;
