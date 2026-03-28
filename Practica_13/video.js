class LikeSystem {
  constructor() {
    this.likes = 0;
  }
  like() {
    this.likes++;
  }
  dislike() {
    this.likes--;
  }
  setLikes(value) {
    this.likes = value;
  }
  getLikes() {
    return this.likes;
  }
}

class Comment {
  constructor(user = "", comm = "") {
    this.user = user;
    this.comm = comm;
    this.likes = new LikeSystem();
  }
  printComment() {
    console.log(`${this.user}: ${this.comm}`);
  }
}

class Video {
  constructor(seconds = 0, name = "") {
    this.seconds = seconds % 60;
    this.minutes = Math.floor(seconds / 60);
    this.name = name;
    this.likes = new LikeSystem();
    this.comments = [];
  }
  getCommentsNum() {
    console.log(this.comments.length);
  }
  printTime() {
    console.log(`${this.minutes}:${this.seconds}`);
  }
  like() {
    this.likes.like();
  }
  dislike() {
    this.likes.dislike();
  }
  addComment(comment) {
    this.comments.push(comment);
  }
  printComments() {
    for (let comment of this.comments) {
      comment.printComment();
    }
  }
  getLikes(){
    return this.likes.getLikes();
  }
}


const com1 = new Comment("Nestor", "Primer Comentario");
const com2 = new Comment("User123", "Buen video");
const com3 = new Comment("juanPro", "Nuevo Sub :)");
const video1 = new Video(150,"Tutorial: Como dormir");
const video2 = new Video(230,"Tutorial: Como despertar");

com1.printComment();
com2.printComment();
com3.printComment();
console.log(`El video1 tiene ${video1.getLikes()} likes`);
video1.printTime();
video1.addComment(com1);
video1.addComment(com2);
video1.printComments(); // va a imprimir 3 comentarios
console.log(`El video2 tiene ${video2.getLikes()} likes`);
video2.printTime();
video2.addComment(com3);
video2.addComment(com2);
video2.addComment(com1);
video2.printComments(); // va a imprimir 3 comentarios
