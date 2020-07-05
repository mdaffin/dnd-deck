import fc from "fast-check";
import { shallowMount } from "@vue/test-utils";
import Ability from "./Ability.vue";

describe("Ability", () => {
  test.each([[10], [11]])("the value of %i should have a mod of 0", (value) => {
    const wrapper = shallowMount(Ability, {
      propsData: { value: value },
    });
    const mod = parseInt(wrapper.find(".mod").text(), 10);
    expect(mod).toBe(0);
  });

  it("have a modifier that incroments by 1 when the value increases by 2", () => {
    fc.assert(
      fc.property(fc.integer(), (value) => {
        const lowerWrapper = shallowMount(Ability, {
          propsData: { value: value },
        });
        const higherWrapper = shallowMount(Ability, {
          propsData: { value: value + 2 },
        });
        const lowerMod = parseInt(lowerWrapper.find(".mod").text(), 10);
        const higherMod = parseInt(higherWrapper.find(".mod").text(), 10);
        expect(lowerMod + 1).toBe(higherMod);
      })
    );
  });
});
