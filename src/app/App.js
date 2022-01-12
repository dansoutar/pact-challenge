import MainTitle from '../components/MainTitle';
import CallToAction from '../components/CallToAction';
import Slider from '../components/Slider';

function App() {
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
