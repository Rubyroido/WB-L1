let i = 0;
// не сообразил как можно вызывать doc.write внутри другого write
// при таком варианте console.log выводит 10464
// но в статье с хабра - https://habr.com/ru/articles/305366/, автор пишет, что вызвать этот метод внутри себя можно 20 раз
// так что полагаб, что я делаю что-то не так

function write() {
    i++;
    document.write(`<script> ${write()} </script>`);
}

try {
    write()
} catch (err) {
    console.log(i, err)
}