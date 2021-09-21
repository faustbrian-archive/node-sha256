import "jest-extended";

import { hash } from "./index";

test("#hash", () => {
  expect(hash("a").toString("hex")).toStrictEqual("ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb");
  expect(hash(Buffer.from("a")).toString("hex")).toStrictEqual("ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb");
  expect(hash([Buffer.from("a")]).toString("hex")).toStrictEqual("ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb");
});
