var num = +prompt("Enter the Number");
for (i=1;i<=num;i++){
    console.log( "Table of :" + " " + i);
    document.write(  "<h1>Table of :" + " " + i + "<br>" + "<hr>" );
    for (j=1;j<=10;j++){
        console.log(i + "x" + j + "=" + i*j );
        document.write(i + "x" + j + "=" + i*j + "<br>")
    }
    document.write("<br>")
}
    
