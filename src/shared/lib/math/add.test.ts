import { describe, expect, it } from "vitest";

import { add } from "./add";

describe("sum", () => {
  it("should sum numbers", () => {
    // Arrange
    const firstNumber = 2;
    const secondNumber = 2;

    // Act
    const total = add(firstNumber, secondNumber);

    //Assert
    expect(total).toBe(4);
  });
});
