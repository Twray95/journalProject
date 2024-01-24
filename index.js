const {
  JournalPost,
  Comment,
  createJournalEntry,
} = require("./lib/journalPost");
const journalForm = document.getElementById("journalForm");

console.log(JournalPost);
console.log(Comment);

const post1 = new JournalPost(
  "Thomas",
  "Test Post Creation",
  "I am just testing the JournalPost class"
);

const comment1 = new Comment("Wray", "This is a comment", 5);

post1.addComment(comment1);

console.log(post1);

journalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  createJournalEntry();
});
