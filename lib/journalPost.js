class PostItem {
  constructor(authName, text, createdOn) {
    this.authName = authName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

class JouralPost extends PostItem {
  constructor(authName, title, text, createdOn) {
    super(authName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends PostItem {
  constructor(authName, text, createdOn, rating) {
    super(authName, text, createdOn);
    this.rating = rating;
  }
}
