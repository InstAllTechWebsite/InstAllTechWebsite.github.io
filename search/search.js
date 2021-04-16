// You should only have one query String, and must be `?q=`


/*
TODO's
- move this to a .json file
- searching "mozilla" wont come up with "firefox"
- fix css http://jsfiddle.net/thirtydot/RXrvZ/1/

*/

// 5:30p

let listOfSoftwares = [
    "Zoom",
    "Chrome",
    "Firefox",
    "Edge",
    "Netflix"
]

let tutorialsDB = [
    {name: "How to Share Your Screen",          software:"Zoom",    url:"instAllTechWebsite.github.io/zoom/screen-share/"},
    {name: "How to Record a Meeting",           software:"Zoom",    url:"instAllTechWebsite.github.io/zoom/record-meeting/"},
    {name: "How to Print Your Screen",          software:"Chrome",  url:"instAllTechWebsite.github.io/chrome/print-screen/"},
    {name: "How to Print Your Screen",          software:"Firefox", url:"instAllTechWebsite.github.io/firefox/print-screen/"},
    {name: "How to Print Your Screen",          software:"Edge",    url:"instAllTechWebsite.github.io/edge/print-screen/"},
    {name: "How to Watch a Movie",              software:"Netflix", url:"instAllTechWebsite.github.io/netflix/watch-movie/"},
    {name: "How to Add Something to Your List", software:"Netflix", url:"instAllTechWebsite.github.io/netflix/add-to-list/"},
]

console.log(tutorialsDB)

// Get the search terms (from the query string)

let searchFilters = {query:"", software:""}
let splitQueryString = document.URL.split('?').pop()
if(splitQueryString.length!=0){
    splitQueryString=splitQueryString.split('&');
    if(splitQueryString.length>0 && splitQueryString[0].substring(0,6) == "query="){
        qq = splitQueryString[0].substring(6).toLowerCase();
        searchFilters.query = decodeURI(qq)
    }
    if(splitQueryString.length>1 && splitQueryString[1].substring(0,9) == "software="){
        searchFilters.software = splitQueryString[1].substring(9).toLowerCase();
    }
}

// Edit page title depending on if they searched for something
if(searchFilters.query == ""){
    document.getElementById("includeQuery").remove();
}
else{
    document.getElementById("searchQuery").innerHTML = searchFilters.query;
}

// Filter out stuff
    
if(searchFilters.query!=""){
    // https://stackoverflow.com/questions/7948689/using-js-jquery-to-do-string-search-fuzzy-matching
    // Not sure what's a simple way to do filtering
    for(let i = tutorialsDB.length-1; i>=0; i--){
        tut = tutorialsDB[i]

        tutName = tut.name.toLowerCase() 
        searchTerms = searchFilters.query.toLowerCase()
        //Check if it's a substring somewhere in the tutorial name

        if(tutName.indexOf(searchTerms)==-1){
    tutorialsDB.splice(i,1);
            }
    }
}

if(searchFilters.software!=""){
    //Software
    for(let i = tutorialsDB.length-1; i>=0; i--){
        console.log(i)
        let tutorialDbEntry = tutorialsDB[i]
        console.log(i+tutorialDbEntry.software.toLowerCase()  + " + +" + searchFilters.software.toLowerCase())
        
        if(tutorialDbEntry.software.toLowerCase() != searchFilters.software.toLowerCase()){
            console.log("el");
            tutorialsDB.splice(i,1);
        }
    }
}



// ===== Fill the Search Results with entries
entriesBoxHTML = document.getElementById("searchResEntries")
tutorialsDB.forEach(function(tut) {
    tutEntry = document.createElement("div");
    tutEntry.classList.add("box");

    softwLogo = document.createElement("img");
    softwLogo.src = "https://lh3.googleusercontent.com/-3TZFFWBC8VA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckVv49ggCGeFxa6DfVnvaFfGQ8ggw/photo.jpg?sz=46";
    tutEntry.appendChild(softwLogo)

    textDiv = document.createElement("div");

    h3title = document.createElement("h3");
    h3a = document.createElement("a");
    h3a.href = tut.url;
    h3a.innerText = tut.name;
    h3title.appendChild(h3a)
    textDiv.appendChild(h3title);

    pSoftwareName = document.createElement("p")
    pSoftwareName.innerText = tut.software
    textDiv.appendChild(pSoftwareName)
    
    tutEntry.appendChild(textDiv)

    entriesBoxHTML.appendChild(tutEntry)
})





