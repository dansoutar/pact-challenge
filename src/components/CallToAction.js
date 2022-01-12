import React from 'react';
import CtaTitle from './CtaTitle';
import CtaButton from './CtaButton';
import Paragraph from './Paragraph';

export default function CallToAction() {
  return (
    <>
      <div className='call-to-action'>
        <div className='call-to-action__left'>
          <CtaTitle />
        </div>
        <div className='call-to-action__right'>
          <div className='call-to-action__right__wrapper'>
            <Paragraph />
            <CtaButton />
          </div>
        </div>
      </div>
    </>
  );
}
