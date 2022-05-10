import makeWordleGuess from "./makeWordleGuess";

test("marks each letter of LULLS with grey, amber, or green", () => {
  expect(makeWordleGuess("LULLS", "LEVEL")).toEqual([{letter:'L', colour:'GREEN'},{letter:'U',colour:'GREY'},{letter:'L', colour:'AMBER'}, {letter:'L', colour:'GREY'}, {letter:'S', colour:'GREY'}]);
});

test("marks each letter of COVER with grey, amber, or green", () => {
  expect(makeWordleGuess("COVER", "RODEO")).toEqual([{letter:'C', colour:'GREY'},{letter:'O',colour:'GREEN'},{letter:'V', colour:'GREY'}, {letter:'E', colour:'GREEN'}, {letter:'R', colour:'AMBER'}]);
});
