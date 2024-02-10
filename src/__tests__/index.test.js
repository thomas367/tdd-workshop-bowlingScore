const bowlingScore = require("../index.js");

describe("it returns the score in all cases", () => {
  test("it returns empty array no throws yet", () => {
    //ACT
    const throws = [];

    //ASSERT
    expect(bowlingScore(throws)).toStrictEqual(0);
  });

  test("it returns the score of 1st throw", () => {
    //ACT
    const throws = [4];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(4);
  });

  test("it returns the calculated score of after the 1st frame (1st + 2nd)throw", () => {
    //ACT
    const throws = [4, 4];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(8);
  });

  test("it returns the calculated score of start 2nd frame with no spare at 1st frame", () => {
    //ACT
    const throws = [4, 4, 3];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(11);
  });

  test("it returns the calculated score with spare at 1st frame", () => {
    //ACT
    const throws = [4, 6, 4, 2, 1, 3, 4, 2];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(30);
  });

  test("it returns the score with spare at 1st frame again", () => {
    //ACT
    const throws = [4, 6, 3, 2, 8, 1];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(27);
  });

  test("it returns the calculated score with two spares in a row", () => {
    //ACT
    const throws = [4, 6, 2, 8, 1, 5];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(29);
  });

  test("it returns the calculated score with a simple strike", () => {
    //ACT
    const throws = [10, 4, 2];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(22);
  });

  test("it returns the calculated score with 3 strike in a row", () => {
    //ACT
    const throws = [10, 10, 10];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(60);
  });

  test("it returns the calculated score with a strike followed by a spare", () => {
    //ACT
    const throws = [10, 2, 8, 4, 4];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(42);
  });

  test("it returns the calculated score with a spare followed by a strike", () => {
    //ACT
    const throws = [4, 6, 10, 3, 3];

    //ASSERT
    expect(bowlingScore(throws)).toEqual(42);
  });

  test("it returns the calculated score. CHALLENGES!!!", () => {
    //ACT
    const player1 = [10, 7, 3, 9, 0, 10, 0, 8, 8, 2, 0, 6, 10, 10, 10, 8, 1];               
    const player2 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10,
    ];
    const player3 = [
      5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    ];
    const player4 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    //ASSERT
    expect(bowlingScore(player1)).toEqual(167);
    expect(bowlingScore(player2)).toEqual(30);
    expect(bowlingScore(player3)).toEqual(150);
    expect(bowlingScore(player4)).toEqual(300);
  });
});
