class PostItem {
  constructor(authName, text, createdOn) {
    this.authName = authName;
    this.text = text;
  }
}

class JouralPost extends PostItem {
  constructor(authName, title, text, createdOn) {
    if (authName.length < 3) {
      throw new Error(`Name must contain at least 3 characters`);
    }
    if (title.length < 5) {
      throw new Error(`Title must contain at least 5 characters`);
    }
    if (text.length < 10) {
      throw new Error("Text must be more than 10 characters");
    }
    if (createdOn instanceof Date) {
      this.createdOn = Date;
    } else {
      this.createdOn = new Date(createdOn);
    }
    super(authName, text);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends PostItem {
  constructor(authName, text, rating) {
    super(authName, text);
    this.rating = rating;
  }
}
