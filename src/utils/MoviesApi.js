export class MoviesApi {
  constructor({ address }) {
    this._address = address;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialFilms() {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }
}

const api = new MoviesApi({
  address: "https://api.nomoreparties.co/beatfilm-movies",
});

export default api;
