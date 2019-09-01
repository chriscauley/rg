import './_charts.js'

riot.tag2('rg-demo', '<h2>Alert</h2> <div class="demo"> <rg-alerts alerts="{alerts}"></rg-alerts> <button class="{css.button.default}" onclick="{addAlert}">Add alert</button> </div> <h2>Bubble</h2> <div class="demo"> <rg-bubble bubble="{bubble}">Hover over me</rg-bubble> <button class="{css.button.default}" onclick="{updateBubbleText}">Change bubble</button> </div> <h2>Code</h2> <div class="demo"> <rg-code editor="{editorSettings}"></rg-code> </div> <button class="{css.button.default}" onclick="{changeCode}">Change code</button> <h2>Chart</h2> <div class="demo"> <rg-chart class="chart-container" chart="{linechart}"></rg-chart> <rg-chart class="chart-container" chart="{barchart}"></rg-chart> <rg-chart class="chart-container" chart="{radarchart}"></rg-chart> <rg-chart class="chart-container" chart="{polarchart}"></rg-chart> <rg-chart class="chart-container" chart="{piechart}"></rg-chart> <rg-chart class="chart-container" chart="{doughnutchart}"></rg-chart> </div> <h2>Credit Card</h2> <div class="demo"> <rg-credit-card-number card="{creditcard}"></rg-credit-card-number> <button class="{css.button.default}" onclick="{changeCardNumber}">Change Card Number</button> </div> <h2>Date</h2> <div class="demo"> <rg-date date="{date}"></rg-date> {date.date} <button class="{css.button.default}" onclick="{changeDate}">Change date</button> </div> <h2>Drawer</h2> <div class="demo no-overflow"> <rg-drawer drawer="{drawer}"></rg-drawer> <button class="{css.button.default}" onclick="{openDrawer}">Open drawer</button> </div> <h2>GA</h2> <div class="demo"> Google Analytics tag is on this page. Look at Network tab in Developer Tools <rg-ga property="UA-36978977-5"></rg-ga> </div> <h2>iFramify</h2> <div class="demo"> <div class="component"> <p>This is a <span class="component-child">component</span>. Under 400px, the border of this component will go pink.</p> </div> <rg-iframify iframify="{iframify}"> <div class="component"> <p>This is a <span class="component-child">component</span>. Under 400px, the border of this component will go pink.</p> </div> </rg-iframify> </div> <h2>Include</h2> <div class="demo"> <div> <rg-include include="{include}"></rg-include> <rg-include include="{includeTwo}"></rg-include> <rg-include include="{includeThree}"></rg-include> </div> </div> <h2>Map</h2> <div class="demo"> <rg-map></rg-map> </div> <h2>Markdown</h2> <div class="demo"> <rg-markdown markdown="{markdown}"></rg-markdown> <button class="{css.button.default}" onclick="{changeMarkdown}">Change content</button> </div> <h2>Modal</h2> <div class="demo"> <rg-modal modal="{modal}"> Well hello there! </rg-modal> </div> <button class="{css.button.default}" onclick="{toggleModal}">Toggle modal</button> <button class="{css.button.default}" onclick="{toggleModalType}">Toggle type</button> <button class="{css.button.default}" onclick="{toggleModalDismissable}">Toggle dismissable</button> <h2>Pagination</h2> <div class="demo"> <rg-pagination pagination="{pagination}"></rg-pagination> </div> <h2>Phone Sim</h2> <div class="demo"> <rg-phone-sim url="{phonesim}"></rg-phone-sim> <button class="{css.button.default}" onclick="{changePhoneSimURL}">Change URL</button> </div> <h2>Placehold.it</h2> <div class="demo"> <rg-placeholdit placeholdit="{placeholdit}"></rg-placeholdit> </div> <button class="{css.button.default}" onclick="{changePlacholdIt}">Change image</button> <h2>Select</h2> <div class="demo"> <rg-select select="{select}"></rg-select> </div> <h2>Select -w/ filter</h2> <div class="demo"> <rg-select select="{selectWithFilter}"></rg-select> </div> <h2>Tabs</h2> <div class="demo"> <rg-tabs tabs="{tabs}"></rg-tabs> </div> <button class="{css.button.default}" onclick="{changeTabContent}">Change tab</button> <h2>Tags</h2> <div class="demo"> <rg-tags tags="{rgTags}"></rg-tags> </div> <h2>Toast</h2> <div class="demo"> <rg-toasts toasts="{toasts}"></rg-toasts> <button class="{css.button.default}" onclick="{changeToasts}">Change toasts</button> </div> <h2>Toggle</h2> <div class="demo"> <rg-toggle toggle="{toggle}">Click the switch or this text (label) to flip it!</rg-toggle> <br> <br> <button class="{css.button.default}" onclick="{changeToggle}">Change toggle</button> </div> <h2>Unsplash</h2> <div class="demo"> <rg-unsplash unsplash="{unsplash}"></rg-unsplash> </div> <button class="{css.button.default}" onclick="{changeUnsplash}">Change image</button> <h3>>> END</h3>', '', '', function(opts) {
var cov_er4tsr72s = function () {
  var path = "/home/chriscauley/projects/rg/demo/demo.tag";
  var hash = "624a03dc8cf39ab75f9e61d264a0fb2fceb0eafc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/chriscauley/projects/rg/demo/demo.tag",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 2
        },
        end: {
          line: 1,
          column: 24
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "2": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "3": {
        start: {
          line: 23,
          column: 3
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "4": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "5": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "6": {
        start: {
          line: 37,
          column: 3
        },
        end: {
          line: 39,
          column: 4
        }
      },
      "7": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 31
        }
      },
      "8": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 53,
          column: 3
        }
      },
      "9": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "10": {
        start: {
          line: 56,
          column: 3
        },
        end: {
          line: 56,
          column: 61
        }
      },
      "11": {
        start: {
          line: 57,
          column: 3
        },
        end: {
          line: 57,
          column: 42
        }
      },
      "12": {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 66,
          column: 3
        }
      },
      "13": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 70,
          column: 3
        }
      },
      "14": {
        start: {
          line: 69,
          column: 3
        },
        end: {
          line: 69,
          column: 48
        }
      },
      "15": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 79,
          column: 3
        }
      },
      "16": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 83,
          column: 3
        }
      },
      "17": {
        start: {
          line: 82,
          column: 3
        },
        end: {
          line: 82,
          column: 32
        }
      },
      "18": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 97,
          column: 3
        }
      },
      "19": {
        start: {
          line: 99,
          column: 2
        },
        end: {
          line: 101,
          column: 3
        }
      },
      "20": {
        start: {
          line: 100,
          column: 3
        },
        end: {
          line: 100,
          column: 31
        }
      },
      "21": {
        start: {
          line: 106,
          column: 2
        },
        end: {
          line: 106,
          column: 20
        }
      },
      "22": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 113,
          column: 3
        }
      },
      "23": {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 117,
          column: 3
        }
      },
      "24": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 121,
          column: 3
        }
      },
      "25": {
        start: {
          line: 126,
          column: 0
        },
        end: {
          line: 137,
          column: 2
        }
      },
      "26": {
        start: {
          line: 127,
          column: 2
        },
        end: {
          line: 136,
          column: 4
        }
      },
      "27": {
        start: {
          line: 128,
          column: 16
        },
        end: {
          line: 135,
          column: 5
        }
      },
      "28": {
        start: {
          line: 142,
          column: 2
        },
        end: {
          line: 144,
          column: 3
        }
      },
      "29": {
        start: {
          line: 145,
          column: 2
        },
        end: {
          line: 149,
          column: 3
        }
      },
      "30": {
        start: {
          line: 146,
          column: 3
        },
        end: {
          line: 148,
          column: 4
        }
      },
      "31": {
        start: {
          line: 154,
          column: 2
        },
        end: {
          line: 165,
          column: 3
        }
      },
      "32": {
        start: {
          line: 160,
          column: 18
        },
        end: {
          line: 160,
          column: 46
        }
      },
      "33": {
        start: {
          line: 163,
          column: 18
        },
        end: {
          line: 163,
          column: 46
        }
      },
      "34": {
        start: {
          line: 167,
          column: 2
        },
        end: {
          line: 169,
          column: 3
        }
      },
      "35": {
        start: {
          line: 168,
          column: 3
        },
        end: {
          line: 168,
          column: 47
        }
      },
      "36": {
        start: {
          line: 171,
          column: 2
        },
        end: {
          line: 173,
          column: 3
        }
      },
      "37": {
        start: {
          line: 172,
          column: 3
        },
        end: {
          line: 172,
          column: 39
        }
      },
      "38": {
        start: {
          line: 175,
          column: 2
        },
        end: {
          line: 177,
          column: 3
        }
      },
      "39": {
        start: {
          line: 176,
          column: 3
        },
        end: {
          line: 176,
          column: 51
        }
      },
      "40": {
        start: {
          line: 182,
          column: 2
        },
        end: {
          line: 186,
          column: 3
        }
      },
      "41": {
        start: {
          line: 185,
          column: 19
        },
        end: {
          line: 185,
          column: 36
        }
      },
      "42": {
        start: {
          line: 191,
          column: 2
        },
        end: {
          line: 193,
          column: 3
        }
      },
      "43": {
        start: {
          line: 194,
          column: 2
        },
        end: {
          line: 196,
          column: 3
        }
      },
      "44": {
        start: {
          line: 195,
          column: 3
        },
        end: {
          line: 195,
          column: 43
        }
      },
      "45": {
        start: {
          line: 201,
          column: 2
        },
        end: {
          line: 201,
          column: 23
        }
      },
      "46": {
        start: {
          line: 202,
          column: 2
        },
        end: {
          line: 210,
          column: 3
        }
      },
      "47": {
        start: {
          line: 203,
          column: 3
        },
        end: {
          line: 203,
          column: 31
        }
      },
      "48": {
        start: {
          line: 204,
          column: 3
        },
        end: {
          line: 204,
          column: 32
        }
      },
      "49": {
        start: {
          line: 205,
          column: 3
        },
        end: {
          line: 205,
          column: 41
        }
      },
      "50": {
        start: {
          line: 206,
          column: 3
        },
        end: {
          line: 206,
          column: 33
        }
      },
      "51": {
        start: {
          line: 207,
          column: 3
        },
        end: {
          line: 207,
          column: 33
        }
      },
      "52": {
        start: {
          line: 208,
          column: 3
        },
        end: {
          line: 208,
          column: 33
        }
      },
      "53": {
        start: {
          line: 209,
          column: 3
        },
        end: {
          line: 209,
          column: 34
        }
      },
      "54": {
        start: {
          line: 215,
          column: 2
        },
        end: {
          line: 231,
          column: 3
        }
      },
      "55": {
        start: {
          line: 236,
          column: 2
        },
        end: {
          line: 253,
          column: 3
        }
      },
      "56": {
        start: {
          line: 258,
          column: 2
        },
        end: {
          line: 258,
          column: 20
        }
      },
      "57": {
        start: {
          line: 259,
          column: 2
        },
        end: {
          line: 267,
          column: 3
        }
      },
      "58": {
        start: {
          line: 260,
          column: 3
        },
        end: {
          line: 260,
          column: 28
        }
      },
      "59": {
        start: {
          line: 261,
          column: 3
        },
        end: {
          line: 261,
          column: 29
        }
      },
      "60": {
        start: {
          line: 262,
          column: 3
        },
        end: {
          line: 262,
          column: 35
        }
      },
      "61": {
        start: {
          line: 263,
          column: 3
        },
        end: {
          line: 263,
          column: 32
        }
      },
      "62": {
        start: {
          line: 264,
          column: 3
        },
        end: {
          line: 264,
          column: 30
        }
      },
      "63": {
        start: {
          line: 265,
          column: 3
        },
        end: {
          line: 265,
          column: 30
        }
      },
      "64": {
        start: {
          line: 266,
          column: 3
        },
        end: {
          line: 266,
          column: 34
        }
      },
      "65": {
        start: {
          line: 272,
          column: 2
        },
        end: {
          line: 275,
          column: 3
        }
      },
      "66": {
        start: {
          line: 277,
          column: 2
        },
        end: {
          line: 279,
          column: 3
        }
      },
      "67": {
        start: {
          line: 278,
          column: 3
        },
        end: {
          line: 278,
          column: 45
        }
      },
      "68": {
        start: {
          line: 284,
          column: 2
        },
        end: {
          line: 304,
          column: 3
        }
      },
      "69": {
        start: {
          line: 309,
          column: 2
        },
        end: {
          line: 315,
          column: 3
        }
      },
      "70": {
        start: {
          line: 317,
          column: 2
        },
        end: {
          line: 322,
          column: 3
        }
      },
      "71": {
        start: {
          line: 318,
          column: 3
        },
        end: {
          line: 320,
          column: 5
        }
      },
      "72": {
        start: {
          line: 321,
          column: 3
        },
        end: {
          line: 321,
          column: 38
        }
      },
      "73": {
        start: {
          line: 327,
          column: 2
        },
        end: {
          line: 345,
          column: 3
        }
      },
      "74": {
        start: {
          line: 347,
          column: 2
        },
        end: {
          line: 350,
          column: 3
        }
      },
      "75": {
        start: {
          line: 348,
          column: 3
        },
        end: {
          line: 348,
          column: 57
        }
      },
      "76": {
        start: {
          line: 349,
          column: 3
        },
        end: {
          line: 349,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 18
          },
          end: {
            line: 22,
            column: 19
          }
        },
        loc: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 36,
            column: 26
          },
          end: {
            line: 36,
            column: 27
          }
        },
        loc: {
          start: {
            line: 36,
            column: 32
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 36
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 55,
            column: 20
          },
          end: {
            line: 55,
            column: 21
          }
        },
        loc: {
          start: {
            line: 55,
            column: 26
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 55
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 68,
            column: 26
          },
          end: {
            line: 68,
            column: 27
          }
        },
        loc: {
          start: {
            line: 68,
            column: 32
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 81,
            column: 20
          },
          end: {
            line: 81,
            column: 21
          }
        },
        loc: {
          start: {
            line: 81,
            column: 26
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 81
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 99,
            column: 20
          },
          end: {
            line: 99,
            column: 21
          }
        },
        loc: {
          start: {
            line: 99,
            column: 26
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 99
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 126,
            column: 17
          },
          end: {
            line: 126,
            column: 18
          }
        },
        loc: {
          start: {
            line: 126,
            column: 23
          },
          end: {
            line: 137,
            column: 1
          }
        },
        line: 126
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 127,
            column: 35
          },
          end: {
            line: 127,
            column: 36
          }
        },
        loc: {
          start: {
            line: 127,
            column: 42
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 127
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 145,
            column: 24
          },
          end: {
            line: 145,
            column: 25
          }
        },
        loc: {
          start: {
            line: 145,
            column: 30
          },
          end: {
            line: 149,
            column: 3
          }
        },
        line: 145
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 160,
            column: 12
          },
          end: {
            line: 160,
            column: 13
          }
        },
        loc: {
          start: {
            line: 160,
            column: 18
          },
          end: {
            line: 160,
            column: 46
          }
        },
        line: 160
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 163,
            column: 12
          },
          end: {
            line: 163,
            column: 13
          }
        },
        loc: {
          start: {
            line: 163,
            column: 18
          },
          end: {
            line: 163,
            column: 46
          }
        },
        line: 163
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 167,
            column: 21
          },
          end: {
            line: 167,
            column: 22
          }
        },
        loc: {
          start: {
            line: 167,
            column: 27
          },
          end: {
            line: 169,
            column: 3
          }
        },
        line: 167
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 171,
            column: 25
          },
          end: {
            line: 171,
            column: 26
          }
        },
        loc: {
          start: {
            line: 171,
            column: 31
          },
          end: {
            line: 173,
            column: 3
          }
        },
        line: 171
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 175,
            column: 32
          },
          end: {
            line: 175,
            column: 33
          }
        },
        loc: {
          start: {
            line: 175,
            column: 38
          },
          end: {
            line: 177,
            column: 3
          }
        },
        line: 175
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 185,
            column: 12
          }
        },
        loc: {
          start: {
            line: 185,
            column: 19
          },
          end: {
            line: 185,
            column: 36
          }
        },
        line: 185
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 194,
            column: 27
          },
          end: {
            line: 194,
            column: 28
          }
        },
        loc: {
          start: {
            line: 194,
            column: 33
          },
          end: {
            line: 196,
            column: 3
          }
        },
        line: 194
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 202,
            column: 26
          },
          end: {
            line: 202,
            column: 27
          }
        },
        loc: {
          start: {
            line: 202,
            column: 32
          },
          end: {
            line: 210,
            column: 3
          }
        },
        line: 202
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 259,
            column: 24
          },
          end: {
            line: 259,
            column: 25
          }
        },
        loc: {
          start: {
            line: 259,
            column: 30
          },
          end: {
            line: 267,
            column: 3
          }
        },
        line: 259
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 277,
            column: 22
          },
          end: {
            line: 277,
            column: 23
          }
        },
        loc: {
          start: {
            line: 277,
            column: 28
          },
          end: {
            line: 279,
            column: 3
          }
        },
        line: 277
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 317,
            column: 22
          },
          end: {
            line: 317,
            column: 23
          }
        },
        loc: {
          start: {
            line: 317,
            column: 28
          },
          end: {
            line: 322,
            column: 3
          }
        },
        line: 317
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 347,
            column: 26
          },
          end: {
            line: 347,
            column: 27
          }
        },
        loc: {
          start: {
            line: 347,
            column: 32
          },
          end: {
            line: 350,
            column: 3
          }
        },
        line: 347
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "624a03dc8cf39ab75f9e61d264a0fb2fceb0eafc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_er4tsr72s.s[0]++;
this.mixin("CSSMixin");
/*
 * ALERTS
 */

cov_er4tsr72s.s[1]++;
this.alerts = [{
  type: 'primary',
  text: 'Look! Something you should know about.'
}, {
  type: 'secondary',
  text: 'Warning! Something sort of bad happened.',
  dismissable: false
}, {
  type: 'success',
  text: 'Success! Well done.'
}, {
  type: 'error',
  text: 'Error! Something bad happened.',
  dismissable: true,
  timeout: 2000
}];
cov_er4tsr72s.s[2]++;

this.addAlert = () => {
  cov_er4tsr72s.f[0]++;
  cov_er4tsr72s.s[3]++;
  this.alerts.push({
    type: 'error',
    text: 'Eeek! Something broke...'
  });
};
/*
 * BUBBLE
 */

cov_er4tsr72s.s[4]++;
this.bubble = {
  text: 'Ping'
};
cov_er4tsr72s.s[5]++;

this.updateBubbleText = () => {
  cov_er4tsr72s.f[1]++;
  cov_er4tsr72s.s[6]++;
  this.bubble = {
    text: 'Pong!'
  };
};
/*
 * CHART
 */

cov_er4tsr72s.s[7]++;
Object.assign(this, _charts);
/*
 * CODE
 */

cov_er4tsr72s.s[8]++;
this.editorSettings = {
  code: '<h2>Hello world!</h2>'
};
cov_er4tsr72s.s[9]++;

this.changeCode = () => {
  cov_er4tsr72s.f[2]++;
  cov_er4tsr72s.s[10]++;
  this.editorSettings.code = 'this.msg = "Hello RiotGear!";';
  cov_er4tsr72s.s[11]++;
  this.editorSettings.mode = 'javascript';
};
/*
 * CREDIT CARD NUMBER
 */

cov_er4tsr72s.s[12]++;
this.creditcard = {
  placeholder: 'Long number on front',
  cardnumber: '4000 0000 0000 0002'
};
cov_er4tsr72s.s[13]++;

this.changeCardNumber = () => {
  cov_er4tsr72s.f[3]++;
  cov_er4tsr72s.s[14]++;
  this.creditcard.cardnumber = 5105105105105100;
};
/*
 * DATE
 */

cov_er4tsr72s.s[15]++;
this.date = {
  date: moment(),
  min: moment().startOf('year'),
  max: moment().endOf('year')
};
cov_er4tsr72s.s[16]++;

this.changeDate = () => {
  cov_er4tsr72s.f[4]++;
  cov_er4tsr72s.s[17]++;
  this.date.date = '2015-01-01';
};
/*
 * DRAWER
 */

cov_er4tsr72s.s[18]++;
this.drawer = {
  header: 'Drawer',
  isvisible: true,
  position: 'bottom',
  items: [{
    text: 'Item 1'
  }, {
    text: 'Item 2'
  }]
};
cov_er4tsr72s.s[19]++;

this.openDrawer = () => {
  cov_er4tsr72s.f[5]++;
  cov_er4tsr72s.s[20]++;
  this.drawer.isvisible = true;
};
/*
 * IFRAMIFY
 */

cov_er4tsr72s.s[21]++;
this.iframify = {};
/*
 * INCLUDE
 */

cov_er4tsr72s.s[22]++;
this.include = {
  url: 'inc.html'
};
cov_er4tsr72s.s[23]++;
this.includeTwo = {
  url: 'inc.html',
  unsafe: true
};
cov_er4tsr72s.s[24]++;
this.includeThree = {
  url: 'inc2.html',
  unsafe: true
  /*
   * MAP
   */

};
cov_er4tsr72s.s[25]++;
this.on("mount", () => {
  cov_er4tsr72s.f[6]++;
  cov_er4tsr72s.s[26]++;
  this.tags['rg-map'].on('loaded', map => {
    cov_er4tsr72s.f[7]++;
    var marker = (cov_er4tsr72s.s[27]++, new google.maps.Marker({
      position: {
        lat: 53.806,
        lng: -1.535
      },
      map: map,
      title: 'Hello RiotGear!'
    }));
  });
});
/*
 * MARKDOWN
 */

cov_er4tsr72s.s[28]++;
this.markdown = {
  content: '**Some** content'
};
cov_er4tsr72s.s[29]++;

this.changeMarkdown = () => {
  cov_er4tsr72s.f[8]++;
  cov_er4tsr72s.s[30]++;
  this.markdown = {
    url: 'inc.md'
  };
};
/*
 * MODAL
 */

cov_er4tsr72s.s[31]++;
this.modal = {
  isvisible: true,
  heading: 'Modal heading',
  buttons: [{
    text: 'Ok',
    type: 'primary',
    action: () => {
      cov_er4tsr72s.f[9]++;
      cov_er4tsr72s.s[32]++;
      return this.modal.isvisible = false;
    }
  }, {
    text: 'Canel',
    action: () => {
      cov_er4tsr72s.f[10]++;
      cov_er4tsr72s.s[33]++;
      return this.modal.isvisible = false;
    }
  }]
};
cov_er4tsr72s.s[34]++;

this.toggleModal = () => {
  cov_er4tsr72s.f[11]++;
  cov_er4tsr72s.s[35]++;
  this.modal.isvisible = !this.modal.isvisible;
};

cov_er4tsr72s.s[36]++;

this.toggleModalType = () => {
  cov_er4tsr72s.f[12]++;
  cov_er4tsr72s.s[37]++;
  this.modal.ghost = !this.modal.ghost;
};

cov_er4tsr72s.s[38]++;

this.toggleModalDismissable = () => {
  cov_er4tsr72s.f[13]++;
  cov_er4tsr72s.s[39]++;
  this.modal.dismissable = !this.modal.dismissable;
};
/*
 * PAGINATION
 */

cov_er4tsr72s.s[40]++;
this.pagination = {
  pages: 100,
  page: 3,
  action: page => {
    cov_er4tsr72s.f[14]++;
    cov_er4tsr72s.s[41]++;
    return console.log(page);
  }
  /*
   * PHONE SIM
   */

};
cov_er4tsr72s.s[42]++;
this.phonesim = {
  url: 'http://riotgear.js.org/'
};
cov_er4tsr72s.s[43]++;

this.changePhoneSimURL = () => {
  cov_er4tsr72s.f[15]++;
  cov_er4tsr72s.s[44]++;
  this.phonesim.url = 'http://riot.js.org';
};
/*
 * PLACEHOLDIT
 */

cov_er4tsr72s.s[45]++;
this.placeholdit = {};
cov_er4tsr72s.s[46]++;

this.changePlacholdIt = () => {
  cov_er4tsr72s.f[16]++;
  cov_er4tsr72s.s[47]++;
  this.placeholdit.width = 200;
  cov_er4tsr72s.s[48]++;
  this.placeholdit.height = 100;
  cov_er4tsr72s.s[49]++;
  this.placeholdit.background = '1fadc5';
  cov_er4tsr72s.s[50]++;
  this.placeholdit.color = '4df';
  cov_er4tsr72s.s[51]++;
  this.placeholdit.textsize = 50;
  cov_er4tsr72s.s[52]++;
  this.placeholdit.text = 'JPEG';
  cov_er4tsr72s.s[53]++;
  this.placeholdit.format = 'jpg';
};
/*
 * SELECT
 */

cov_er4tsr72s.s[54]++;
this.select = {
  placeholder: 'Please select a card',
  options: [{
    id: 0,
    text: 'Visa'
  }, {
    id: 1,
    text: 'MasterCard',
    selected: true
  }, {
    id: 2,
    text: 'American Express'
  }, {
    id: 3,
    text: 'Discover'
  }]
  /*
   * SELECT WITH FILTER
   */

};
cov_er4tsr72s.s[55]++;
this.selectWithFilter = {
  placeholder: 'Please select a card',
  filter: 'text',
  options: [{
    id: 0,
    text: 'Visa'
  }, {
    id: 1,
    text: 'MasterCard',
    selected: true
  }, {
    id: 2,
    text: 'American Express'
  }, {
    id: 3,
    text: 'Discover'
  }]
  /*
   * UNSPLASH
   */

};
cov_er4tsr72s.s[56]++;
this.unsplash = {};
cov_er4tsr72s.s[57]++;

this.changeUnsplash = () => {
  cov_er4tsr72s.f[17]++;
  cov_er4tsr72s.s[58]++;
  this.unsplash.width = 200;
  cov_er4tsr72s.s[59]++;
  this.unsplash.height = 100;
  cov_er4tsr72s.s[60]++;
  this.unsplash.greyscale = "true";
  cov_er4tsr72s.s[61]++;
  this.unsplash.random = "true";
  cov_er4tsr72s.s[62]++;
  this.unsplash.blur = "true";
  cov_er4tsr72s.s[63]++;
  this.unsplash.image = "491";
  cov_er4tsr72s.s[64]++;
  this.unsplash.gravity = "north";
};
/*
 * TOGGLE
 */

cov_er4tsr72s.s[65]++;
this.toggle = {
  type: 'primary',
  checked: true
};
cov_er4tsr72s.s[66]++;

this.changeToggle = () => {
  cov_er4tsr72s.f[18]++;
  cov_er4tsr72s.s[67]++;
  this.toggle.checked = !this.toggle.checked;
};
/*
 * TAGS
 */

cov_er4tsr72s.s[68]++;
this.rgTags = {
  placeholder: 'Choose a country',
  filter: 'text',
  options: [{
    id: 0,
    text: 'England'
  }, {
    id: 0,
    text: 'Scotland'
  }, {
    id: 0,
    text: 'Ireland'
  }, {
    id: 0,
    text: 'Wales'
  }],
  tags: [{
    id: 0,
    text: 'Russia'
  }]
  /*
   * TOASTS
   */

};
cov_er4tsr72s.s[69]++;
this.toasts = {
  position: 'topright',
  toasts: [{
    type: 'primary',
    text: 'Hey look at me!'
  }]
};
cov_er4tsr72s.s[70]++;

this.changeToasts = () => {
  cov_er4tsr72s.f[19]++;
  cov_er4tsr72s.s[71]++;
  this.toasts.toasts.push({
    text: 'Me is a new toast'
  });
  cov_er4tsr72s.s[72]++;
  this.toasts.position = 'bottomleft';
};
/*
 * TABS
 */

cov_er4tsr72s.s[73]++;
this.tabs = {
  type: 'primary',
  tabs: [{
    heading: 'Tab one',
    text: 'This is tab one'
  }, {
    heading: 'Tab two',
    text: 'This is tab two',
    active: true
  }, {
    heading: 'Disabled tab',
    text: 'This is disabled tab',
    disabled: true
  }, {
    heading: 'Tab three',
    text: 'This is tab three content',
    include: 'tab.html'
  }]
};
cov_er4tsr72s.s[74]++;

this.changeTabContent = () => {
  cov_er4tsr72s.f[20]++;
  cov_er4tsr72s.s[75]++;
  this.tabs.tabs[0].heading = 'take a look at tab three';
  cov_er4tsr72s.s[76]++;
  this.tabs.tabs[3].include = 'inc.html';
};
});
