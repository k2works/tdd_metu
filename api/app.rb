class Fibonacci
  def initialize(algorithm)
    @algorithm = algorithm
  end

  def exec(number)
    @algorithm.exec(number)
  end
end

class FibonacciRecursive
 def exec(number, memo = [])
    return 0 if number.zero?
    return 1 if number == 1

    memo[number] ||= exec(number - 1, memo) + exec(number - 2, memo)
 end
end

class FibonacciLoop
  def exec(number)
    a = 0
    b = 1
    c = 0
    (0...number).each do |i|
      a = b
      b = c
      c = a + b
    end
    c
  end
end

class FibonacciGeneralTerm
  def exec(number)
    a = ((1 + Math.sqrt(5)) / 2)**number
    b = ((1 - Math.sqrt(5)) / 2)**number
    ((a - b) / Math.sqrt(5)).round
  end
end
