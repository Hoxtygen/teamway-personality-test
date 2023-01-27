import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Test from "./Test";

describe("Test Component", () => {
  it("should render the test component", () => {
    render(
      <Router>
        <Test />
      </Router>
    );
    expect(
      screen.getByText(
        "You’re really busy at work and a colleague is telling you their life story and personal woes. You:"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Personality Test")).toBeInTheDocument();
  });

  it("should check a radio button", () => {
    render(
      <Router>
        <Test />
      </Router>
    );
    const radButton = screen.getByLabelText(
      "Listen, but with only with half an ear"
    );
    fireEvent.click(radButton);
    expect(radButton).toBeChecked();
  });
  it("should get the value of a radio button", () => {
    render(
      <Router>
        <Test />
      </Router>
    );
    const radButton = screen.getByLabelText(
      "Listen, but with only with half an ear"
    );
    fireEvent.change(radButton, { target: { value: 2 } });
    expect(radButton.value).toBe("2");
  });
});
