import { useEffect } from 'react';

const useDisableZoom = () => {
    useEffect(() => {
        const disableZoom = (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        }

        document.addEventListener('wheel', disableZoom, { passive: false });

        return () => {
            document.removeEventListener('wheel', disableZoom);
        }
    }, []);
};

export default useDisableZoom;