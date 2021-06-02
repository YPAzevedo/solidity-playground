module.exports = {
  "Counter": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "int256",
            "name": "initialCount",
            "type": "int256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "count",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decrement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getCount",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "increment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "evm": {
      "assembly": "    /* \"Counter.sol\":69:396  contract Counter {... */\n  mstore(0x40, 0x80)\n    /* \"Counter.sol\":118:188  constructor(int256 initialCount) {... */\n  callvalue\n  dup1\n  iszero\n  tag_1\n  jumpi\n  0x00\n  dup1\n  revert\ntag_1:\n  pop\n  mload(0x40)\n  sub(codesize, bytecodeSize)\n  dup1\n  bytecodeSize\n  dup4\n  codecopy\n  dup2\n  dup2\n  add\n  0x40\n  mstore\n  dup2\n  add\n  swap1\n  tag_2\n  swap2\n  swap1\n  tag_3\n  jump\t// in\ntag_2:\n    /* \"Counter.sol\":169:181  initialCount */\n  dup1\n    /* \"Counter.sol\":161:166  count */\n  0x00\n    /* \"Counter.sol\":161:181  count = initialCount */\n  dup2\n  swap1\n  sstore\n  pop\n    /* \"Counter.sol\":118:188  constructor(int256 initialCount) {... */\n  pop\n    /* \"Counter.sol\":69:396  contract Counter {... */\n  jump(tag_6)\n    /* \"#utility.yul\":7:148   */\ntag_8:\n  0x00\n    /* \"#utility.yul\":94:100   */\n  dup2\n    /* \"#utility.yul\":88:101   */\n  mload\n    /* \"#utility.yul\":79:101   */\n  swap1\n  pop\n    /* \"#utility.yul\":110:142   */\n  tag_10\n    /* \"#utility.yul\":136:141   */\n  dup2\n    /* \"#utility.yul\":110:142   */\n  tag_11\n  jump\t// in\ntag_10:\n    /* \"#utility.yul\":69:148   */\n  swap3\n  swap2\n  pop\n  pop\n  jump\t// out\n    /* \"#utility.yul\":154:436   */\ntag_3:\n  0x00\n    /* \"#utility.yul\":272:274   */\n  0x20\n    /* \"#utility.yul\":260:269   */\n  dup3\n    /* \"#utility.yul\":251:258   */\n  dup5\n    /* \"#utility.yul\":247:270   */\n  sub\n    /* \"#utility.yul\":243:275   */\n  slt\n    /* \"#utility.yul\":240:242   */\n  iszero\n  tag_13\n  jumpi\n    /* \"#utility.yul\":288:289   */\n  0x00\n    /* \"#utility.yul\":285:286   */\n  dup1\n    /* \"#utility.yul\":278:290   */\n  revert\n    /* \"#utility.yul\":240:242   */\ntag_13:\n    /* \"#utility.yul\":331:332   */\n  0x00\n    /* \"#utility.yul\":356:419   */\n  tag_14\n    /* \"#utility.yul\":411:418   */\n  dup5\n    /* \"#utility.yul\":402:408   */\n  dup3\n    /* \"#utility.yul\":391:400   */\n  dup6\n    /* \"#utility.yul\":387:409   */\n  add\n    /* \"#utility.yul\":356:419   */\n  tag_8\n  jump\t// in\ntag_14:\n    /* \"#utility.yul\":346:419   */\n  swap2\n  pop\n    /* \"#utility.yul\":302:429   */\n  pop\n    /* \"#utility.yul\":230:436   */\n  swap3\n  swap2\n  pop\n  pop\n  jump\t// out\n    /* \"#utility.yul\":442:518   */\ntag_15:\n  0x00\n    /* \"#utility.yul\":507:512   */\n  dup2\n    /* \"#utility.yul\":496:512   */\n  swap1\n  pop\n    /* \"#utility.yul\":486:518   */\n  swap2\n  swap1\n  pop\n  jump\t// out\n    /* \"#utility.yul\":524:644   */\ntag_11:\n    /* \"#utility.yul\":596:619   */\n  tag_18\n    /* \"#utility.yul\":613:618   */\n  dup2\n    /* \"#utility.yul\":596:619   */\n  tag_15\n  jump\t// in\ntag_18:\n    /* \"#utility.yul\":589:594   */\n  dup2\n    /* \"#utility.yul\":586:620   */\n  eq\n    /* \"#utility.yul\":576:578   */\n  tag_19\n  jumpi\n    /* \"#utility.yul\":634:635   */\n  0x00\n    /* \"#utility.yul\":631:632   */\n  dup1\n    /* \"#utility.yul\":624:636   */\n  revert\n    /* \"#utility.yul\":576:578   */\ntag_19:\n    /* \"#utility.yul\":566:644   */\n  pop\n  jump\t// out\n    /* \"Counter.sol\":69:396  contract Counter {... */\ntag_6:\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x00\n  codecopy\n  0x00\n  return\nstop\n\nsub_0: assembly {\n        /* \"Counter.sol\":69:396  contract Counter {... */\n      mstore(0x40, 0x80)\n      callvalue\n      dup1\n      iszero\n      tag_1\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_1:\n      pop\n      jumpi(tag_2, lt(calldatasize, 0x04))\n      shr(0xe0, calldataload(0x00))\n      dup1\n      0x06661abd\n      eq\n      tag_3\n      jumpi\n      dup1\n      0x2baeceb7\n      eq\n      tag_4\n      jumpi\n      dup1\n      0xa87d942c\n      eq\n      tag_5\n      jumpi\n      dup1\n      0xd09de08a\n      eq\n      tag_6\n      jumpi\n    tag_2:\n      0x00\n      dup1\n      revert\n        /* \"Counter.sol\":92:111  int256 public count */\n    tag_3:\n      tag_7\n      tag_8\n      jump\t// in\n    tag_7:\n      mload(0x40)\n      tag_9\n      swap2\n      swap1\n      tag_10\n      jump\t// in\n    tag_9:\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"Counter.sol\":339:394  function decrement() public {... */\n    tag_4:\n      tag_11\n      tag_12\n      jump\t// in\n    tag_11:\n      stop\n        /* \"Counter.sol\":194:272  function getCount() public view returns (int256) {... */\n    tag_5:\n      tag_13\n      tag_14\n      jump\t// in\n    tag_13:\n      mload(0x40)\n      tag_15\n      swap2\n      swap1\n      tag_10\n      jump\t// in\n    tag_15:\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"Counter.sol\":278:333  function increment() public {... */\n    tag_6:\n      tag_16\n      tag_17\n      jump\t// in\n    tag_16:\n      stop\n        /* \"Counter.sol\":92:111  int256 public count */\n    tag_8:\n      sload(0x00)\n      dup2\n      jump\t// out\n        /* \"Counter.sol\":339:394  function decrement() public {... */\n    tag_12:\n        /* \"Counter.sol\":386:387  1 */\n      0x01\n        /* \"Counter.sol\":377:382  count */\n      0x00\n      dup1\n        /* \"Counter.sol\":377:387  count -= 1 */\n      dup3\n      dup3\n      sload\n      tag_19\n      swap2\n      swap1\n      tag_20\n      jump\t// in\n    tag_19:\n      swap3\n      pop\n      pop\n      dup2\n      swap1\n      sstore\n      pop\n        /* \"Counter.sol\":339:394  function decrement() public {... */\n      jump\t// out\n        /* \"Counter.sol\":194:272  function getCount() public view returns (int256) {... */\n    tag_14:\n        /* \"Counter.sol\":235:241  int256 */\n      0x00\n        /* \"Counter.sol\":260:265  count */\n      dup1\n      sload\n        /* \"Counter.sol\":253:265  return count */\n      swap1\n      pop\n        /* \"Counter.sol\":194:272  function getCount() public view returns (int256) {... */\n      swap1\n      jump\t// out\n        /* \"Counter.sol\":278:333  function increment() public {... */\n    tag_17:\n        /* \"Counter.sol\":325:326  1 */\n      0x01\n        /* \"Counter.sol\":316:321  count */\n      0x00\n      dup1\n        /* \"Counter.sol\":316:326  count += 1 */\n      dup3\n      dup3\n      sload\n      tag_23\n      swap2\n      swap1\n      tag_24\n      jump\t// in\n    tag_23:\n      swap3\n      pop\n      pop\n      dup2\n      swap1\n      sstore\n      pop\n        /* \"Counter.sol\":278:333  function increment() public {... */\n      jump\t// out\n        /* \"#utility.yul\":7:122   */\n    tag_26:\n        /* \"#utility.yul\":92:115   */\n      tag_28\n        /* \"#utility.yul\":109:114   */\n      dup2\n        /* \"#utility.yul\":92:115   */\n      tag_29\n      jump\t// in\n    tag_28:\n        /* \"#utility.yul\":87:90   */\n      dup3\n        /* \"#utility.yul\":80:116   */\n      mstore\n        /* \"#utility.yul\":70:122   */\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":128:346   */\n    tag_10:\n      0x00\n        /* \"#utility.yul\":257:259   */\n      0x20\n        /* \"#utility.yul\":246:255   */\n      dup3\n        /* \"#utility.yul\":242:260   */\n      add\n        /* \"#utility.yul\":234:260   */\n      swap1\n      pop\n        /* \"#utility.yul\":270:339   */\n      tag_31\n        /* \"#utility.yul\":336:337   */\n      0x00\n        /* \"#utility.yul\":325:334   */\n      dup4\n        /* \"#utility.yul\":321:338   */\n      add\n        /* \"#utility.yul\":312:318   */\n      dup5\n        /* \"#utility.yul\":270:339   */\n      tag_26\n      jump\t// in\n    tag_31:\n        /* \"#utility.yul\":224:346   */\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":352:877   */\n    tag_24:\n      0x00\n        /* \"#utility.yul\":410:429   */\n      tag_33\n        /* \"#utility.yul\":427:428   */\n      dup3\n        /* \"#utility.yul\":410:429   */\n      tag_29\n      jump\t// in\n    tag_33:\n        /* \"#utility.yul\":405:429   */\n      swap2\n      pop\n        /* \"#utility.yul\":443:462   */\n      tag_34\n        /* \"#utility.yul\":460:461   */\n      dup4\n        /* \"#utility.yul\":443:462   */\n      tag_29\n      jump\t// in\n    tag_34:\n        /* \"#utility.yul\":438:462   */\n      swap3\n      pop\n        /* \"#utility.yul\":631:632   */\n      dup2\n        /* \"#utility.yul\":563:629   */\n      0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n        /* \"#utility.yul\":559:633   */\n      sub\n        /* \"#utility.yul\":556:557   */\n      dup4\n        /* \"#utility.yul\":552:634   */\n      sgt\n        /* \"#utility.yul\":547:548   */\n      0x00\n        /* \"#utility.yul\":544:545   */\n      dup4\n        /* \"#utility.yul\":540:549   */\n      slt\n        /* \"#utility.yul\":533:550   */\n      iszero\n        /* \"#utility.yul\":529:635   */\n      and\n        /* \"#utility.yul\":526:528   */\n      iszero\n      tag_35\n      jumpi\n        /* \"#utility.yul\":638:656   */\n      tag_36\n      tag_37\n      jump\t// in\n    tag_36:\n        /* \"#utility.yul\":526:528   */\n    tag_35:\n        /* \"#utility.yul\":818:819   */\n      dup2\n        /* \"#utility.yul\":750:816   */\n      0x8000000000000000000000000000000000000000000000000000000000000000\n        /* \"#utility.yul\":746:820   */\n      sub\n        /* \"#utility.yul\":743:744   */\n      dup4\n        /* \"#utility.yul\":739:821   */\n      slt\n        /* \"#utility.yul\":735:736   */\n      0x00\n        /* \"#utility.yul\":732:733   */\n      dup4\n        /* \"#utility.yul\":728:737   */\n      slt\n        /* \"#utility.yul\":724:822   */\n      and\n        /* \"#utility.yul\":721:723   */\n      iszero\n      tag_38\n      jumpi\n        /* \"#utility.yul\":825:843   */\n      tag_39\n      tag_37\n      jump\t// in\n    tag_39:\n        /* \"#utility.yul\":721:723   */\n    tag_38:\n        /* \"#utility.yul\":869:870   */\n      dup3\n        /* \"#utility.yul\":866:867   */\n      dup3\n        /* \"#utility.yul\":862:871   */\n      add\n        /* \"#utility.yul\":855:871   */\n      swap1\n      pop\n        /* \"#utility.yul\":395:877   */\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":883:1410   */\n    tag_20:\n      0x00\n        /* \"#utility.yul\":942:961   */\n      tag_41\n        /* \"#utility.yul\":959:960   */\n      dup3\n        /* \"#utility.yul\":942:961   */\n      tag_29\n      jump\t// in\n    tag_41:\n        /* \"#utility.yul\":937:961   */\n      swap2\n      pop\n        /* \"#utility.yul\":975:994   */\n      tag_42\n        /* \"#utility.yul\":992:993   */\n      dup4\n        /* \"#utility.yul\":975:994   */\n      tag_29\n      jump\t// in\n    tag_42:\n        /* \"#utility.yul\":970:994   */\n      swap3\n      pop\n        /* \"#utility.yul\":1164:1165   */\n      dup3\n        /* \"#utility.yul\":1096:1162   */\n      0x8000000000000000000000000000000000000000000000000000000000000000\n        /* \"#utility.yul\":1092:1166   */\n      add\n        /* \"#utility.yul\":1089:1090   */\n      dup3\n        /* \"#utility.yul\":1085:1167   */\n      slt\n        /* \"#utility.yul\":1080:1081   */\n      0x00\n        /* \"#utility.yul\":1077:1078   */\n      dup5\n        /* \"#utility.yul\":1073:1082   */\n      slt\n        /* \"#utility.yul\":1066:1083   */\n      iszero\n        /* \"#utility.yul\":1062:1168   */\n      and\n        /* \"#utility.yul\":1059:1061   */\n      iszero\n      tag_43\n      jumpi\n        /* \"#utility.yul\":1171:1189   */\n      tag_44\n      tag_37\n      jump\t// in\n    tag_44:\n        /* \"#utility.yul\":1059:1061   */\n    tag_43:\n        /* \"#utility.yul\":1350:1351   */\n      dup3\n        /* \"#utility.yul\":1282:1348   */\n      0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n        /* \"#utility.yul\":1278:1352   */\n      add\n        /* \"#utility.yul\":1275:1276   */\n      dup3\n        /* \"#utility.yul\":1271:1353   */\n      sgt\n        /* \"#utility.yul\":1267:1268   */\n      0x00\n        /* \"#utility.yul\":1264:1265   */\n      dup5\n        /* \"#utility.yul\":1260:1269   */\n      slt\n        /* \"#utility.yul\":1256:1354   */\n      and\n        /* \"#utility.yul\":1253:1255   */\n      iszero\n      tag_45\n      jumpi\n        /* \"#utility.yul\":1357:1375   */\n      tag_46\n      tag_37\n      jump\t// in\n    tag_46:\n        /* \"#utility.yul\":1253:1255   */\n    tag_45:\n        /* \"#utility.yul\":1402:1403   */\n      dup3\n        /* \"#utility.yul\":1399:1400   */\n      dup3\n        /* \"#utility.yul\":1395:1404   */\n      sub\n        /* \"#utility.yul\":1387:1404   */\n      swap1\n      pop\n        /* \"#utility.yul\":927:1410   */\n      swap3\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":1416:1492   */\n    tag_29:\n      0x00\n        /* \"#utility.yul\":1481:1486   */\n      dup2\n        /* \"#utility.yul\":1470:1486   */\n      swap1\n      pop\n        /* \"#utility.yul\":1460:1492   */\n      swap2\n      swap1\n      pop\n      jump\t// out\n        /* \"#utility.yul\":1498:1678   */\n    tag_37:\n        /* \"#utility.yul\":1546:1623   */\n      0x4e487b7100000000000000000000000000000000000000000000000000000000\n        /* \"#utility.yul\":1543:1544   */\n      0x00\n        /* \"#utility.yul\":1536:1624   */\n      mstore\n        /* \"#utility.yul\":1643:1647   */\n      0x11\n        /* \"#utility.yul\":1640:1641   */\n      0x04\n        /* \"#utility.yul\":1633:1648   */\n      mstore\n        /* \"#utility.yul\":1667:1671   */\n      0x24\n        /* \"#utility.yul\":1664:1665   */\n      0x00\n        /* \"#utility.yul\":1657:1672   */\n      revert\n\n    auxdata: 0xa2646970667358221220a7f7b061ed6692990f9c768159a3deeebc96aab244effcd669569daf7546a45564736f6c63430008000033\n}\n",
      "bytecode": {
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:647:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "69:79:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "79:22:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "94:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "88:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "88:13:1"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "79:5:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "136:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_int256",
                            "nodeType": "YulIdentifier",
                            "src": "110:25:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "110:32:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "110:32:1"
                      }
                    ]
                  },
                  "name": "abi_decode_t_int256_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "47:6:1",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "55:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "63:5:1",
                      "type": ""
                    }
                  ],
                  "src": "7:141:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "230:206:1",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "276:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "285:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "288:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "278:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "278:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "278:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "251:7:1"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "260:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "247:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "247:23:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "272:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "243:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "243:32:1"
                        },
                        "nodeType": "YulIf",
                        "src": "240:2:1"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "302:127:1",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "317:15:1",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "331:1:1",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "321:6:1",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "346:73:1",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "391:9:1"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "402:6:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "387:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "387:22:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "411:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_int256_fromMemory",
                                "nodeType": "YulIdentifier",
                                "src": "356:30:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "356:63:1"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "346:6:1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_int256_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "200:9:1",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "211:7:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "223:6:1",
                      "type": ""
                    }
                  ],
                  "src": "154:282:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "486:32:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "496:16:1",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "507:5:1"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "496:7:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_int256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "468:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "478:7:1",
                      "type": ""
                    }
                  ],
                  "src": "442:76:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "566:78:1",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "622:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "631:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "634:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "624:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "624:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "624:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "589:5:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "613:5:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_int256",
                                    "nodeType": "YulIdentifier",
                                    "src": "596:16:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "596:23:1"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "586:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "586:34:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "579:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "579:42:1"
                        },
                        "nodeType": "YulIf",
                        "src": "576:2:1"
                      }
                    ]
                  },
                  "name": "validator_revert_t_int256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "559:5:1",
                      "type": ""
                    }
                  ],
                  "src": "524:120:1"
                }
              ]
            },
            "contents": "{\n\n    function abi_decode_t_int256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_int256(value)\n    }\n\n    function abi_decode_tuple_t_int256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_int256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_int256(value) {\n        if iszero(eq(value, cleanup_t_int256(value))) { revert(0, 0) }\n    }\n\n}\n",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "608060405234801561001057600080fd5b5060405161035438038061035483398181016040528101906100329190610054565b806000819055505061009e565b60008151905061004e81610087565b92915050565b60006020828403121561006657600080fd5b60006100748482850161003f565b91505092915050565b6000819050919050565b6100908161007d565b811461009b57600080fd5b50565b6102a7806100ad6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306661abd146100515780632baeceb71461006f578063a87d942c14610079578063d09de08a14610097575b600080fd5b6100596100a1565b60405161006691906100f5565b60405180910390f35b6100776100a7565b005b6100816100c2565b60405161008e91906100f5565b60405180910390f35b61009f6100cb565b005b60005481565b60016000808282546100b991906101a4565b92505081905550565b60008054905090565b60016000808282546100dd9190610110565b92505081905550565b6100ef81610238565b82525050565b600060208201905061010a60008301846100e6565b92915050565b600061011b82610238565b915061012683610238565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0383136000831215161561016157610160610242565b5b817f800000000000000000000000000000000000000000000000000000000000000003831260008312161561019957610198610242565b5b828201905092915050565b60006101af82610238565b91506101ba83610238565b9250827f8000000000000000000000000000000000000000000000000000000000000000018212600084121516156101f5576101f4610242565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821360008412161561022d5761022c610242565b5b828203905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220a7f7b061ed6692990f9c768159a3deeebc96aab244effcd669569daf7546a45564736f6c63430008000033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x354 CODESIZE SUB DUP1 PUSH2 0x354 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x32 SWAP2 SWAP1 PUSH2 0x54 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP PUSH2 0x9E JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x4E DUP2 PUSH2 0x87 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x66 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x74 DUP5 DUP3 DUP6 ADD PUSH2 0x3F JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x90 DUP2 PUSH2 0x7D JUMP JUMPDEST DUP2 EQ PUSH2 0x9B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x2A7 DUP1 PUSH2 0xAD PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x6661ABD EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0x2BAECEB7 EQ PUSH2 0x6F JUMPI DUP1 PUSH4 0xA87D942C EQ PUSH2 0x79 JUMPI DUP1 PUSH4 0xD09DE08A EQ PUSH2 0x97 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x59 PUSH2 0xA1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x66 SWAP2 SWAP1 PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH2 0xA7 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x81 PUSH2 0xC2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x8E SWAP2 SWAP1 PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x9F PUSH2 0xCB JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD PUSH2 0xB9 SWAP2 SWAP1 PUSH2 0x1A4 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD PUSH2 0xDD SWAP2 SWAP1 PUSH2 0x110 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0xEF DUP2 PUSH2 0x238 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x10A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xE6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x11B DUP3 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH2 0x126 DUP4 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP4 SGT PUSH1 0x0 DUP4 SLT ISZERO AND ISZERO PUSH2 0x161 JUMPI PUSH2 0x160 PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP2 PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 SUB DUP4 SLT PUSH1 0x0 DUP4 SLT AND ISZERO PUSH2 0x199 JUMPI PUSH2 0x198 PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1AF DUP3 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH2 0x1BA DUP4 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 ADD DUP3 SLT PUSH1 0x0 DUP5 SLT ISZERO AND ISZERO PUSH2 0x1F5 JUMPI PUSH2 0x1F4 PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP3 PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF ADD DUP3 SGT PUSH1 0x0 DUP5 SLT AND ISZERO PUSH2 0x22D JUMPI PUSH2 0x22C PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xA7 0xF7 0xB0 PUSH2 0xED66 SWAP3 SWAP10 0xF SWAP13 PUSH23 0x8159A3DEEEBC96AAB244EFFCD669569DAF7546A4556473 PUSH16 0x6C634300080000330000000000000000 ",
        "sourceMap": "69:327:0:-:0;;;118:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;169:12;161:5;:20;;;;118:70;69:327;;7:141:1;;94:6;88:13;79:22;;110:32;136:5;110:32;:::i;:::-;69:79;;;;:::o;154:282::-;;272:2;260:9;251:7;247:23;243:32;240:2;;;288:1;285;278:12;240:2;331:1;356:63;411:7;402:6;391:9;387:22;356:63;:::i;:::-;346:73;;302:127;230:206;;;;:::o;442:76::-;;507:5;496:16;;486:32;;;:::o;524:120::-;596:23;613:5;596:23;:::i;:::-;589:5;586:34;576:2;;634:1;631;624:12;576:2;566:78;:::o;69:327:0:-;;;;;;;"
      },
      "deployedBytecode": {
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:1681:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "70:52:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "87:3:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "109:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_int256",
                                "nodeType": "YulIdentifier",
                                "src": "92:16:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "92:23:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "80:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "80:36:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "80:36:1"
                      }
                    ]
                  },
                  "name": "abi_encode_t_int256_to_t_int256_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "58:5:1",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "65:3:1",
                      "type": ""
                    }
                  ],
                  "src": "7:115:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "224:122:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "234:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "246:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "257:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "242:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "242:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "234:4:1"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "312:6:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "325:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "336:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "321:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "321:17:1"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_int256_to_t_int256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "270:41:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "270:69:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "270:69:1"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "196:9:1",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "208:6:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "219:4:1",
                      "type": ""
                    }
                  ],
                  "src": "128:218:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "395:482:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "405:24:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "427:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_int256",
                            "nodeType": "YulIdentifier",
                            "src": "410:16:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "410:19:1"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "405:1:1"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "438:24:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "460:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_int256",
                            "nodeType": "YulIdentifier",
                            "src": "443:16:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "443:19:1"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "438:1:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "636:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "638:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "638:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "638:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "544:1:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "547:1:1",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "slt",
                                    "nodeType": "YulIdentifier",
                                    "src": "540:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "540:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "533:6:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "533:17:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "556:1:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "563:66:1",
                                      "type": "",
                                      "value": "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "631:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "559:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "559:74:1"
                                }
                              ],
                              "functionName": {
                                "name": "sgt",
                                "nodeType": "YulIdentifier",
                                "src": "552:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:82:1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "529:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "529:106:1"
                        },
                        "nodeType": "YulIf",
                        "src": "526:2:1"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "823:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "825:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "825:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "825:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "732:1:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "735:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "728:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "728:9:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "743:1:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "750:66:1",
                                      "type": "",
                                      "value": "0x8000000000000000000000000000000000000000000000000000000000000000"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "818:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "746:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "746:74:1"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "739:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "739:82:1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "724:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "724:98:1"
                        },
                        "nodeType": "YulIf",
                        "src": "721:2:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "855:16:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "866:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "869:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "862:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "862:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "855:3:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_add_t_int256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "382:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "385:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "391:3:1",
                      "type": ""
                    }
                  ],
                  "src": "352:525:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "927:483:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "937:24:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "959:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_int256",
                            "nodeType": "YulIdentifier",
                            "src": "942:16:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "942:19:1"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "937:1:1"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "970:24:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "992:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_int256",
                            "nodeType": "YulIdentifier",
                            "src": "975:16:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "975:19:1"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "970:1:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1169:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "1171:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1171:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1171:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "1077:1:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1080:1:1",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "slt",
                                    "nodeType": "YulIdentifier",
                                    "src": "1073:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1073:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "1066:6:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1066:17:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "1089:1:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1096:66:1",
                                      "type": "",
                                      "value": "0x8000000000000000000000000000000000000000000000000000000000000000"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "1164:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1092:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1092:74:1"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1085:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1085:82:1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1062:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1062:106:1"
                        },
                        "nodeType": "YulIf",
                        "src": "1059:2:1"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1355:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "1357:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1357:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1357:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "1264:1:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1267:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1260:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1260:9:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "1275:1:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1282:66:1",
                                      "type": "",
                                      "value": "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "1350:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1278:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1278:74:1"
                                }
                              ],
                              "functionName": {
                                "name": "sgt",
                                "nodeType": "YulIdentifier",
                                "src": "1271:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1271:82:1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1256:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1256:98:1"
                        },
                        "nodeType": "YulIf",
                        "src": "1253:2:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1387:17:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "1399:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "1402:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1395:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1395:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "1387:4:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_sub_t_int256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "913:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "916:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "922:4:1",
                      "type": ""
                    }
                  ],
                  "src": "883:527:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1460:32:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1470:16:1",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1481:5:1"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1470:7:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_int256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1442:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1452:7:1",
                      "type": ""
                    }
                  ],
                  "src": "1416:76:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1526:152:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1543:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1546:77:1",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1536:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1536:88:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1536:88:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1640:1:1",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1643:4:1",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1633:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1633:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1633:15:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1664:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1667:4:1",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1657:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1657:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1657:15:1"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1498:180:1"
                }
              ]
            },
            "contents": "{\n\n    function abi_encode_t_int256_to_t_int256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_int256(value))\n    }\n\n    function abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_int256_to_t_int256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function checked_add_t_int256(x, y) -> sum {\n        x := cleanup_t_int256(x)\n        y := cleanup_t_int256(y)\n\n        // overflow, if x >= 0 and y > (maxValue - x)\n        if and(iszero(slt(x, 0)), sgt(y, sub(0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n        // underflow, if x < 0 and y < (minValue - x)\n        if and(slt(x, 0), slt(y, sub(0x8000000000000000000000000000000000000000000000000000000000000000, x))) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_sub_t_int256(x, y) -> diff {\n        x := cleanup_t_int256(x)\n        y := cleanup_t_int256(y)\n\n        // underflow, if y >= 0 and x < (minValue + y)\n        if and(iszero(slt(y, 0)), slt(x, add(0x8000000000000000000000000000000000000000000000000000000000000000, y))) { panic_error_0x11() }\n        // overflow, if y < 0 and x > (maxValue + y)\n        if and(slt(y, 0), sgt(x, add(0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y))) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n}\n",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "608060405234801561001057600080fd5b506004361061004c5760003560e01c806306661abd146100515780632baeceb71461006f578063a87d942c14610079578063d09de08a14610097575b600080fd5b6100596100a1565b60405161006691906100f5565b60405180910390f35b6100776100a7565b005b6100816100c2565b60405161008e91906100f5565b60405180910390f35b61009f6100cb565b005b60005481565b60016000808282546100b991906101a4565b92505081905550565b60008054905090565b60016000808282546100dd9190610110565b92505081905550565b6100ef81610238565b82525050565b600060208201905061010a60008301846100e6565b92915050565b600061011b82610238565b915061012683610238565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0383136000831215161561016157610160610242565b5b817f800000000000000000000000000000000000000000000000000000000000000003831260008312161561019957610198610242565b5b828201905092915050565b60006101af82610238565b91506101ba83610238565b9250827f8000000000000000000000000000000000000000000000000000000000000000018212600084121516156101f5576101f4610242565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821360008412161561022d5761022c610242565b5b828203905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220a7f7b061ed6692990f9c768159a3deeebc96aab244effcd669569daf7546a45564736f6c63430008000033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x6661ABD EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0x2BAECEB7 EQ PUSH2 0x6F JUMPI DUP1 PUSH4 0xA87D942C EQ PUSH2 0x79 JUMPI DUP1 PUSH4 0xD09DE08A EQ PUSH2 0x97 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x59 PUSH2 0xA1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x66 SWAP2 SWAP1 PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x77 PUSH2 0xA7 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x81 PUSH2 0xC2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x8E SWAP2 SWAP1 PUSH2 0xF5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x9F PUSH2 0xCB JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD PUSH2 0xB9 SWAP2 SWAP1 PUSH2 0x1A4 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD PUSH2 0xDD SWAP2 SWAP1 PUSH2 0x110 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0xEF DUP2 PUSH2 0x238 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x10A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xE6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x11B DUP3 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH2 0x126 DUP4 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP4 SGT PUSH1 0x0 DUP4 SLT ISZERO AND ISZERO PUSH2 0x161 JUMPI PUSH2 0x160 PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP2 PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 SUB DUP4 SLT PUSH1 0x0 DUP4 SLT AND ISZERO PUSH2 0x199 JUMPI PUSH2 0x198 PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1AF DUP3 PUSH2 0x238 JUMP JUMPDEST SWAP2 POP PUSH2 0x1BA DUP4 PUSH2 0x238 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 ADD DUP3 SLT PUSH1 0x0 DUP5 SLT ISZERO AND ISZERO PUSH2 0x1F5 JUMPI PUSH2 0x1F4 PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP3 PUSH32 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF ADD DUP3 SGT PUSH1 0x0 DUP5 SLT AND ISZERO PUSH2 0x22D JUMPI PUSH2 0x22C PUSH2 0x242 JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xA7 0xF7 0xB0 PUSH2 0xED66 SWAP3 SWAP10 0xF SWAP13 PUSH23 0x8159A3DEEEBC96AAB244EFFCD669569DAF7546A4556473 PUSH16 0x6C634300080000330000000000000000 ",
        "sourceMap": "69:327:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;92:19;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;339:55;;;:::i;:::-;;194:78;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;278:55;;;:::i;:::-;;92:19;;;;:::o;339:55::-;386:1;377:5;;:10;;;;;;;:::i;:::-;;;;;;;;339:55::o;194:78::-;235:6;260:5;;253:12;;194:78;:::o;278:55::-;325:1;316:5;;:10;;;;;;;:::i;:::-;;;;;;;;278:55::o;7:115:1:-;92:23;109:5;92:23;:::i;:::-;87:3;80:36;70:52;;:::o;128:218::-;;257:2;246:9;242:18;234:26;;270:69;336:1;325:9;321:17;312:6;270:69;:::i;:::-;224:122;;;;:::o;352:525::-;;410:19;427:1;410:19;:::i;:::-;405:24;;443:19;460:1;443:19;:::i;:::-;438:24;;631:1;563:66;559:74;556:1;552:82;547:1;544;540:9;533:17;529:106;526:2;;;638:18;;:::i;:::-;526:2;818:1;750:66;746:74;743:1;739:82;735:1;732;728:9;724:98;721:2;;;825:18;;:::i;:::-;721:2;869:1;866;862:9;855:16;;395:482;;;;:::o;883:527::-;;942:19;959:1;942:19;:::i;:::-;937:24;;975:19;992:1;975:19;:::i;:::-;970:24;;1164:1;1096:66;1092:74;1089:1;1085:82;1080:1;1077;1073:9;1066:17;1062:106;1059:2;;;1171:18;;:::i;:::-;1059:2;1350:1;1282:66;1278:74;1275:1;1271:82;1267:1;1264;1260:9;1256:98;1253:2;;;1357:18;;:::i;:::-;1253:2;1402:1;1399;1395:9;1387:17;;927:483;;;;:::o;1416:76::-;;1481:5;1470:16;;1460:32;;;:::o;1498:180::-;1546:77;1543:1;1536:88;1643:4;1640:1;1633:15;1667:4;1664:1;1657:15"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "135800",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "count()": "1107",
          "decrement()": "infinite",
          "getCount()": "1159",
          "increment()": "infinite"
        }
      },
      "legacyAssembly": {
        ".code": [
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH",
            "source": 0,
            "value": "80"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH",
            "source": 0,
            "value": "40"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "MSTORE",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "CALLVALUE",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP1",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "ISZERO",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSH [tag]",
            "source": 0,
            "value": "1"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "JUMPI",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSH",
            "source": 0,
            "value": "0"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP1",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "REVERT",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "tag",
            "source": 0,
            "value": "1"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "JUMPDEST",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "POP",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSH",
            "source": 0,
            "value": "40"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "MLOAD",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSHSIZE",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "CODESIZE",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "SUB",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP1",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSHSIZE",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP4",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "CODECOPY",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP2",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP2",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "ADD",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSH",
            "source": 0,
            "value": "40"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "MSTORE",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "DUP2",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "ADD",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "SWAP1",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSH [tag]",
            "source": 0,
            "value": "2"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "SWAP2",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "SWAP1",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "PUSH [tag]",
            "source": 0,
            "value": "3"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "JUMP",
            "source": 0,
            "value": "[in]"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "tag",
            "source": 0,
            "value": "2"
          },
          {
            "begin": 118,
            "end": 188,
            "name": "JUMPDEST",
            "source": 0
          },
          {
            "begin": 169,
            "end": 181,
            "name": "DUP1",
            "source": 0
          },
          {
            "begin": 161,
            "end": 166,
            "name": "PUSH",
            "source": 0,
            "value": "0"
          },
          {
            "begin": 161,
            "end": 181,
            "name": "DUP2",
            "source": 0
          },
          {
            "begin": 161,
            "end": 181,
            "name": "SWAP1",
            "source": 0
          },
          {
            "begin": 161,
            "end": 181,
            "name": "SSTORE",
            "source": 0
          },
          {
            "begin": 161,
            "end": 181,
            "name": "POP",
            "source": 0
          },
          {
            "begin": 118,
            "end": 188,
            "name": "POP",
            "source": 0
          },
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH [tag]",
            "source": 0,
            "value": "6"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "JUMP",
            "source": 0
          },
          {
            "begin": 7,
            "end": 148,
            "name": "tag",
            "source": 1,
            "value": "8"
          },
          {
            "begin": 7,
            "end": 148,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 7,
            "end": 148,
            "name": "PUSH",
            "source": 1,
            "value": "0"
          },
          {
            "begin": 94,
            "end": 100,
            "name": "DUP2",
            "source": 1
          },
          {
            "begin": 88,
            "end": 101,
            "name": "MLOAD",
            "source": 1
          },
          {
            "begin": 79,
            "end": 101,
            "name": "SWAP1",
            "source": 1
          },
          {
            "begin": 79,
            "end": 101,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 110,
            "end": 142,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "10"
          },
          {
            "begin": 136,
            "end": 141,
            "name": "DUP2",
            "source": 1
          },
          {
            "begin": 110,
            "end": 142,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "11"
          },
          {
            "begin": 110,
            "end": 142,
            "name": "JUMP",
            "source": 1,
            "value": "[in]"
          },
          {
            "begin": 110,
            "end": 142,
            "name": "tag",
            "source": 1,
            "value": "10"
          },
          {
            "begin": 110,
            "end": 142,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 69,
            "end": 148,
            "name": "SWAP3",
            "source": 1
          },
          {
            "begin": 69,
            "end": 148,
            "name": "SWAP2",
            "source": 1
          },
          {
            "begin": 69,
            "end": 148,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 69,
            "end": 148,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 69,
            "end": 148,
            "name": "JUMP",
            "source": 1,
            "value": "[out]"
          },
          {
            "begin": 154,
            "end": 436,
            "name": "tag",
            "source": 1,
            "value": "3"
          },
          {
            "begin": 154,
            "end": 436,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 154,
            "end": 436,
            "name": "PUSH",
            "source": 1,
            "value": "0"
          },
          {
            "begin": 272,
            "end": 274,
            "name": "PUSH",
            "source": 1,
            "value": "20"
          },
          {
            "begin": 260,
            "end": 269,
            "name": "DUP3",
            "source": 1
          },
          {
            "begin": 251,
            "end": 258,
            "name": "DUP5",
            "source": 1
          },
          {
            "begin": 247,
            "end": 270,
            "name": "SUB",
            "source": 1
          },
          {
            "begin": 243,
            "end": 275,
            "name": "SLT",
            "source": 1
          },
          {
            "begin": 240,
            "end": 242,
            "name": "ISZERO",
            "source": 1
          },
          {
            "begin": 240,
            "end": 242,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "13"
          },
          {
            "begin": 240,
            "end": 242,
            "name": "JUMPI",
            "source": 1
          },
          {
            "begin": 288,
            "end": 289,
            "name": "PUSH",
            "source": 1,
            "value": "0"
          },
          {
            "begin": 285,
            "end": 286,
            "name": "DUP1",
            "source": 1
          },
          {
            "begin": 278,
            "end": 290,
            "name": "REVERT",
            "source": 1
          },
          {
            "begin": 240,
            "end": 242,
            "name": "tag",
            "source": 1,
            "value": "13"
          },
          {
            "begin": 240,
            "end": 242,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 331,
            "end": 332,
            "name": "PUSH",
            "source": 1,
            "value": "0"
          },
          {
            "begin": 356,
            "end": 419,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "14"
          },
          {
            "begin": 411,
            "end": 418,
            "name": "DUP5",
            "source": 1
          },
          {
            "begin": 402,
            "end": 408,
            "name": "DUP3",
            "source": 1
          },
          {
            "begin": 391,
            "end": 400,
            "name": "DUP6",
            "source": 1
          },
          {
            "begin": 387,
            "end": 409,
            "name": "ADD",
            "source": 1
          },
          {
            "begin": 356,
            "end": 419,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "8"
          },
          {
            "begin": 356,
            "end": 419,
            "name": "JUMP",
            "source": 1,
            "value": "[in]"
          },
          {
            "begin": 356,
            "end": 419,
            "name": "tag",
            "source": 1,
            "value": "14"
          },
          {
            "begin": 356,
            "end": 419,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 346,
            "end": 419,
            "name": "SWAP2",
            "source": 1
          },
          {
            "begin": 346,
            "end": 419,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 302,
            "end": 429,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 230,
            "end": 436,
            "name": "SWAP3",
            "source": 1
          },
          {
            "begin": 230,
            "end": 436,
            "name": "SWAP2",
            "source": 1
          },
          {
            "begin": 230,
            "end": 436,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 230,
            "end": 436,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 230,
            "end": 436,
            "name": "JUMP",
            "source": 1,
            "value": "[out]"
          },
          {
            "begin": 442,
            "end": 518,
            "name": "tag",
            "source": 1,
            "value": "15"
          },
          {
            "begin": 442,
            "end": 518,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 442,
            "end": 518,
            "name": "PUSH",
            "source": 1,
            "value": "0"
          },
          {
            "begin": 507,
            "end": 512,
            "name": "DUP2",
            "source": 1
          },
          {
            "begin": 496,
            "end": 512,
            "name": "SWAP1",
            "source": 1
          },
          {
            "begin": 496,
            "end": 512,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 486,
            "end": 518,
            "name": "SWAP2",
            "source": 1
          },
          {
            "begin": 486,
            "end": 518,
            "name": "SWAP1",
            "source": 1
          },
          {
            "begin": 486,
            "end": 518,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 486,
            "end": 518,
            "name": "JUMP",
            "source": 1,
            "value": "[out]"
          },
          {
            "begin": 524,
            "end": 644,
            "name": "tag",
            "source": 1,
            "value": "11"
          },
          {
            "begin": 524,
            "end": 644,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 596,
            "end": 619,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "18"
          },
          {
            "begin": 613,
            "end": 618,
            "name": "DUP2",
            "source": 1
          },
          {
            "begin": 596,
            "end": 619,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "15"
          },
          {
            "begin": 596,
            "end": 619,
            "name": "JUMP",
            "source": 1,
            "value": "[in]"
          },
          {
            "begin": 596,
            "end": 619,
            "name": "tag",
            "source": 1,
            "value": "18"
          },
          {
            "begin": 596,
            "end": 619,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 589,
            "end": 594,
            "name": "DUP2",
            "source": 1
          },
          {
            "begin": 586,
            "end": 620,
            "name": "EQ",
            "source": 1
          },
          {
            "begin": 576,
            "end": 578,
            "name": "PUSH [tag]",
            "source": 1,
            "value": "19"
          },
          {
            "begin": 576,
            "end": 578,
            "name": "JUMPI",
            "source": 1
          },
          {
            "begin": 634,
            "end": 635,
            "name": "PUSH",
            "source": 1,
            "value": "0"
          },
          {
            "begin": 631,
            "end": 632,
            "name": "DUP1",
            "source": 1
          },
          {
            "begin": 624,
            "end": 636,
            "name": "REVERT",
            "source": 1
          },
          {
            "begin": 576,
            "end": 578,
            "name": "tag",
            "source": 1,
            "value": "19"
          },
          {
            "begin": 576,
            "end": 578,
            "name": "JUMPDEST",
            "source": 1
          },
          {
            "begin": 566,
            "end": 644,
            "name": "POP",
            "source": 1
          },
          {
            "begin": 566,
            "end": 644,
            "name": "JUMP",
            "source": 1,
            "value": "[out]"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "tag",
            "source": 0,
            "value": "6"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "JUMPDEST",
            "source": 0
          },
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH #[$]",
            "source": 0,
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "DUP1",
            "source": 0
          },
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH [$]",
            "source": 0,
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH",
            "source": 0,
            "value": "0"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "CODECOPY",
            "source": 0
          },
          {
            "begin": 69,
            "end": 396,
            "name": "PUSH",
            "source": 0,
            "value": "0"
          },
          {
            "begin": 69,
            "end": 396,
            "name": "RETURN",
            "source": 0
          }
        ],
        ".data": {
          "0": {
            ".auxdata": "a2646970667358221220a7f7b061ed6692990f9c768159a3deeebc96aab244effcd669569daf7546a45564736f6c63430008000033",
            ".code": [
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "80"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "40"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "MSTORE",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "CALLVALUE",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "ISZERO",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "1"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPI",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "REVERT",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "tag",
                "source": 0,
                "value": "1"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "4"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "CALLDATASIZE",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "LT",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "2"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPI",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "CALLDATALOAD",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "E0"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "SHR",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "6661ABD"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "EQ",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "3"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPI",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "2BAECEB7"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "EQ",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "4"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPI",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "A87D942C"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "EQ",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "5"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPI",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "D09DE08A"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "EQ",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "6"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPI",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "tag",
                "source": 0,
                "value": "2"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 69,
                "end": 396,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 69,
                "end": 396,
                "name": "REVERT",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "tag",
                "source": 0,
                "value": "3"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "7"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "8"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "tag",
                "source": 0,
                "value": "7"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH",
                "source": 0,
                "value": "40"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "MLOAD",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "9"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "SWAP2",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "10"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "tag",
                "source": 0,
                "value": "9"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH",
                "source": 0,
                "value": "40"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "MLOAD",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "SWAP2",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "SUB",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "RETURN",
                "source": 0
              },
              {
                "begin": 339,
                "end": 394,
                "name": "tag",
                "source": 0,
                "value": "4"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 339,
                "end": 394,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "11"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "12"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "tag",
                "source": 0,
                "value": "11"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 339,
                "end": 394,
                "name": "STOP",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "tag",
                "source": 0,
                "value": "5"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "13"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "14"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "tag",
                "source": 0,
                "value": "13"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "PUSH",
                "source": 0,
                "value": "40"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "MLOAD",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "15"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "SWAP2",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "10"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "tag",
                "source": 0,
                "value": "15"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "PUSH",
                "source": 0,
                "value": "40"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "MLOAD",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "SWAP2",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "SUB",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "RETURN",
                "source": 0
              },
              {
                "begin": 278,
                "end": 333,
                "name": "tag",
                "source": 0,
                "value": "6"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 278,
                "end": 333,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "16"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "17"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "tag",
                "source": 0,
                "value": "16"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 278,
                "end": 333,
                "name": "STOP",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "tag",
                "source": 0,
                "value": "8"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 92,
                "end": 111,
                "name": "SLOAD",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "DUP2",
                "source": 0
              },
              {
                "begin": 92,
                "end": 111,
                "name": "JUMP",
                "source": 0,
                "value": "[out]"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "tag",
                "source": 0,
                "value": "12"
              },
              {
                "begin": 339,
                "end": 394,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 386,
                "end": 387,
                "name": "PUSH",
                "source": 0,
                "value": "1"
              },
              {
                "begin": 377,
                "end": 382,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 377,
                "end": 382,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "DUP3",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "DUP3",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "SLOAD",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "19"
              },
              {
                "begin": 377,
                "end": 387,
                "name": "SWAP2",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "20"
              },
              {
                "begin": 377,
                "end": 387,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 377,
                "end": 387,
                "name": "tag",
                "source": 0,
                "value": "19"
              },
              {
                "begin": 377,
                "end": 387,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "SWAP3",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "DUP2",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "SSTORE",
                "source": 0
              },
              {
                "begin": 377,
                "end": 387,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 339,
                "end": 394,
                "name": "JUMP",
                "source": 0,
                "value": "[out]"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "tag",
                "source": 0,
                "value": "14"
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 235,
                "end": 241,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 260,
                "end": 265,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 260,
                "end": 265,
                "name": "SLOAD",
                "source": 0
              },
              {
                "begin": 253,
                "end": 265,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 253,
                "end": 265,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 194,
                "end": 272,
                "name": "JUMP",
                "source": 0,
                "value": "[out]"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "tag",
                "source": 0,
                "value": "17"
              },
              {
                "begin": 278,
                "end": 333,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 325,
                "end": 326,
                "name": "PUSH",
                "source": 0,
                "value": "1"
              },
              {
                "begin": 316,
                "end": 321,
                "name": "PUSH",
                "source": 0,
                "value": "0"
              },
              {
                "begin": 316,
                "end": 321,
                "name": "DUP1",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "DUP3",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "DUP3",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "SLOAD",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "23"
              },
              {
                "begin": 316,
                "end": 326,
                "name": "SWAP2",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "PUSH [tag]",
                "source": 0,
                "value": "24"
              },
              {
                "begin": 316,
                "end": 326,
                "name": "JUMP",
                "source": 0,
                "value": "[in]"
              },
              {
                "begin": 316,
                "end": 326,
                "name": "tag",
                "source": 0,
                "value": "23"
              },
              {
                "begin": 316,
                "end": 326,
                "name": "JUMPDEST",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "SWAP3",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "DUP2",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "SWAP1",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "SSTORE",
                "source": 0
              },
              {
                "begin": 316,
                "end": 326,
                "name": "POP",
                "source": 0
              },
              {
                "begin": 278,
                "end": 333,
                "name": "JUMP",
                "source": 0,
                "value": "[out]"
              },
              {
                "begin": 7,
                "end": 122,
                "name": "tag",
                "source": 1,
                "value": "26"
              },
              {
                "begin": 7,
                "end": 122,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 92,
                "end": 115,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "28"
              },
              {
                "begin": 109,
                "end": 114,
                "name": "DUP2",
                "source": 1
              },
              {
                "begin": 92,
                "end": 115,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "29"
              },
              {
                "begin": 92,
                "end": 115,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 92,
                "end": 115,
                "name": "tag",
                "source": 1,
                "value": "28"
              },
              {
                "begin": 92,
                "end": 115,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 87,
                "end": 90,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 80,
                "end": 116,
                "name": "MSTORE",
                "source": 1
              },
              {
                "begin": 70,
                "end": 122,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 70,
                "end": 122,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 70,
                "end": 122,
                "name": "JUMP",
                "source": 1,
                "value": "[out]"
              },
              {
                "begin": 128,
                "end": 346,
                "name": "tag",
                "source": 1,
                "value": "10"
              },
              {
                "begin": 128,
                "end": 346,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 128,
                "end": 346,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 257,
                "end": 259,
                "name": "PUSH",
                "source": 1,
                "value": "20"
              },
              {
                "begin": 246,
                "end": 255,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 242,
                "end": 260,
                "name": "ADD",
                "source": 1
              },
              {
                "begin": 234,
                "end": 260,
                "name": "SWAP1",
                "source": 1
              },
              {
                "begin": 234,
                "end": 260,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 270,
                "end": 339,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "31"
              },
              {
                "begin": 336,
                "end": 337,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 325,
                "end": 334,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 321,
                "end": 338,
                "name": "ADD",
                "source": 1
              },
              {
                "begin": 312,
                "end": 318,
                "name": "DUP5",
                "source": 1
              },
              {
                "begin": 270,
                "end": 339,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "26"
              },
              {
                "begin": 270,
                "end": 339,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 270,
                "end": 339,
                "name": "tag",
                "source": 1,
                "value": "31"
              },
              {
                "begin": 270,
                "end": 339,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 224,
                "end": 346,
                "name": "SWAP3",
                "source": 1
              },
              {
                "begin": 224,
                "end": 346,
                "name": "SWAP2",
                "source": 1
              },
              {
                "begin": 224,
                "end": 346,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 224,
                "end": 346,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 224,
                "end": 346,
                "name": "JUMP",
                "source": 1,
                "value": "[out]"
              },
              {
                "begin": 352,
                "end": 877,
                "name": "tag",
                "source": 1,
                "value": "24"
              },
              {
                "begin": 352,
                "end": 877,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 352,
                "end": 877,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 410,
                "end": 429,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "33"
              },
              {
                "begin": 427,
                "end": 428,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 410,
                "end": 429,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "29"
              },
              {
                "begin": 410,
                "end": 429,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 410,
                "end": 429,
                "name": "tag",
                "source": 1,
                "value": "33"
              },
              {
                "begin": 410,
                "end": 429,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 405,
                "end": 429,
                "name": "SWAP2",
                "source": 1
              },
              {
                "begin": 405,
                "end": 429,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 443,
                "end": 462,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "34"
              },
              {
                "begin": 460,
                "end": 461,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 443,
                "end": 462,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "29"
              },
              {
                "begin": 443,
                "end": 462,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 443,
                "end": 462,
                "name": "tag",
                "source": 1,
                "value": "34"
              },
              {
                "begin": 443,
                "end": 462,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 438,
                "end": 462,
                "name": "SWAP3",
                "source": 1
              },
              {
                "begin": 438,
                "end": 462,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 631,
                "end": 632,
                "name": "DUP2",
                "source": 1
              },
              {
                "begin": 563,
                "end": 629,
                "name": "PUSH",
                "source": 1,
                "value": "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 559,
                "end": 633,
                "name": "SUB",
                "source": 1
              },
              {
                "begin": 556,
                "end": 557,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 552,
                "end": 634,
                "name": "SGT",
                "source": 1
              },
              {
                "begin": 547,
                "end": 548,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 544,
                "end": 545,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 540,
                "end": 549,
                "name": "SLT",
                "source": 1
              },
              {
                "begin": 533,
                "end": 550,
                "name": "ISZERO",
                "source": 1
              },
              {
                "begin": 529,
                "end": 635,
                "name": "AND",
                "source": 1
              },
              {
                "begin": 526,
                "end": 528,
                "name": "ISZERO",
                "source": 1
              },
              {
                "begin": 526,
                "end": 528,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "35"
              },
              {
                "begin": 526,
                "end": 528,
                "name": "JUMPI",
                "source": 1
              },
              {
                "begin": 638,
                "end": 656,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "36"
              },
              {
                "begin": 638,
                "end": 656,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "37"
              },
              {
                "begin": 638,
                "end": 656,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 638,
                "end": 656,
                "name": "tag",
                "source": 1,
                "value": "36"
              },
              {
                "begin": 638,
                "end": 656,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 526,
                "end": 528,
                "name": "tag",
                "source": 1,
                "value": "35"
              },
              {
                "begin": 526,
                "end": 528,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 818,
                "end": 819,
                "name": "DUP2",
                "source": 1
              },
              {
                "begin": 750,
                "end": 816,
                "name": "PUSH",
                "source": 1,
                "value": "8000000000000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 746,
                "end": 820,
                "name": "SUB",
                "source": 1
              },
              {
                "begin": 743,
                "end": 744,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 739,
                "end": 821,
                "name": "SLT",
                "source": 1
              },
              {
                "begin": 735,
                "end": 736,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 732,
                "end": 733,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 728,
                "end": 737,
                "name": "SLT",
                "source": 1
              },
              {
                "begin": 724,
                "end": 822,
                "name": "AND",
                "source": 1
              },
              {
                "begin": 721,
                "end": 723,
                "name": "ISZERO",
                "source": 1
              },
              {
                "begin": 721,
                "end": 723,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "38"
              },
              {
                "begin": 721,
                "end": 723,
                "name": "JUMPI",
                "source": 1
              },
              {
                "begin": 825,
                "end": 843,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "39"
              },
              {
                "begin": 825,
                "end": 843,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "37"
              },
              {
                "begin": 825,
                "end": 843,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 825,
                "end": 843,
                "name": "tag",
                "source": 1,
                "value": "39"
              },
              {
                "begin": 825,
                "end": 843,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 721,
                "end": 723,
                "name": "tag",
                "source": 1,
                "value": "38"
              },
              {
                "begin": 721,
                "end": 723,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 869,
                "end": 870,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 866,
                "end": 867,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 862,
                "end": 871,
                "name": "ADD",
                "source": 1
              },
              {
                "begin": 855,
                "end": 871,
                "name": "SWAP1",
                "source": 1
              },
              {
                "begin": 855,
                "end": 871,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 395,
                "end": 877,
                "name": "SWAP3",
                "source": 1
              },
              {
                "begin": 395,
                "end": 877,
                "name": "SWAP2",
                "source": 1
              },
              {
                "begin": 395,
                "end": 877,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 395,
                "end": 877,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 395,
                "end": 877,
                "name": "JUMP",
                "source": 1,
                "value": "[out]"
              },
              {
                "begin": 883,
                "end": 1410,
                "name": "tag",
                "source": 1,
                "value": "20"
              },
              {
                "begin": 883,
                "end": 1410,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 883,
                "end": 1410,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 942,
                "end": 961,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "41"
              },
              {
                "begin": 959,
                "end": 960,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 942,
                "end": 961,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "29"
              },
              {
                "begin": 942,
                "end": 961,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 942,
                "end": 961,
                "name": "tag",
                "source": 1,
                "value": "41"
              },
              {
                "begin": 942,
                "end": 961,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 937,
                "end": 961,
                "name": "SWAP2",
                "source": 1
              },
              {
                "begin": 937,
                "end": 961,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 975,
                "end": 994,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "42"
              },
              {
                "begin": 992,
                "end": 993,
                "name": "DUP4",
                "source": 1
              },
              {
                "begin": 975,
                "end": 994,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "29"
              },
              {
                "begin": 975,
                "end": 994,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 975,
                "end": 994,
                "name": "tag",
                "source": 1,
                "value": "42"
              },
              {
                "begin": 975,
                "end": 994,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 970,
                "end": 994,
                "name": "SWAP3",
                "source": 1
              },
              {
                "begin": 970,
                "end": 994,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 1164,
                "end": 1165,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 1096,
                "end": 1162,
                "name": "PUSH",
                "source": 1,
                "value": "8000000000000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 1092,
                "end": 1166,
                "name": "ADD",
                "source": 1
              },
              {
                "begin": 1089,
                "end": 1090,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 1085,
                "end": 1167,
                "name": "SLT",
                "source": 1
              },
              {
                "begin": 1080,
                "end": 1081,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 1077,
                "end": 1078,
                "name": "DUP5",
                "source": 1
              },
              {
                "begin": 1073,
                "end": 1082,
                "name": "SLT",
                "source": 1
              },
              {
                "begin": 1066,
                "end": 1083,
                "name": "ISZERO",
                "source": 1
              },
              {
                "begin": 1062,
                "end": 1168,
                "name": "AND",
                "source": 1
              },
              {
                "begin": 1059,
                "end": 1061,
                "name": "ISZERO",
                "source": 1
              },
              {
                "begin": 1059,
                "end": 1061,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "43"
              },
              {
                "begin": 1059,
                "end": 1061,
                "name": "JUMPI",
                "source": 1
              },
              {
                "begin": 1171,
                "end": 1189,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "44"
              },
              {
                "begin": 1171,
                "end": 1189,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "37"
              },
              {
                "begin": 1171,
                "end": 1189,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 1171,
                "end": 1189,
                "name": "tag",
                "source": 1,
                "value": "44"
              },
              {
                "begin": 1171,
                "end": 1189,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 1059,
                "end": 1061,
                "name": "tag",
                "source": 1,
                "value": "43"
              },
              {
                "begin": 1059,
                "end": 1061,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 1350,
                "end": 1351,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 1282,
                "end": 1348,
                "name": "PUSH",
                "source": 1,
                "value": "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 1278,
                "end": 1352,
                "name": "ADD",
                "source": 1
              },
              {
                "begin": 1275,
                "end": 1276,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 1271,
                "end": 1353,
                "name": "SGT",
                "source": 1
              },
              {
                "begin": 1267,
                "end": 1268,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 1264,
                "end": 1265,
                "name": "DUP5",
                "source": 1
              },
              {
                "begin": 1260,
                "end": 1269,
                "name": "SLT",
                "source": 1
              },
              {
                "begin": 1256,
                "end": 1354,
                "name": "AND",
                "source": 1
              },
              {
                "begin": 1253,
                "end": 1255,
                "name": "ISZERO",
                "source": 1
              },
              {
                "begin": 1253,
                "end": 1255,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "45"
              },
              {
                "begin": 1253,
                "end": 1255,
                "name": "JUMPI",
                "source": 1
              },
              {
                "begin": 1357,
                "end": 1375,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "46"
              },
              {
                "begin": 1357,
                "end": 1375,
                "name": "PUSH [tag]",
                "source": 1,
                "value": "37"
              },
              {
                "begin": 1357,
                "end": 1375,
                "name": "JUMP",
                "source": 1,
                "value": "[in]"
              },
              {
                "begin": 1357,
                "end": 1375,
                "name": "tag",
                "source": 1,
                "value": "46"
              },
              {
                "begin": 1357,
                "end": 1375,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 1253,
                "end": 1255,
                "name": "tag",
                "source": 1,
                "value": "45"
              },
              {
                "begin": 1253,
                "end": 1255,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 1402,
                "end": 1403,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 1399,
                "end": 1400,
                "name": "DUP3",
                "source": 1
              },
              {
                "begin": 1395,
                "end": 1404,
                "name": "SUB",
                "source": 1
              },
              {
                "begin": 1387,
                "end": 1404,
                "name": "SWAP1",
                "source": 1
              },
              {
                "begin": 1387,
                "end": 1404,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 927,
                "end": 1410,
                "name": "SWAP3",
                "source": 1
              },
              {
                "begin": 927,
                "end": 1410,
                "name": "SWAP2",
                "source": 1
              },
              {
                "begin": 927,
                "end": 1410,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 927,
                "end": 1410,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 927,
                "end": 1410,
                "name": "JUMP",
                "source": 1,
                "value": "[out]"
              },
              {
                "begin": 1416,
                "end": 1492,
                "name": "tag",
                "source": 1,
                "value": "29"
              },
              {
                "begin": 1416,
                "end": 1492,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 1416,
                "end": 1492,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 1481,
                "end": 1486,
                "name": "DUP2",
                "source": 1
              },
              {
                "begin": 1470,
                "end": 1486,
                "name": "SWAP1",
                "source": 1
              },
              {
                "begin": 1470,
                "end": 1486,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 1460,
                "end": 1492,
                "name": "SWAP2",
                "source": 1
              },
              {
                "begin": 1460,
                "end": 1492,
                "name": "SWAP1",
                "source": 1
              },
              {
                "begin": 1460,
                "end": 1492,
                "name": "POP",
                "source": 1
              },
              {
                "begin": 1460,
                "end": 1492,
                "name": "JUMP",
                "source": 1,
                "value": "[out]"
              },
              {
                "begin": 1498,
                "end": 1678,
                "name": "tag",
                "source": 1,
                "value": "37"
              },
              {
                "begin": 1498,
                "end": 1678,
                "name": "JUMPDEST",
                "source": 1
              },
              {
                "begin": 1546,
                "end": 1623,
                "name": "PUSH",
                "source": 1,
                "value": "4E487B7100000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 1543,
                "end": 1544,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 1536,
                "end": 1624,
                "name": "MSTORE",
                "source": 1
              },
              {
                "begin": 1643,
                "end": 1647,
                "name": "PUSH",
                "source": 1,
                "value": "11"
              },
              {
                "begin": 1640,
                "end": 1641,
                "name": "PUSH",
                "source": 1,
                "value": "4"
              },
              {
                "begin": 1633,
                "end": 1648,
                "name": "MSTORE",
                "source": 1
              },
              {
                "begin": 1667,
                "end": 1671,
                "name": "PUSH",
                "source": 1,
                "value": "24"
              },
              {
                "begin": 1664,
                "end": 1665,
                "name": "PUSH",
                "source": 1,
                "value": "0"
              },
              {
                "begin": 1657,
                "end": 1672,
                "name": "REVERT",
                "source": 1
              }
            ]
          }
        }
      },
      "methodIdentifiers": {
        "count()": "06661abd",
        "decrement()": "2baeceb7",
        "getCount()": "a87d942c",
        "increment()": "d09de08a"
      }
    },
    "ewasm": {
      "wasm": ""
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"initialCount\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"count\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decrement\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCount\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"increment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"Counter.sol\":\"Counter\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"Counter.sol\":{\"keccak256\":\"0x6e05f8c3fa55257ecf5224e2bd3c6ccda5f0adbe12bc74462c8f7f8171acab62\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://d7589e91b5d81d81d65a15d8b15954dc32bc405228fd9ca7d38c0d83c8dcc42f\",\"dweb:/ipfs/QmcP1LdRuGCX6xgdvTL37g6KQNt1fahGtMbxTjxuZn1Zna\"]}},\"version\":1}",
    "storageLayout": {
      "storage": [
        {
          "astId": 3,
          "contract": "Counter.sol:Counter",
          "label": "count",
          "offset": 0,
          "slot": "0",
          "type": "t_int256"
        }
      ],
      "types": {
        "t_int256": {
          "encoding": "inplace",
          "label": "int256",
          "numberOfBytes": "32"
        }
      }
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
};