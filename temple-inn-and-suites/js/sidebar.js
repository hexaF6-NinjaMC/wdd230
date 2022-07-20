function openSidebar() {
    document.querySelector(".sidebar").style.width = "250px";
    document.querySelector("#content").style.marginLeft = "250px";
    document.querySelector(".toggler").setAttribute("onclick", "closeSidebar()");
}

function closeSidebar() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector("#content").style.marginLeft = "0";
    document.querySelector(".toggler").setAttribute("onclick", "openSidebar()");
}