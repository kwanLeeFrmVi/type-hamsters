// test.ts
import hamsters, { HamstersTaskParams } from "hamsters.js";
import { Worker, parentPort } from "worker_threads";

hamsters.init({ Worker, parentPort });

function test() {
  var params: HamstersTaskParams = {
    array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    threads: 2,
    dataType: "Int32",
    sort: "ascAlpha",
  };
  hamsters
    .promise(params, function () {
      for (var i = 0; i < params.array.length; i++) {
        rtn.data.push(params.array[i] * 4);
      }
    })
    .then(function (results) {
      console.log(results);
    })
    .catch(function (error) {
      console.error(error);
    });
}

test();
