class Parser {
  constructor() {
    this.input = '';
    this.position = 0;
  }

  readLine() {
    return this.input.slice(this.position, this.position + 1);
  }

  readNumber() {
    return parseFloat(this.readLine());
  }

  readString() {
    return this.readLine();
  }

  readArray() {
    return this.readLine().split(/\s+/);
  }

  readNumberArray() {
    return this.readLine().split(/\s+/).map(Number);
  }

  readStringArray() {
    return this.readLine().split(/\s+/);
  }

  readLineArray() {
    return this.readLine().split(/\s+/);
  }

  readNumberArrayWithIndex() {
    return this.readLineArray().map((value, index) => ({ value, index }));
  }

  readNumberArrayWithIndexAndDefault() {
    return this.readLineArrayWithIndex().map((value, index) => ({ value, index }));
  }

  readNumberArrayWithDefault() {
    return this.readLineArrayWithDefault();
  }

  readStringArrayWithDefault() {
    return this.readLineArrayWithDefault();
  }

  readNumberWithDefault() {
    return this.readLine() ? parseFloat(this.readLine()) : 0;
  }

  readStringWithDefault() {
    return this.readLine() ? this.readLine() : '';
  }

  readArrayWithDefault() {
    return this.readLineArrayWithDefault();
  }

  readNumberWithDefaultAndIndex() {
    return this.readLineArrayWithDefault().map((value, index) => ({ value, index }));
  }

  readNumberWithDefaultAndIndexAndDefault() {
    return this.readLineArrayWithDefault().map((value, index) => ({ value, index }));
  }

  readNumberWithDefaultAndIndexAndDefaultAndDefault() {
    return this.readLineArrayWithDefault().map((value, index) => ({ value, index }));
  }

  writeLine() {
    this.input += this.readLine() + '\n';
  }

  writeArray() {
    this.input += this.readLineArray() + '\n';
  }

  writeNumberArray() {
    this.input += this.readLineArray() + '\n';
  }

  writeStringArray() {
    this.input += this.readLineArray() + '\n';
  }

  writeNumberArrayWithIndex() {
    this.input += this.readLineArrayWithIndex() + '\n';
  }

  writeNumberArrayWithIndexAndDefault() {
    this.input += this.readLineArrayWithIndexAndDefault() + '\n';
  }

  writeNumberArrayWithDefault() {
    this.input += this.readLineArrayWithDefault() + '\n';
  }

  writeStringArrayWithDefault() {
    this.input += this.readLineArrayWithDefault() + '\n';
  }

  writeNumberWithDefault() {
    this.input += this.readLine() ? this.readLine() : '0' + '\n';
  }

  writeStringWithDefault() {
    this.input += this.readLine() ? this.readLine() : '' + '\n';
  }

  writeArrayWithDefault() {
    this.input += this.readLineArrayWithDefault() + '\n';
  }

  writeNumberWithDefaultAndIndex() {
    this.input += this.readLineArrayWithDefault().map((value, index) => ({ value, index })).join(' ') + '\n';
  }

  writeNumberWithDefaultAndIndexAndDefault() {
    this.input += this.readLineArrayWithDefault().map((value, index) => ({ value, index })).join(' ') + '\n';
  }

  writeNumberWithDefaultAndIndexAndDefaultAndDefault() {
    this.input += this.readLineArrayWithDefault().map((value, index) => ({ value, index })).join(' ') + '\n';
  }
}

export default Parser;