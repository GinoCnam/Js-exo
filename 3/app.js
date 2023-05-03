function calculate_age(dob) {
  let diff = Date.now() - dob.getTime();
  var age_date = new Date(diff);

  return Math.abs(age_date.getUTCFullYear() - 2003);
}

console.log(calculate_age(new Date(2003, 4, 23)));
