import React from "react";
import CardBack from "./CardBack";
import { shallow } from "enzyme";

describe("CardBack test", () => {
  let component;
  beforeEach(() => {
    component = shallow(<CardBack />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
