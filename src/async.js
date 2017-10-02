#!/usr/bin/env node

class Foo {
    constructor() {}

    test() {
        this.promise1().then((result) => {
            let resultOfTest = {
                result1: result
            };

            this.promise2().then(secondResult => {
                resultOfTest.result2 = secondResult;
            });

            console.log(resultOfTest);
        });
    }

    promise1() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('promise1')
            }, 500);
        });

    }

    promise2() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('promise2')
            }, 5000);
        });

    }

}

let foo = new Foo();
foo.test();