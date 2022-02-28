import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

describe("button test", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Button />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
