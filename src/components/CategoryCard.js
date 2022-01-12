import React from 'react';

export default function CategoryCard({ imgSrc }) {
  return (
    <article className='category-card'>
      <img
        className='category-card__image'
        src={imgSrc}
        alt='category card visual'
      />
      <div className='category-card__copy'>
        <h5 className='category-card__title'>Category</h5>
        <p className='category-card__intro'>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>
      </div>
    </article>
  );
}
