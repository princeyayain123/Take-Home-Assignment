const getAgeGroup = (age) => {
  if (age < 40) return "18-39";
  if (age < 60) return "40-59";
  return "60+";
};

const parseRange = (range) => {
  if (!range) return null;

  if (range.startsWith("<")) {
    return { min: null, max: Number(range.slice(1)), raw: range };
  }

  if (range.startsWith(">")) {
    return { min: Number(range.slice(1)), max: null, raw: range };
  }

  const [min, max] = range.split("-").map(Number);
  return { min, max, raw: range };
};

const matches = (value, range) => {
  if (!range) return false;
  if (range.min !== null && value < range.min) return false;
  if (range.max !== null && value > range.max) return false;
  return true;
};

export const resolveRange = (ranges, value, age, gender) => {
  const ageGroup = getAgeGroup(age);
  const group = ranges?.[gender]?.[ageGroup];

  if (!group) {
    return { status: "unknown", range: null };
  }

  const optimal = parseRange(group.optimal);
  const inRange = parseRange(group.inRange);

  if (matches(value, optimal)) {
    return { status: "optimal", range: optimal.raw };
  }

  if (inRange && matches(value, inRange)) {
    return { status: "inRange", range: inRange.raw };
  }

  const lowerBound = inRange.min ?? optimal.min;
  const upperBound = inRange.max ?? optimal.max;

  if (lowerBound !== null && value < lowerBound) {
    return {
      status: "outLow",
      range: group.outOfRange ?? null,
    };
  }

  if (upperBound !== null && value > upperBound) {
    return {
      status: "outHigh",
      range: group.outOfRange ?? null,
    };
  }

  return {
    status: "outOfRange",
    range: group.outOfRange ?? null,
  };
};

export const getDisplayRanges = (ranges, age, gender) => {
  const ageGroup = getAgeGroup(age);
  const group = ranges?.[gender]?.[ageGroup];

  if (!group) return [];

  const result = [];

  if (group.optimal?.includes("-")) {
    const [, max] = group.optimal.split("-");
    result.push({
      key: "outHigh",
      label: "Out of range",
      value: `> ${max}`,
    });
  }

  if (group.inRange) {
    result.push({
      key: "inRange",
      label: "In range",
      value: group.inRange,
    });
  }

  if (group.optimal) {
    result.push({
      key: "optimal",
      label: "Optimal",
      value: group.optimal,
    });
  }

  if (group.outOfRange) {
    result.push({
      key: "outLow",
      label: "Out of range",
      value: group.outOfRange,
    });
  }

  return result;
};

export const getColor = (status) => {
  switch (status) {
    case "optimal":
      return "#22c55e";
    case "inRange":
      return "#f59e0b";
    case "outLow":
    case "outHigh":
      return "#ef4444";
    default:
      return "#9ca3af";
  }
};
