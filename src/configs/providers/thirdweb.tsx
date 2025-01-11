"use client";

import type { PropsWithChildren } from "react";

import { createThirdwebClient } from "thirdweb";
import {
	ThirdwebProvider as ThirdwebProviderPrimitive,
	type UseConnectModalOptions,
} from "thirdweb/react";

import { createWallet } from "thirdweb/wallets";

const thirdwebClient = createThirdwebClient({
	clientId: String(process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID),
});

const connectModalOptions: UseConnectModalOptions = {
	client: thirdwebClient,
	wallets: [
		createWallet("io.metamask"),
		createWallet("com.coinbase.wallet"),
		createWallet("io.rabby"),
	],
	size: "compact",
	title: "Connect wallet",
	showThirdwebBranding: false,
};

const ThirdwebProvider = ({ children }: PropsWithChildren) => (
	<ThirdwebProviderPrimitive>{children}</ThirdwebProviderPrimitive>
);

export { ThirdwebProvider, thirdwebClient, connectModalOptions };
