import React from "react";
import { shallow } from "enzyme";
import Card from ".";

describe("card test", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Card />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
