export default function MainTitle() {
  return (
    <>
      <h1 className='main-header__heading'>
        <span className='reveal-wrapper'>
          <span
            className='offset-right'
            split-by='letter'
            letter-animation='fade-up'
          >
            OCCASIONALLY, WE OFFER PERSPECTIVES
          </span>
        </span>

        <span className='reveal-wrapper'>
          <span split-by='letter' letter-animation='fade-up'>
            ON THE DIRECT-TO-CONSUMER LANDSCAPE,
          </span>
        </span>

        <span className='reveal-wrapper'>
          <span split-by='letter' letter-animation='fade-up'>
            RETAIL INNOVATIONS, HAPPENINGS AROUND
          </span>
        </span>

        <span className='reveal-wrapper'>
          <span split-by='letter' letter-animation='fade-up'>
            PACT AND THE ODD CREATIVE EXPERIMENT.
          </span>
        </span>
      </h1>
    </>
  );
}
