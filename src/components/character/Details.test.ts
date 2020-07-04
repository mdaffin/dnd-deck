import fc from "fast-check";
import { shallowMount } from "@vue/test-utils";
import Details from "./Details.vue";

describe("Details", () => {
  test.each([
    ["name"],
    ["playerName"],
    ["race"],
    ["subrace"],
    ["gender"],
    ["age"],
  ])("passed in property %s should be displayed", (property) => {
    fc.assert(
      fc.property(fc.string(), (value) => {
        const propsData = { details: {} };
        propsData.details[property] = value;
        const wrapper = shallowMount(Details, { propsData });
        expect(wrapper.find(`#${property}`).text()).toBe(value.trim());
      })
    );
  });
});
