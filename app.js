"use strict";

let searchTerm = $("#search");

async function getTerm() {
  let response = await axios.get("api.giphy.com/v1/gifs", { q: searchTerm });
  console.log("get result=", response.data);
}
$("#submit").on("click", getTerm());
//console.log("Let's get this party started!");
