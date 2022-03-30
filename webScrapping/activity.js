const request = require('request');   // Here in our activity what we have done is that we go through an website/webpage and
                                        // web scrap our data we use both request module and jsdom module 
                                        // request module for accessing resonse from website i.e we have our data in html form
                                        // jsdom module to we scrap any particular data from the website
const jsdom = require("jsdom");   //jsdom required.
const { JSDOM } = jsdom;

const link = "ttps://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";

request(link, cb);  // make an attribute  request to access and give link and function to it.

function cb(error, response, html) {  //function for webscrap data
     if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);  // here we pass arguement as html bcz we find or webscrap data from html which we have from request 
        const document = dom.window.document;    //document-->it implies that server takes an document(the whole webpage)
        let teamsName = document.querySelectorAll(".match-info.match-info-MATCH.match-info-MATCH-half-width .teams .name"); 
                                //queryselectorall -->to select particular data here we select team name by inspecting on website.
        console.log(teamsName[1].textContent);  //textcontent-->it implies we have that only text part if we dont use this 
        console.log(teamsName[0].textContent);     // we will get that particular html code i.e. in <span> tag 
                    // teamName[0],[1] ----> used as an array to solve and have our ouput 
    }
}