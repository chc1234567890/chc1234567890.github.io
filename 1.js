var Height = 5616, Width = 2160;
var paths;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        paths = JSON.parse(this.responseText);
        document.getElementById("p1").innerHTML = paths[0].name;
    }
};
xmlhttp.open("GET", "/region_data.json", true);
xmlhttp.send();
