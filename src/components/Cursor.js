import React, { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const root = document.documentElement;

    const setCursorPosition = ({ pageX, pageY }) => {
      root.style.setProperty('--mouse-x', `${pageX}px`);
      root.style.setProperty('--mouse-y', `${pageY}px`);
    };

    document.addEventListener('pointermove', setCursorPosition);

    return () => {
      document.removeEventListener('pointermove', setCursorPosition);
    };
  }, []);

  return (
    <div id='cursor'>
      <div className='cursor__inner'>
        <span>Drag</span>
      </div>
    </div>
  );
}
