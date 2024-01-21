import React, {useEffect, useState} from 'react';
import './Loader.css';

const Loader = () => {
    const [loadingClass, setLoadingClass] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoadingClass('loading');
            setTimeout(() => setLoaded(true), 1000);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`loader-container ${loadingClass} ${loaded ? 'loaded' : ''}`}>
            <div className="loader-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Accountable.
            </div>
        </div>
    );
};

export default Loader;


