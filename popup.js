document.getElementById("entry").addEventListener("blur", savetxt, false);
document.getElementById("titleBox").addEventListener("blur", savetitle, false);

function savetitle() {
	title = [];
	var title_text = document.getElementById("titleBox").value;
	
	/** saves text entered to the local storage. **/
	title.push(title_text);
	localStorage.setItem("title", JSON.stringify(title));	
}

function savetxt() {
	content = [];
	var entry_text = document.getElementById("entry").value;
    
	/** saves text entered to the local storage. **/
	content.push(entry_text);
	localStorage.setItem("content", JSON.stringify(content));
}

/** saved text is immediately visible and ready to be edited */
document.getElementById("titleBox").value = JSON.parse(localStorage.getItem("title")) || [];;
document.getElementById("entry").value = JSON.parse(localStorage.getItem("content")) || [];
