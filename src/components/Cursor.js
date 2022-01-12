import React, { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('#cursor');

    const setCursorPosition = ({ pageX, pageY }) => {
      cursor.style.top = `${pageY}px`;
      cursor.style.left = `${pageX}px`;
    };

    document.addEventListener('pointermove', setCursorPosition);

    return () => {
      document.removeEventListener('pointermove', setCursorPosition);
    };
  }, []);

  return (
    <div id='cursor'>
      <span>Drag</span>
    </div>
  );
}
