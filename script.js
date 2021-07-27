// Function to switch between tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContents, tabLinks;

    // Get all elements with class "tabcontent" and hide them
    tabContents = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all elements with class "tablink" and remove the class "active"
    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
