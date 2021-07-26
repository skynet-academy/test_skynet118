let my_char = "X";
let turn = 1;
let area = [
    ["*", "*", "*"];
    ["*", "*", "*"];
    ["*", "*", "*"];
            ];
document.querySelector(".check").onclick = function(){
    //let rows = document.querySelectorAll("tr");
    //let cells = rows[0].querySelectorAll("td");
    //console.log(cells);
    //console.log(cells[0]);
    //let cell = cells[0];
    //console.log(cell);
    let row = document.querySelector(".row").value;
    let column = document.querySelector(".column").value;
    let rows = document.querySelectorAll("tr");
    let cells = rows[row].querySelectorAll("td");
    let cell = cells[column];
    //cell.innerHTML = char;
    turn +=1;

    if(char == "X"){
        cell.style.backgroundColor = "gray";
        cell.style.color = "white";
    }
    else if(char == "O"){
        cell.style.backgroundColor = "brown";
        cell.style.color = "white";
    }

    if(turn % 2 == 1){
        my_char = "X";
    }
    else{
        my_char = "O";
    }

    document.querySelector("span").innerHTML = char;
}
