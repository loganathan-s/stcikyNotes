import {newsApiKey as APIKEY, newUrl as APIURL} from "./secretToken";

class News{

 constructor(){
 	this.token = APIKEY;
 	this.url = APIURL;
 	this.source = 'bbc-news&';

 }

 topNews() {
  return fetch(`${this.url}?source=${this.source}&sortBy=top&apiKey=${this.token}`)
    .catch(_ => {
      throw new Error("network error");
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {                  // "data", not "json" -- it's not JSON anymore
      return data.articles;
    });
}

}
export { News as default};