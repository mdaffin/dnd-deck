import YAML from "yaml";

function expandCharRace(state, charRace) {
  const race = state.races.find(
    (r) => r.name.toLowerCase() === charRace.name.toLowerCase()
  );

  if (charRace.subrace) {
    const subrace = race.subraces.find(
      (r) => r.name.toLowerCase() === charRace.subrace.name.toLowerCase()
    );

    if (!subrace) {
      throw `Subrace not found: '${charRace.subrace}'`;
    }

    return {
      name: subrace.name,
      features: race.features.concat(subrace.features),
    };
  }

  return {
    name,
    features,
  };
}

function expandCharacter(state, { name, player, gender, race }) {
  return {
    name,
    player,
    gender,
    race: expandCharRace(state, race),
    abilityScores: {
      strength: 13,
      dexterity: 14,
      consitiution: 14,
      intelligence: 13,
      wisdom: 12,
      charisma: 13,
    },
  };
}

export const state = () => ({
  characters: [],
  races: [],
  classes: [],
  backgrounds: [],
});

export const mutations = {
  addCharacters: (state, characters) => {
    state.characters = state.characters.concat(
      characters.map((c) => expandCharacter(state, c))
    );
  },
  addRaces: (state, r) => (state.races = state.races.concat(r)),
  addClasses: (state, c) => (state.classes = state.classes.concat(c)),
  addBackgrounds: (state, b) =>
    (state.backgrounds = state.backgrounds.concat(b)),
};

export const actions = {
  async fetchData({ commit }) {
    const data = YAML.parse((await this.$axios.get("/data.yaml")).data);
    if (data.races) {
      commit("addRaces", data.races);
    }
    if (data.classes) {
      commit("addClasses", data.classes);
    }
    if (data.backgrounds) {
      commit("addBackgrounds", data.backgrounds);
    }
    if (data.characters) {
      commit("addCharacters", data.characters);
    }
  },
};

export const methods = {
  character: (state, name) => {
    const { raceName, ...character } = state.characters.find(
      (c) => c.name.toLowerCase() == name.toLowerCase()
    );
    return character;
    /*
const abilityScores = (character, race) => {
  const baseScores = Object.fromEntries(
    Object.entries(character.ability_scores).map(([k, v]) => [k, v.base])
  );
  return race.features
    .filter((f) => f.ability_scores)
    .map((f) => f.ability_scores)
    .reduce((acc, cur) => {
      acc.strength += cur.strength || 0;
      acc.dexterity += cur.dexterity || 0;
      acc.consitiution += cur.consitiution || 0;
      acc.intelligence += cur.intelligence || 0;
      acc.wisdom += cur.wisdom || 0;
      acc.charisma += cur.charisma || 0;
      return acc;
    }, baseScores);
};
*/
  },
};
