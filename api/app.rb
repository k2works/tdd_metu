require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def setup
    @fib = Fibonacci
    @recursive = FibonacciRecursive.new
  end

  def test_fibonacci
    cases = [[0, 0], [1, 1], [2, 1], [3, 2], [4, 3], [5, 5]]
    cases.each do |i|
      assert_equal i[1], @recursive.exec(i[0])
    end
  end

  def test_大きな数字_再起処理による実装
    assert_equal 102_334_155, @recursive.exec(40)
  end

  def test_大きな数字_ループ処理による実装
    assert_equal 102_334_155, @fib.loop(40)
  end

  def test_大きな数字_一般項による実装
    assert_equal 102_334_155, @fib.geneeral_term(40)
  end
end

class Fibonacci
  def self.recursive(number, memo = {})
    return 0 if number.zero?
    return 1 if number == 1

    memo[number] ||= recursive(number - 1, memo) + recursive(number - 2, memo)
  end

  def self.loop(number)
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

  def self.geneeral_term(number)
    a = ((1 + Math.sqrt(5)) / 2)**number
    b = ((1 - Math.sqrt(5)) / 2)**number
    ((a - b) / Math.sqrt(5)).round
  end
end

class FibonacciRecursive
 def exec(number, memo = [])
    return 0 if number.zero?
    return 1 if number == 1

    memo[number] ||= exec(number - 1, memo) + exec(number - 2, memo)
 end
end
