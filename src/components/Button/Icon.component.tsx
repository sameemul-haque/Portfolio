import clsx from 'clsx';
import { forwardRef } from 'react';

import type { ButtonHTMLAttributes } from 'react';

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
	{ children, className, onClick, ...rest },
	ref,
) {
	return (
		<button
			ref={ref}
			className={clsx(
				'group',
				'relative inline-flex items-center px-3 py-2 bg-primary-700 hover:bg-primary-100 hover:text-gray-900 text-black rounded-lg text-sm font-medium default-transition default-focus',
				className,
			)}
			onClick={(e): void => onClick && onClick(e)}
			{...rest}
		>
			{children}
		</button>
	);
});
