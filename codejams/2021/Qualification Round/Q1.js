// node template.js < A-small.in > A-small.out

function main() {
    let testCases = nextInt();
    for (let testCase = 1; testCase <= testCases; testCase++) {
        let listmembers = nextInt();
        let list = [];
        for (let i = 0; i < listmembers; i++) {
            list.push(nextInt());
        }
        let cost = 0;
        for (let i = 0; i < listmembers - 1; i++) {
            let currentlist = list.slice(i);
            let min = Math.min(...currentlist);
            let index = currentlist.indexOf(min);
            print("list1:" + list);
            const tmp = currentlist[index];
            currentlist[index] = currentlist[i];
            list[i + index] = tmp;
            print("list2:" + list);
        }
        print("Case #" + testCase + ": " + list);
        // print("Case #" + testCase + ": " + cost);
    }
}

function nextInt() {
    return parseInt(next());
}

// auxiliary code
let curTokens = [], curToken = 0;

function next() {
    while (curToken >= curTokens.length) {
        curTokens = readline().split(/[\s]+/);
        curToken = 0;
    }
    return curTokens[curToken++];
}

// code for nodejs
var inputBuffer = '', curLine = 0;

function readline() {
    return inputBuffer[curLine++];
}

function print(data) {
    process.stdout.write(data + '\n');
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    inputBuffer += chunk;
});

process.stdin.on('end', function () {
    inputBuffer = inputBuffer.split(/[\s]+/);
    main();
});
