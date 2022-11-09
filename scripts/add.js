const path = require("path");
const {spawn} = require("child_process")

// console.log(process.argv, process.cwd())
// const componentPath = `${process.cwd()}/src/stories/components/${process.argv[2]}`
const componentPath = path.resolve(process.cwd(), 'src', 'stories', 'components', process.argv[2])
console.log('componentPath',componentPath)

spawn("mkdir", ["-p", componentPath])
