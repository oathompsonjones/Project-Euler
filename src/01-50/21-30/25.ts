const fibonacciDigits = [1n, 1n];

const fibonacci = (): bigint[] | number[] => {
    if (fibonacciDigits[fibonacciDigits.length - 1]?.toString().length === 1000)
        return fibonacciDigits;

    fibonacciDigits.push(fibonacciDigits[fibonacciDigits.length - 1]! + fibonacciDigits[fibonacciDigits.length - 2]!);

    return fibonacci();
};

export default fibonacci().length;
