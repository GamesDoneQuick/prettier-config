// For a full list of options, refer to:
// https://prettier.io/docs/en/options.html
module.exports = {
  /* This can help reduce diff sizes, so we generally like it
   * as a best practice to make code reviews just that tiny bit better. */
  trailingComma: "all",
  
  /* A single quote requires pressing only one key,
   * but a double quote requires holding shift.
   * So, we find single quotes easier to type and prefer them. */
  singleQuote: true,
  
  /* It's true that Prettier warns pretty heavily against setting
   * this higher than 80 columns: https://prettier.io/docs/en/options.html#print-width
   *
   * However, Prettier itself already disregards this warning in
   * the name of readability: https://prettier.io/docs/en/rationale.html#imports
   *
   * Our friend Faulty has been using 120 for some time, and has had no issues.
   * Indeed, all of Discord seems to use this setting.
   * 
   * Lange: having tested this on some of my own real-world code,
   * I agree with Faulty that it does make things easier to read.
   printWidth: 120,
};
