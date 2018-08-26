function hello(name: string): [string, number] {
    return ['Hello, ' + name, 100]
}

const [words, times] = hello('typescript')

console.log(words + ' x ' + times + ' times')