export class MainApi {
  constructor({ address }) {
    this._address = address;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  saveMovie(movie, token) {
    return fetch(`${this._address}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image}`,
        thumbnail: `https://api.nomoreparties.co${movie.thumbnail}`,
        trailer: movie.trailer,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getSavedFilms(token) {
    return fetch(`${this._address}/movies`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  editUser(profile, token) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: profile.email,
        name: profile.name,
      }),
    }).then((res) => {
      if (res.status === 400) {
        return Promise.reject({
          message: "Пользователь с таким email уже существует",
        });
      }
      return this._getResponseData(res);
    });
  }

  register(email, password, name) {
    return fetch(`${this._address}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => {
        if (res.status === 400) {
          return Promise.reject({message: 'Пользователь с таким email уже существует'});
        }
        if (res.status === 500) {
          return Promise.reject({message: 'При регистрации пользователя произошла ошибка'});
        }
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }

  authorization(email, password) {
    return fetch(`${this._address}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.status === 400) {
        console.log("Не передано одно из полей");
      }
      if (res.status === 401) {
        console.log("Пользователь с email не найден ");
      }
      if (res.status === 500) {
        return Promise.reject({ message: "Неправильная почта или пароль" });
      }
      if (!res.ok) {
        return Promise.reject(`Ошибка ${res.status}`);
      }
      return res.json();
    });
  }

  checkToken(token) {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (
          (res.status === 401 && !res.token) ||
          (res.status === 401 && !`Bearer ${token}`)
        ) {
          console.log("Токен не передан или передан не в том формате");
        }
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._address}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const api = new MainApi({
  address: "https://api.movie.students.nomoredomains.monster",
});

export default api;
