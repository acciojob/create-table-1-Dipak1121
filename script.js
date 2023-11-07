let table = document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
	td1.innerText = "New Cell1";
	tr.appendChild(td1);
	td2.innerText = "New Cell2";
	tr.appendChild(td2);
	let child = table.children;
	table.insertBefore(tr, child[0]);
}
