export class Collegue {
  constructor(private _nom:string, private _url:string, private _score:number) {}

  get nom() {
    return this._nom
  }

  get url() {
    return this._url
  }

  get score() {
    return this._score
  }

  set url(url:string) {
    this._url = url
  }

  set score(score:number) {
    this._score = score
  }
}
