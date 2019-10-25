export default class InstaService {
  constructor() {
    this._apiBase = "http://localhost:3000"; // _ -значит неизменяемая часть
  }

  // При использовании () => не нужно биндить, метод жестко привязывается к классу
  getResource = async (url) => {
    const responce = await fetch(`${this._apiBase}${url}`);

    if (!responce.ok) {
      throw new Error(`Could not fetch ${url}; received ${responce.status}`);
    }

    return await responce.json();
  }

  getAllPosts = async (url) => { 
    const responce = await this.getResource("/posts/")
    return responce;
  }
}