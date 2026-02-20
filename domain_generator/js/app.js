let pronoun = ["the", "our", "one"];
let adj = ["great", "big", "sexy", "hairy"];
let noun = ["jogger", "racoon", "developer"];
let exten = [".com", ".net", ".us", ".io"];

for (let e = 0; e < exten.length; e++) {
  for (let n = 0; n < noun.length; n++) {
    for (let a = 0; a < adj.length; a++) {
      for (let p = 0; p < pronoun.length; p++) {
        console.log(pronoun[p] + adj[a] + noun[n] + exten[e]);
      }
    }
  }
}
