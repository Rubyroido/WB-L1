// альтернативный вариант преобразования JSON строки в объект - это eval()

const test = '{"name":"John","age":30,"isStudent":false,"friends":["Alex","Mary"],"address":{"city":"New York","street":"123 Main St"}}';

// eval выполняет код из строки, переданной в качестве аргумента, поэтому использование этого метода для парсинга небезопасно
var parsedJson = eval('(' + test + ')');

console.log(parsedJson)