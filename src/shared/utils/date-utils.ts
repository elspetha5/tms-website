const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;

const timeOfYear = {
  fall: {
    title: "FALL",
    date: `September - November ${year}`,
  },
  spring: {
    title: "SPRING",
    date: `March - May ${year}`,
  },
  summer: {
    title: "SUMMER",
    date: `June - August ${year}`,
  },
  winter: {
    title: "WINTER",
    date: `December ${month < 3 ? year - 1 : year} - February ${
      month > 2 ? year + 1 : year
    }`,
  },
};

export function getTimeOfYearInfo() {
  if (month === 12 || month < 3) {
    return timeOfYear.winter;
  } else if (month > 2 && month < 6) {
    return timeOfYear.spring;
  } else if (month > 5 && month < 9) {
    return timeOfYear.summer;
  } else {
    return timeOfYear.fall;
  }
}
