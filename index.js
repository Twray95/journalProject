// import { JournalPost, Comment, createJournalEntry } from "./lib/journalPost";
// const journalForm = document.getElementById("journalForm");

// console.log(JournalPost);
// console.log(Comment);

// const post1 = new JournalPost(
//   "Thomas",
//   "Test Post Creation",
//   "I am just testing the JournalPost class"
// );

// const comment1 = new Comment("Wray", "This is a comment", 5);

// post1.addComment(comment1);

// console.log(post1);

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
