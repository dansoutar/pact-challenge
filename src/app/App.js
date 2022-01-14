import { useEffect } from 'react';

import MainTitle from '../components/MainTitle';
import CallToAction from '../components/CallToAction';
import Slider from '../components/Slider';

import { splitByLetter, splitByWord } from '../lib/splitText';

function App() {
  useEffect(() => {
    const splitTargets = document.querySelectorAll('[split-by]');

    splitTargets.forEach((splitTarget) => {
      const type = splitTarget.getAttribute('split-by');
      let splitElements = null;

      if (type === 'letter')
        splitElements = splitByLetter(splitTarget.innerText);
      else if (type === 'word')
        splitElements = splitByWord(splitTarget.innerText);

      if (splitElements) splitTarget.firstChild.replaceWith(...splitElements);
    });
  }, []);

  return (
    <div id='App'>
      <section id='main-header'>
        <header>
          <MainTitle />
        </header>
      </section>

      <section id='latest-stories'>
        <Slider />
      </section>

      <section id='start-your-project'>
        <CallToAction />
      </section>
    </div>
  );
}

export default App;
