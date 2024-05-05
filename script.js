function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "#aaaaaa";
        tablinks[i].style.borderBottom = "3px solid transparent"
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.color = "#dcdcdc";
    elmnt.style.borderBottom = "3px solid #dcdcdc"
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();