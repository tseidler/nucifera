class Config {
  constructor(state) {
    const localStorageConfig = JSON.parse(localStorage.getItem('config')) || {};
    this.configurationStore = Object.assign({}, localStorageConfig, state);
  }

  get(key) {
    return this.configurationStore[key];
  }

  set(key, value) {
    this.configurationStore[key] = value;
    localStorage.setItem('config', JSON.stringify(this.configurationStore));
  }
}

export default Config;
