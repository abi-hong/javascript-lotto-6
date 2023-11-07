import LottoGame from './LottoGame.js';

class App {
  lottoGame = new LottoGame();

  async play() {
    await this.lottoGame.start();
  }
}

export default App;
