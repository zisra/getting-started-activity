import { useEffect } from 'react';

import { Icon, Icons } from '@/components/Icon';
import { useBannerStore, useRegisterBanner } from '@/stores/banner';

export function Banner(props: {
	children: React.ReactNode;
	type: 'error';
	id: string;
}) {
	const [ref] = useRegisterBanner<HTMLDivElement>(props.id);
	const hideBanner = useBannerStore((s) => s.hideBanner);
	const styles = {
		error: 'bg-[#C93957] text-white',
	};
	const icons = {
		error: Icons.CIRCLE_EXCLAMATION,
	};

	return (
		<div ref={ref}>
			<div
				className={[
					styles[props.type],
					'flex items-center justify-center p-1',
				].join(' ')}
			>
				<div className="flex items-center space-x-3">
					<Icon icon={icons[props.type]} />
					<div>{props.children}</div>
				</div>
				<span
					className="absolute right-4 hover:cursor-pointer"
					onClick={() => hideBanner(props.id, true)}
				>
					<Icon icon={Icons.X} />
				</span>
			</div>
		</div>
	);
}

export function BannerLocation(props: { location?: string }) {
	const setLocation = useBannerStore((s) => s.setLocation);
	const currentLocation = useBannerStore((s) => s.location);
	const loc = props.location ?? null;

	useEffect(() => {
		if (!loc) return;
		setLocation(loc);
		return () => {
			setLocation(null);
		};
	}, [setLocation, loc]);

	if (currentLocation !== loc) return null;

	return <div />;
}
