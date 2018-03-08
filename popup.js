document.getElementById("entry").addEventListener("blur", save, false);
var content = JSON.parse(localStorage.getItem("content")) || [];



function save() {
	content = [];
	var entry_text = document.getElementById("entry").value;
    
	/** saves text entered to the local storage. **/
	content.push(entry_text);
	localStorage.setItem("content", JSON.stringify(content));
	
	
	setTimeout(function() {
		document.querySelector('.status .value').innerHTML = "";
	}, 2000); 
}

/** saved text is immediately visible and ready to be edited **/
document.getElementById("entry").value = content;