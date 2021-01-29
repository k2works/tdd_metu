require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def test_0を渡したら0を返す
    assert_equal 0, Fibonacci.fib(0)
  end
end

class Fibonacci
  def self.fib(n)
    0
  end
end
