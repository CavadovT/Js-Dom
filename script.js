/*
1,Html hissəsində iki dənə list olacaq daha sonra 
js hissəsində bu iki listin elementlərini götürüb birləşdirib
 yeni bir list yaradıb ona əlavə edəcəksiniz və təkrarlanan elementlər
  varsa onlardan sadəcə biri yeni listə əlavə olumalıdı.
Məsələn
List1:
c#
js
c++

List2:
c#
ruby
go

NewList
c#
js
c++
ruby
go

Yuxarıdakı misalda c# iki listdədə var amma yeni yaranan listdə sadəcə biri olur */
let divtask1=document.getElementById("task1");
divtask1.style.background="aliceblue"
let list1 = document.getElementById("first-list");
let list2 = document.getElementById("second-list");
let div = document.getElementById("thirdDiv");
let btn = document.getElementById("joinList");
let arrOflist1 = list1.innerText.split("\n");
let arrOflist2 = list2.innerText.split("\n");
let arrOfnewlist = [...arrOflist1, ...arrOflist2];
let arrlist = [...new Set(arrOfnewlist)]; // ve yaxud bunu reduce ilede yazardim

btn.onclick = function () {
  let newlist = document.createElement("ul");
  div.innerText = "list-3";

  for (let i = 0; i < arrlist.length; i++) {
    let listitems = document.createElement("li");
    listitems.classList.add("list-group-item");
    listitems.append(arrlist[i]);
    newlist.classList.add("list-group");
    newlist.append(listitems);
    div.append(newlist);
  }
};

/*

sekil
 */

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")

let firstInput = document.getElementById("first-input")

let secondInput = document.getElementById("second-input")

let resultInput = document.getElementById("result-input")


plusBtn.onclick = function () {
    resultInput.value = parseInt(firstInput.value) + parseInt(secondInput.value);
}

minusBtn.onclick = function () {
    resultInput.value =firstInput.value-secondInput.value
}

multiplyBtn.onclick = function () {
  resultInput.value =firstInput.value*secondInput.value;
}

divideBtn.onclick = function () {
  resultInput.value =firstInput.value/ secondInput.value; 
}

