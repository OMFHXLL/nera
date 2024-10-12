import { useEffect } from 'react';

const MyConsole = () => {
    const loadEruda = async () => {
        const eruda = await import('eruda');
        if (!window.eruda) {
            eruda.default.init();
            window.eruda = eruda;
        }
    };

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'r') {
          event.preventDefault(); // Prevent the default refresh action
          window.location.reload(); // Перезагружаем страницу
        }
    };

    useEffect(() => {
        loadEruda();
        window.addEventListener('keydown', handleKeyDown)
    }, []);

    return null;
};

export default MyConsole;