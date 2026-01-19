export const FILTER_OPTIONS = {
  status: [
    { value: 'alive', labelKey: 'filters.status.alive' },
    { value: 'dead', labelKey: 'filters.status.dead' },
    { value: 'unknown', labelKey: 'filters.status.unknown' },
  ],
  gender: [
    { value: 'female', labelKey: 'filters.gender.female' },
    { value: 'male', labelKey: 'filters.gender.male' },
    { value: 'genderless', labelKey: 'filters.gender.genderless' },
    { value: 'unknown', labelKey: 'filters.gender.unknown' },
  ],
  species: [
    { value: 'Human', labelKey: 'filters.species.human' },
    { value: 'Alien', labelKey: 'filters.species.alien' },
    { value: 'Humanoid', labelKey: 'filters.species.humanoid' },
    { value: 'Robot', labelKey: 'filters.species.robot' },
    { value: 'Cronenberg', labelKey: 'filters.species.cronenberg' },
    { value: 'Animal', labelKey: 'filters.species.animal' },
    { value: 'Mythological Creature', labelKey: 'filters.species.mythological' },
    { value: 'Poopybutthole', labelKey: 'filters.species.poopybutthole' },
    { value: 'Disease', labelKey: 'filters.species.disease' },
  ],
} as const;
