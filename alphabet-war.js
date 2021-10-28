function alphabetWar(battlefield) {
  let hasBomb = battlefield.includes("#");
  if (!hasBomb) return battlefield.replace(/\[|\]/g, "");

  let zones = battlefield.split(/\[|\]/);

  let field = zones.filter((item, idx) => {
    let survivor = (idx + 1) % 2 !== 0;
    let bomb = item.includes("#");
    return survivor || bomb;
  });
  let survivors = field.map((item) => {
    let isShelter = !item.includes("#");
    return isShelter
      ? { occupants: item, health: 2 }
      : item.replace(/\w/g, "").length;
  });
  field.forEach((item, idx) => {
    let isBomb = item.includes("#");
    if (isBomb) {
      if (survivors[idx - 1]) {
        survivors[idx - 1].health -= survivors[idx];
      }
      if (survivors[idx + 1]) {
        survivors[idx + 1].health -= survivors[idx];
      }
      survivors[idx]--;
    }
  });
  return survivors
    .map((item) => {
      if (item.health && item.health > 0) return item.occupants;
    })
    .join("");
}
