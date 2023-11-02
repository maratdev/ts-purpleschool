const n: null = null;
const n1: any = null;

function foo(values: string) {
  return values.toUpperCase();
// остальная логика
}

// foo(null); // Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
