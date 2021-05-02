// https://installtechwebsite.github.io/search/?query=<search something>&software=<some software>

/*
TODO's
- move this to a .json file
- searching "mozilla" wont come up with "firefox"
- fix css http://jsfiddle.net/thirtydot/RXrvZ/1/

*/

let listOfSoftwares = ["Zoom", "Chrome", "Firefox", "Edge", "Netflix"];

let software2logourl = {
    Zoom: "../zoom/logo.png",
    Chrome: "../chrome/logo.png",
    Firefox: "../firefox/logo.svg",
    Edge: "../edge/logo.png",
    Netflix: "../netflix/logo.png",
};

let tutorialsDB = [
    {
        name: "How to Share Your Screen",
        software: "Zoom",
        url: "../zoom/screen-share/",
    },
    {
        name: "How to Record a Meeting",
        software: "Zoom",
        url: "../zoom/record-meeting/",
    },
    {
        name: "How to Join a Meeting",
        software: "Zoom",
        url: "../zoom/join-meeting/",
    },
    {
        name: "Meeting Controls Icons",
        software: "Zoom",
        url: "../zoom/meeting-controls/",
    },
    {
        name: "How to Install Zoom",
        software: "Zoom",
        url: "../zoom/install/",
    },
    {
        name: "How to Print Your Screen",
        software: "Chrome",
        url: "../chrome/print-screen/",
    },
    {
        name: "How to Print Your Screen",
        software: "Firefox",
        url: "../firefox/print-screen/",
    },
    {
        name: "How to Print Your Screen",
        software: "Edge",
        url: "../edge/print-screen/",
    },
    {
        name: "How to Watch a Movie",
        software: "Netflix",
        url: "../netflix/watch-movie/",
    },
    {
        name: "How to Add a Movie to Your List",
        software: "Netflix",
        url: "../netflix/add-to-list/",
    },
    {
        name: "How to Make and Listen to a Groove Playlist",
        software: "Groove Music",
        url: "../groove/playlist/",
    },
    {
        name: "How to Install Skype",
        software: "Skype",
        url: "../skype/install/",
    },
    {
        name: "How to Install Edge",
        software: "Edge",
        url: "../edge/install/",
    },
    {
        name: "How to Install Firefox",
        software: "Firefox",
        url: "../firefox/install/",
    },
    {
        name: "How to Install Chrome",
        software: "Chrome",
        url: "../chrome/install",
    },
    {
        name: "How to Install Whatsapp",
        software: "Whatsapp",
        url: "../whatsapp/install",
    },
    {
        name: "How to Use Whatsapp on a Computer",
        software: "Whatsapp",
        url: "../whatsapp/use-on-pc",
    },
    {
        name: "Meeting Controls Icons",
        software: "Teams",
        url: "../teams/meeting-controls",
    },
    {
        name: "How to Share Your Screen",
        software: "Teams",
        url: "../teams/share-screen",
    },
    {
        name: "How to Install Teams",
        software: "Teams",
        url: "../teams/install",
    },{name: "Record a Meeting",        software: "Teams",        url: "../teams/record-meeting"},
];

// Get the search terms (from the query string)

let searchFilters = { query: "", software: "" };
let splitQueryString = document.URL.split("?").pop();
if (splitQueryString.length != 0) {
    splitQueryString = splitQueryString.split("&");
    if (
        splitQueryString.length > 0 &&
        splitQueryString[0].substring(0, 6) == "query="
    ) {
        qq = splitQueryString[0].substring(6).toLowerCase();
        searchFilters.query = decodeURI(qq);
    }
    if (
        splitQueryString.length > 1 &&
        splitQueryString[1].substring(0, 9) == "software="
    ) {
        searchFilters.software = splitQueryString[1].substring(9).toLowerCase();
    }
}

// Edit page title depending on if they searched for something
if (searchFilters.query == "") {
    document.getElementById("includeQuery").remove();
} else {
    document.getElementById("searchQuery").innerHTML = searchFilters.query;
}

// Filter out stuff

if (searchFilters.query != "") {
    // https://stackoverflow.com/questions/7948689/using-js-jquery-to-do-string-search-fuzzy-matching
    // Not sure what's a simple way to do filtering
    for (let i = tutorialsDB.length - 1; i >= 0; i--) {
        tut = tutorialsDB[i];

        tutName = tut.name.toLowerCase();
        searchTerms = searchFilters.query.toLowerCase();
        //Check if it's a substring somewhere in the tutorial name

        if (tutName.indexOf(searchTerms) == -1) {
            tutorialsDB.splice(i, 1);
        }
    }
}

if (searchFilters.software != "") {
    //Software
    for (let i = tutorialsDB.length - 1; i >= 0; i--) {
        let tutorialDbEntry = tutorialsDB[i];

        if (
            tutorialDbEntry.software.toLowerCase() !=
            searchFilters.software.toLowerCase()
        ) {
            tutorialsDB.splice(i, 1);
        }
    }
}

// ===== Fill the Search Results with entries
entriesBoxHTML = document.getElementById("searchResEntries");
tutorialsDB.forEach(function (tut) {
    tutEntry = document.createElement("div");
    tutEntry.classList.add("box");

    softwLogo = document.createElement("img");
    softwLogo.src = software2logourl[tut.software];
    tutEntry.appendChild(softwLogo);

    textDiv = document.createElement("div");

    h3title = document.createElement("h3");
    h3a = document.createElement("a");
    h3a.href = tut.url;
    h3a.innerText = tut.name;
    h3title.appendChild(h3a);
    textDiv.appendChild(h3title);

    pSoftwareName = document.createElement("p");
    pSoftwareName.innerText = tut.software;
    textDiv.appendChild(pSoftwareName);

    tutEntry.appendChild(textDiv);

    entriesBoxHTML.appendChild(tutEntry);
});
