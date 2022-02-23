function StringShort(text, range) {
  let lengthexist = typeof range === "number";

  if (lengthexist) {
    if (text.length < range) {
      return text;
    } else {
      return text.substring(0, range).concat("...");
    }
  } else {
    return text;
  }
}

module.exports = StringShort;
