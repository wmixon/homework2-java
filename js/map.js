var height = [Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1];
var picName = ["gold.jpg", "water.jpg", "sky.jpg", "dirt.jpg", "grass.jpg"];
var columnLength = Math.floor(Math.random() * 5) + 1;
var goldAndWater = [];
var gold = 0, water = 0;
var ran, len, test, sum;


// Begin the game whent he page is fully loaded
window.onload = startGame();

function add(a, b) {
    return a + b;
}


function startGame(){
    console.log(height);
     //$("#main").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
     $("#main").append("<table cellspacing='0' cellpadding='0'>");
    for(var iii = 0; iii < 8; iii++){
        $("#main").append("<tr style='margin=0'>");
        for(var ii = 0; ii < 10; ii++){
            if(iii >= height[ii]){
                if(iii == (height[ii]) + 4){
                    ran = Math.floor(Math.random() * 2);
                    $("#main").append("<td><img src='img/" + picName[ran] + "'/></td>");
                    goldAndWater.push(ran);
                }
                else{
                    $("#main").append("<td><img src='img/dirt.jpg'/></td>");
                }
            }
            else if(iii == (height[ii]) - 1){
                 $("#main").append("<td><img src='img/grass.jpg'/></td>");
            }
            else{
                $("#main").append("<td><img src='img/sky.jpg'/></td>");
            }
        }
    $("#main").append("</tr>");
    }
    $("#main").append("</table>");
    
    len = goldAndWater.length;
    for(var i = 0;  i < len; i++){
        test = goldAndWater.pop();
        if(test == 0){
            gold++;
        }
        else{
            water++;
        }
    }
    $("#main").append("<h2>Gold: " + gold + " Water: " + water + "</h2>");
    sum = height.reduce(add, 0);
    $("#main").append("<h3>Win: " + (sum * gold)/(water+.01) + " points!</h3>");
    //$("#main").append("");
    $("#main").append("<form><input type='submit' value='Generate!'/></form>");
    $("#main").append("<br><br>");
    $("#main").append("&copy; Mixon 2017. <br/> Disclaimer: The information on this page might not be accurate. It's used for academic purposes. <br/><img src='img/csumb-logo.png' alt='CSUMB Logo' />");
}
