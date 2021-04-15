import NO_IMAGE from "../images/no-image.jpg";



const BASE_URL = "https://api.nomoreparties.co";
const BASE_FRONT_SERVER_URL =
  "https://movie.students.nomoredomains.monster";

const getFullImageUrl = (data) => {
  if (!data.image) {
    return `${NO_IMAGE}`;
  }
  return `${BASE_URL}${data.image.url}`;
};

export default getFullImageUrl;
