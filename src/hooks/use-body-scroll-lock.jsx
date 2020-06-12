import { useLayoutEffect } from 'react';

const useBodyScrollLock = (shouldLock) => {
	useLayoutEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;

		if (shouldLock) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [shouldLock]);
};

export { useBodyScrollLock };
