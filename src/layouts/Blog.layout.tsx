import { NextSeo } from 'next-seo';

import { Navbar } from '~/components';
import { useSeoProps } from '~/lib';

import type { ComponentProps, PropsWithChildren } from 'react';

interface BlogLayoutProps {
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

export function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>): JSX.Element {
	const seoProps = useSeoProps({
		title: 'sameemul haque ─ blog',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<Navbar.Standard />
			<main className="flex flex-col min-h-screen justify-center sm:px-8">{children}</main>
		</>
	);
}
