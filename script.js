// let table = document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
 //  let tr = document.createElement("tr");
 //  let td1 = document.createElement("td");
 //  let td2 = document.createElement("td");
	// td1.innerText = "New Cell1";
	// tr.appendChild(td1);
	// td2.innerText = "New Cell2";
	// tr.appendChild(td2);
	// let child = table.children;
	// table.insertBefore(tr, child[0]);
	 // Get a reference to the table element by its ID
  var table = document.getElementById("sampleTable");

  // Create a new row element
  var newRow = table.insertRow(0); // 0 means the new row will be inserted at the top

  // Create two cells for the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Set the content of the new cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
