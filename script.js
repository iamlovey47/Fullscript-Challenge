
const Http = new XMLHttpRequest();
const url='https://cors-anywhere.herokuapp.com/https://loripsum.net/api';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  // console.log(Http.responseText)
  document.getElementById('rand_text').innerHTML = Http.responseText;
}