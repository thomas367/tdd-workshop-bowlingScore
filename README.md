# TDD workshop - Bowling Score

## Scoring Rules

- There are 10 turns called frames. Each frame begins with 10 pins, and the bowler gets up to two tries to knock them all over.

- One point is scored for each pin that is knocked over, and when fewer than all ten pins are knocked down in two rolls in a frame (an open frame), the frame is scored with the total number of pins knocked down.

- Strike: When all ten pins are knocked down on the first roll, the frame receives ten pins plus the next two rolls (not frames!). A strike in the tenth (final) frame receives two extra rolls as a bonus.

- Spare: When the second roll of a frame knocks down all pins, the frame receives ten pins plus the next roll. A spare in the tenth (final) frame receives a third roll as a bonus.

- Bonus pins: No additional rolls are received for a strike/spare in the bonus balls.

### Bowling Rolls Examples
---

**Example 1:** `[5]` results in a score of **5**.

**Example 2:** `[2,4]` results in a score of **6**.

**Example 3:** `[3,4,2]` results in a score of **9**.

**Example 4:** `[3,7,2]` results in a score of **14**, where the score includes a spare in the first frame (**10** + **2** from the next roll) and the roll of **2** in the second frame.

**Example 5:** `[10,4,1]` results in a score of **20**, where the score includes a strike in the first frame (**10** + **4** + **1** from the next two rolls) and the rolls of **4** and **1** in the second frame.

**A completed game:** `[9, 0, 7, 3, 10, 4, 2, 8, 2, 10, 10, 9, 0, 8, 2, 9, 1, 4]` results a score of **161**.
