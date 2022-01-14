import { useEffect, useRef } from 'react';

const Cursor = () => {
  const delay = 4;

  const dragCursor = useRef(null);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const x = useRef(0);
  const y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('pointermove', mouseMoveEvent);
    animateDragCursor();

    return () => {
      document.removeEventListener('pointermove', mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  });

  const mouseMoveEvent = (e) => {
    endX.current = e.pageX;
    endY.current = e.pageY;

    dragCursor.current.style.top = endY.current + 'px';
    dragCursor.current.style.left = endX.current + 'px';
  };

  const animateDragCursor = () => {
    x.current += (endX.current - x.current) / delay;
    y.current += (endY.current - y.current) / delay;

    dragCursor.current.style.top = y.current + 'px';
    dragCursor.current.style.left = x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDragCursor);
  };

  return (
    <>
      <div ref={dragCursor} className='drag-cursor'>
        <span>Drag</span>
      </div>
    </>
  );
};

export default Cursor;
