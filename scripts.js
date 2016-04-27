/**
 * Created by bbochicchio95 on 4/27/2016.
 */
function changeContent() {
  //get the value of the input box
  var str = document.getElementById("stringToChange").value;
  // check to see if lowercase is checked
  if (document.getElementById("makeLower").checked) {
    str = str.toLowerCase();
  }
  // replace all spaces in the string with underscores
  // Get regex help at https://regex101.com
  if (document.getElementById("replaceSpaces").checked) {
    str = str.replace(/\s/g, "_");
  }

  if (document.getElementById("addPDF").checked) {
    str = str + ".pdf";
  }

  if (document.getElementById("addDOC").checked) {
    str = str + ".doc";
  }
  if (document.getElementById("addDOCX").checked) {
    str = str + ".docx";
  }
  if (document.getElementById("addXLS").checked) {
    str = str + ".xls";
  }
  if (document.getElementById("addXLSX").checked) {
    str = str + ".xlsx";
  }
  if (document.getElementById("addHTML").checked) {
    str = str + ".html";
  }
  // Write the value of str into the paragraph tag
  document.getElementById("changedString").innerHTML = str;

}