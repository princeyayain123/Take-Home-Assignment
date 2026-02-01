const biomarkers = {
  metabolic: {
    name: "Metabolic Health Score",
    unit: "score",
    ranges: {
      male: {
        "18-39": {
          optimal: "75-100",
          inRange: "60-75",
          outOfRange: "<60",
        },
        "40-59": {
          optimal: "70-100",
          inRange: "55-70",
          outOfRange: "<55",
        },
        "60+": {
          optimal: "65-100",
          inRange: "50-65",
          outOfRange: "<50",
        },
      },
      female: {
        "18-39": {
          optimal: "75-100",
          inRange: "60-75",
          outOfRange: "<60",
        },
        "40-59": {
          optimal: "70-100",
          inRange: "55-70",
          outOfRange: "<55",
        },
        "60+": {
          optimal: "65-100",
          inRange: "50-65",
          outOfRange: "<50",
        },
      },
    },
  },

  creatinine: {
    name: "Creatinine",
    unit: "mg/dL",
    value: 0.63,
    scale: {
      min: 0.1,
      max: 5.0,
    },
    ranges: {
      male: {
        "18-39": {
          optimal: "0.75-1.0",
          inRange: "0.7-1.2",
          outOfRange: "<0.7",
        },
        "40-59": {
          optimal: "0.75-1.0",
          inRange: "0.7-1.2",
          outOfRange: "<0.7",
        },
        "60+": {
          optimal: "0.75-1.0",
          inRange: "0.7-1.2",
          outOfRange: "<0.7",
        },
      },
      female: {
        "18-39": {
          optimal: "0.6-0.9",
          inRange: "0.5-1.1",
          outOfRange: "<0.5",
        },
        "40-59": {
          optimal: "0.6-0.9",
          inRange: "0.5-1.1",
          outOfRange: "<0.5",
        },
        "60+": {
          optimal: "0.6-0.9",
          inRange: "0.5-1.1",
          outOfRange: "<0.5",
        },
      },
    },
  },
};

export default biomarkers;
