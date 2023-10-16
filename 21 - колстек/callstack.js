
let i = 0;

function count() {
    i++;
    count();
}

try {
    count()
} catch {
    console.log(i)
}

// 13953 вызовов в яндексе
// 13948 - chrome
// 31591 - firefox DE
// 13950 - opera gx