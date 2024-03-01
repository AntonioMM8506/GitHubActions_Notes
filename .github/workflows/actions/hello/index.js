const core = require("@actions/core");
const github = require("@actions/github");

// core is used to interact directly with the yaml file
// When interacting with a yaml file using core, a good practice is to always use try-catch for the execution
try{
    core.debug("Debug");
    core.warning("Warning Message");
    core.error("Error Message");

    const name = core.getInput('who_to_greet');

    console.log(`Hello ${name}`)

    const time = new Date();
    core.setOutput("time", time.toString());

    core.exportVariable("HELLO_TIME", time);

    core.startGroup("Logging GitHub Context");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();

} catch(error){
    core.setFailed(error.message);
}
