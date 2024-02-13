const journalEl = document.getElementById("journalCard");
const generateBtn = document.getElementById("generateBtn");

//fetch request to grab past journal entries
const getJournals = () =>
  fetch("/api/journal", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);

const renderJournal = (entry) => {
  //code here for rendering a card with entry data
  console.log(entry.title);
  let parent = document.getElementById("journalList");
  let newJournal = document.createElement("div");
  let newTitle = document.createElement("h3");
  let newEntry = document.createElement("p");
  newTitle.innerHTML = `${entry.title} by ${entry.authName}`;
  newEntry.innerHTML = entry.text;
  newJournal.appendChild(newTitle);
  newJournal.appendChild(newEntry);
  parent.appendChild(newJournal);
};

//Take data from getJournals() and use it to render journal entry elements with renderJournal
const btnHandler = () => {
  return getJournals().then((response) =>
    response.forEach((item) => renderJournal(item))
  );
};

//Event listener to kick it all off
generateBtn.addEventListener("click", btnHandler);

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
