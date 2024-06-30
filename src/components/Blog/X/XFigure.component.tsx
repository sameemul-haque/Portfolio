import Image from 'next/image';

interface XFigureProps {
	alt?: string;
	caption?: string;
	src: string;
}

export function XFigure({ alt, caption, src }: XFigureProps): JSX.Element {
	return (
		<figure>
			<Image
				alt={alt ?? caption}
				className="rounded-3xl object-cover select-none hover:shadow-xl"
				draggable={false}
				height={0}
				layout="responsive"
				src={src}
				width={0}
			/>
			<figcaption>{alt ?? caption}</figcaption>
		</figure>
	);
}
