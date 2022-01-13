# diff-logger
Multi channel logger for comparing state changes in a processing engine.

## Usage

    //  create a new Logger
    let { Logger } = require("@glas/diff-logger");
    let logger = Logger("./lib/output.html");

    //  write different named states to it
    let state = ["A", "B", "C"];
    logger("initial", state);
    state[1] = "Bar";
    logger("second", state);

    //  finalize the log which will write the output
    logger();
