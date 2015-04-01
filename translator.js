function getword(info,tab) {
	
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({ 
		
		//url: "http://pl.bab.la/slownik/polski-angielski/" + info.selectionText,
		//url: "http://www.wordreference.com/enpl/" + info.selectionText,
        url: "https://www.diki.pl/slownik-angielskiego/?q=" + info.selectionText,


    })

		
}

chrome.contextMenus.create({

	title: "Translate: %s", 
	contexts:["selection"], 
	onclick: getword,

});
