const quote = document.getElementById("quote");
const author = document.getElementById("author");
const bt1 = document.querySelector("#bt1");
const bt2 = document.querySelector("#bt2");

async function quoteGenrator() {
  const url = "https://api.realinspire.tech/v1/quotes/random";
  const response = await fetch(url);

  const data = await response.json();

  try {
    if (!response.ok) {
      throw new Error(`try again status found ${response.status}`);
    }
    quote.innerText = data[0].content;
    author.innerText = data[0].author;
  } catch (error) {}
}

function shareTweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerText);
}

bt1.addEventListener("click", () => {
  quoteGenrator();
  setTimeout(() => {
    quote.innerText =`Loading...`;
    author.innerText =`Loading..`;
  }, 10000);
});
bt2.addEventListener("click", () => {
  shareTweet();
});
