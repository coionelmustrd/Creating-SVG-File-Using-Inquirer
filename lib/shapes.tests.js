const { Triangle, Circle, Square } = require('./shapes');
test('Triangle render', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
test('Circle render', () => {
  const shape = new Circle();
  shape.setColor('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});
test('Square render', () => {
  const shape = new Square();
  shape.setColor('green');
  expect(shape.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
});