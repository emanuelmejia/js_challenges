window.onload = function () {
  let who = [
    "The dog",
    "The mailman",
    "My bird",
    "Batman",
    "Aliens",
    "Abe Lincoln's ghost",
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "pulverized",
    "blew up",
    "hijacked",
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my computer",
    "my house",
    "my grandma",
  ];
  let when = [
    "before class",
    "when I was sleeping",
    "while I was studying",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let ranWho = Math.floor(Math.random() * who.length);
  let ranAct = Math.floor(Math.random() * action.length);
  let ranWhat = Math.floor(Math.random() * what.length);
  let ranWhen = Math.floor(Math.random() * when.length);

  excuse = `${who[ranWho]} ${action[ranAct]}  ${what[ranWhat]} ${when[ranWhen]}`;
  document.querySelector("#generatedExcuse").innerHTML = excuse;
};
