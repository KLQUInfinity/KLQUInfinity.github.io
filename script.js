function openPage(pageName, elmnt) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var nav = document.getElementById("navigation");
    for (const child of nav.children) {
        if (child.className == "activtablink") {
            child.classList.replace("activtablink", "tablink")
        }
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.classList.replace("tablink", "activtablink");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();