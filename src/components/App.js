import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <body className="page">
        <Header />
        <Main />
        <Footer />

        <template id="card">
          <div className="element">
            <button className="element__delete-button" type="button"></button>
            <img
              className="element__picture"
              src="images/places/karachaevsk.png"
              alt="Карачаевск-Черкесск"
            />
            <div className="element__description">
              <h2 className="element__title">
                Карачаево-Черкесская Республика
              </h2>
              <div className="element__like-number">
                <button className="element__like-button" type="button"></button>
                <span className="element__like-container"></span>
              </div>
            </div>
          </div>
        </template>
      </body>
    </div>
  );
}

export default App;
