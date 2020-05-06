import * as scholarly from "../lib";

import test from "ava";

test("search should resolve and return an Array", async (t) => {
  try {
    const data = await scholarly.search("machine learning");
    // Retrieve first 10 results
    Array.isArray(data) && data.length === 10
      ? t.pass()
      : t.fail("Number of results != 10");
  } catch (e) {
    t.fail("Test failed with message: " + e);
  }
});

test("user profile search should resolve and return an Array", async (t) => {
  try {
    const data = await scholarly.user("H18-9fkAAAAJ");
    if (!data) t.fail("Unable to access google scholar website");
    Array.isArray(data) && data.length > 0 ? t.pass() : t.fail();
  } catch (e) {
    t.fail("Test failed with message: " + e);
  }
});