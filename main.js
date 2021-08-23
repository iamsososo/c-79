var student_array=[];
function submit(){
    var name_1=document.getElementById("name_1").value;
    student_array.push(name_1);
    var name_2=document.getElementById("name_2").value;
    student_array.push(name_2);
    var name_3=document.getElementById("name_3").value;
    student_array.push(name_3);
    var name_4=document.getElementById("name_4").value;
    student_array.push(name_4);
    console.log(student_array);
    document.getElementById("output").innerHTML=student_array;
    document.getElementById("but_1").style.display="none";
    document.getElementById("but_2").style.display="inline-block";

}
function sorty(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("output").innerHTML=student_array;
}