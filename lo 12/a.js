var p = [1, 2, 3, 4, 5, 6]
p[1] = 1;
p[2] = 2;
p[3] = 3;
p[4] = 4;
p[5] = 5;
p[6] = 6;

var r = [1, 2, 3, 4, 5, 6]
r[1] = 1;
r[2] = 2;
r[3] = 3;
r[4] = 4;
r[5] = 5;
r[6] = 6;


r[1] = Math.floor(Math.random() * 45) + 1;
document.write(r[1]);
document.write("<hr>");
while (true) {
    r[2] = Math.floor(Math.random() * 45) + 1;
    if (r[1] != r[2]) {
        document.write(r[2]);
        document.write("<hr>");
        break;
    }
}
while (true) {
    r[3] = Math.floor(Math.random() * 45) + 1;
    if (r[3] != r[1] && r[3] != r[2]) {
        document.write(r[3]);
        document.write("<hr>");
        break;
    }
}
while (true) {
    r[4] = Math.floor(Math.random() * 45) + 1;
    if (r[4] != r[1] && r[4] != r[2] && r[4] != r[3]) {
        document.write(r[4]);
        document.write("<hr>");
        break;
    }
}
while (true) {
    r[5] = Math.floor(Math.random() * 45) + 1;
    if (r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]) {
        document.write(r[5]);
        document.write("<hr>");
        break;
    }
}
while (true) {
    r[6] = Math.floor(Math.random() * 45) + 1;
    if (r[6] != r[1] && r[6] != r[2] && r[6] != r[3] && r[6] != r[4] && r[6] != r[5]) {
        document.write(r[6]);
        document.write("<hr>");
        break;
    }
}

var b
while (true) {
    b = Math.floor(Math.random() * 45) + 1;
    if (b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5] && b != r[6]) {
        document.write("보너스번호:" + b);
        document.write("<hr>");
        break;
    }
}
var win = 0;

for (i = 1; i <= 6; i = i + 1) {
    for (j = 1; j <= 6; j = j + 1) {
        if (p[i] == r[j]) {
            win = win + 1;
        }
    }
}


document.write("맞은 번호 갯수:" + win + "<br>");
var co = "";
switch (win) {
    case 0:
    case 1:
    case 2:
        co = "꽝";
        break;
    case 3:
        co = "5등";
        break;
    case 4:
        co = "4등";
        break;
    case 5:
        co = "3등";
        for(i=1;i<=6;i=i+1){
            if(b == p(i)){
                co="2등";
            }
        }
        break;
    case 6:
        co = "1등";
        break;
}
document.write(co);