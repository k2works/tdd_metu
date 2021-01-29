require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def test_0を渡したら0を返す
    assert_equal 0, Fibonacci.fib(0)
  end

  def test_1を渡したら1を返す
    assert_equal 1, Fibonacci.fib(1)
  end

  def test_2を渡したら1を返す
    assert_equal 1, Fibonacci.fib(2)
  end
end

class Fibonacci
  def self.fib(n)
    return 0 if n.zero?

    1
  end
end
