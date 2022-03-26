const jsdom = require("jsdom");     // use JSDOM we can do is that we can web scrap particular conent from wesite
                                    // say we need to find only team name 
const { JSDOM } = jsdom;


const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"