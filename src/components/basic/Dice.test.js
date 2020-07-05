import { shallowMount } from "@vue/test-utils";
import Dice from "~/components/basic/Dice.vue";

describe("Dice", () => {
  it("Number of dice should not be <= 0", () => {
    const wrapper = shallowMount(Dice);
    wrapper.setProps({ count: -1, sides: 20, modifier: 0 });
    expect(wrapper.vm.rollDice).toThrow("The number of dice cannot be <= 0");
  });
  it("Die type should not be <= 0", () => {
    const wrapper = shallowMount(Dice);
    wrapper.setProps({ count: 1, sides: 0, modifier: 0 });
    expect(wrapper.vm.rollDice).toThrow("The die type cannot be <= 0");
  });
});
