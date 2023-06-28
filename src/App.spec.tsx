import App from "./App";
import { render, screen } from "@testing-library/react";

describe("<App/>", () => {
  it("should be render", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
