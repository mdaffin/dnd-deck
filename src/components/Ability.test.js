import { shallowMount } from "@vue/test-utils";
import Ability from "~/components/Ability.vue";

describe("Ability", () => {
  it.each([
    [0, "-5"],
    [1, "-5"],
    [2, "-4"],
    [3, "-4"],
    [4, "-3"],
    [5, "-3"],
    [6, "-2"],
    [7, "-2"],
    [8, "-1"],
    [9, "-1"],
    [10, "+0"],
    [11, "+0"],
    [12, "+1"],
    [13, "+1"],
    [14, "+2"],
    [15, "+2"],
    [16, "+3"],
    [17, "+3"],
    [18, "+4"],
    [19, "+4"],
    [20, "+5"]
  ])(
    "value %i should create mod %i ((value - 10)/2) rounded down",
    (value, mod) => {
      const wrapper = shallowMount(Ability, { propsData: { value } });
      expect(wrapper.get(".mod").text()).toBe(mod);
    }
  );
});
