import { useEffect, useRef } from 'react';

const Cursor = () => {
  const delay = 4;

  const dotOutline = useRef(null);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const x = useRef(0);
  const y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('pointermove', mouseMoveEvent);
    animateDotOutline();

    return () => {
      document.removeEventListener('pointermove', mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  });

  const mouseMoveEvent = (e) => {
    endX.current = e.pageX;
    endY.current = e.pageY;

    dotOutline.current.style.top = endY.current + 'px';
    dotOutline.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    x.current += (endX.current - x.current) / delay;
    y.current += (endY.current - y.current) / delay;

    dotOutline.current.style.top = y.current + 'px';
    dotOutline.current.style.left = x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={dotOutline} className='cursor-dot-outline'>
        <span>Drag</span>
      </div>
    </>
  );
};

export default Cursor;
