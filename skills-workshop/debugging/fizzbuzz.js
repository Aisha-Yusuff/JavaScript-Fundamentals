class FizzBuzz {
  play(number) {
    if (this.isDivisibleBy(15, number)) {
      return 'FizzBuzz';
    } else if (this.isDivisibleBy(5, number)) {
      return 'Buzz';
    } else if (this.isDivisibleBy(3, number)) {
      return 'Fizz';
    }
    else { 
      return number;
    }
  }

  isDivisibleBy(divisor, number) {
    return (number % divisor === 0);
  }
}

const game = new FizzBuzz();
game.play();
game.isDivisibleBy();

for (let i = 1; i <= 10; i++) {
  console.log(game.play(i));
}