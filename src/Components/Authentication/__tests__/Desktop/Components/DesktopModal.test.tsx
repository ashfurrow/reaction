import { mount } from "enzyme"
import React from "react"
import Events from "Utils/Events"
import Icon from "../../../../Icon"
import { DesktopModal } from "../../../Desktop/Components/DesktopModal"

jest.mock("Utils/Events")

describe("DesktopModal", () => {
  const getWrapper = (props: any = {}) =>
    mount(
      <DesktopModal tracking={props.tracking} onClose={jest.fn()} show>
        <div>Modal Contents</div>
      </DesktopModal>
    )

  it("renders children", () => {
    const wrapper = getWrapper()
    expect(wrapper.html()).toMatch("Modal Contents")
  })

  it("renders a subtitle", () => {
    const wrapper = mount(
      <DesktopModal subtitle="Test Subtitle" onClose={jest.fn()} show>
        <div>Modal Contents</div>
      </DesktopModal>
    )
    expect(wrapper.text()).toMatch("Test Subtitle")
  })

  describe("Analytics", () => {
    it("tracks close", () => {
      const wrapper = getWrapper()
      wrapper
        .find(Icon)
        .at(0)
        .simulate("click")

      expect(Events.postEvent).toBeCalledWith({
        action: "Click",
        flow: "auth",
        label: "dismiss auth modal",
        type: "dismiss",
      })
    })
  })
})
