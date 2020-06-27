process.env.DEV = "TEST";
import 'mocha';
import glob from "glob"

var test_files = glob.sync('../*/*.test.js');

var mocha = new Mocha({
    reporter: 'list'
});

test_files.forEach((file) => {
    mocha.addFile(file);
});

setTimeout(() => {
    mocha.run((failures) => {
        process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
    });
}, 2000);
