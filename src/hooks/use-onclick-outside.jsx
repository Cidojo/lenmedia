import {useCallback, useEffect} from 'react';

const useOnClickOutside = (reference, handler) => {
	const listener = useCallback((event) => {
		if (!reference.current || reference.current.contains(event.target)) {
			return;
		}

		handler(event);
	}, [handler, reference]);

	useEffect(
		() => {
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		[reference, handler, listener],
	);
};

export { useOnClickOutside };
