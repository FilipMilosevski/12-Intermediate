function test(val) {
  try {
    if (isNaN(val)) {
      throw "Not a number"
    } else {
      console.log("Number");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("DONE " + val);
  }
}
///////////////////debuging
test("a")
test(100)