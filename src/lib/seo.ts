import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'sameemul haque ─ developer';
	const description = "Hey 👋 I'm Sameemul Haque, a developer";

	return {
		title,
		description,
		canonical: `https://sameemul-haque.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'sameemul haque',
			url: `https://sameemul-haque.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://sameemul-haque.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@sameemul_haque',
			site: '@sameemul_haque',
		},
		...props,
	};
}
