// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Counter {
    int256 public count;

    constructor(int256 initialCount) {
        count = initialCount;
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        count -= 1;
    }
}
