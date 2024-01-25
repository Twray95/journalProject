const journalEl = document.getElementById("journalCard");
const submitBtn = document.getElementById("submitBtn");

//fetch request to grab past journal entries
const getJournals = () =>
  fetch("/journals", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);

//code here for grabbing post data from db

//create journal entry with form element
createJournalEntry = () => {
  let authName = document.getElementById("authName");
  let journalTitle = document.getElementById("title");
  let journalText = document.getElementById("text");
  let parent = document.getElementById("journalList");
  let newJournalTitle = document.createElement("h4");
  let newJournalBody = document.createElement("p");

  newJournalTitle.textContent = `${journalTitle.value} by ${authName.value}`;
  newJournalBody.textContent = `${journalText.value}`;

  console.log(newJournalTitle);

  parent.appendChild(newJournalTitle);
  parent.appendChild(newJournalBody);

  authName.value = "";
  journalTitle.value = "";
  journalText.value = "";
};

journalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  createJournalEntry();
});
