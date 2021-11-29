/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//Dynamically creates the student elements and adds them to the page.
function showPage(list, page) {
  let startIndex = page * 9 - 9;
  let endIndex = page * 9;

  studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let li = document.createElement("LI");
      li.className = "student-item of";

      let detailsDiv = document.createElement("DIV");
      detailsDiv.className = "student-details";

      let img = document.createElement("IMG");
      img.className = "avatar";
      img.src = list[i].picture.large;
      img.alt = "profile Picture";

      let h3 = document.createElement("H3");
      h3.innerHTML = `${list[i].name.first}  ${list[i].name.last}`;

      let emailSpan = document.createElement("SPAN");
      emailSpan.className = "email";
      emailSpan.innerHTML = `Email: ${list[i].email}`;

      detailsDiv.appendChild(img);
      detailsDiv.appendChild(h3);
      detailsDiv.appendChild(emailSpan);
      li.appendChild(detailsDiv);

      let joinedDiv = document.createElement("DIV");
      joinedDiv.className = "joined-details";

      let joinedSpan = document.createElement("SPAN");
      joinedSpan.className = "date";
      joinedSpan.innerHTML = `Joined ${list[i].registered.date}`;

      joinedDiv.appendChild(joinedSpan);

      li.insertAdjacentHTML("beforeend", joinedDiv.innerHTML);

      studentList.appendChild(li);
    }
  }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

/*
gets the length of list
divides the length by 9, for the total number of buttons
creates and adds the buttons to page
adds an event listener, that calls showPage with data and the number clicked.
*/

function paginationButtons(list) {
  let linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  let numButtons = Math.ceil(list.length / 9);

  for (let i = 1; i < numButtons + 1; i++) {
    let li = document.createElement("LI");
    let button = document.createElement("INPUT");
    button.type = "button";
    button.value = i;

    linkList.appendChild(button);
  }

  linkList.childNodes[0].className = "active";

  linkList.addEventListener("click", (e) => {
    if ((e.target.type = "button")) {
      for (let i = 0; i < linkList.childNodes.length; i++) {
        linkList.childNodes[i].className = "";
      }
      e.target.className = "active";
      showPage(data, e.target.value);
    }
  });
}

// Call functions
showPage(data, 1);
paginationButtons(data);
