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

  def test_3を渡したら2を返す
    assert_equal 2, Fibonacci.fib(3)
  end

  def test_4を渡したら3を返す
    assert_equal 3, Fibonacci.fib(4)
  end

  def test_5を渡したら5を返す
    assert_equal 5, Fibonacci.fib(5)
  end
end

class Fibonacci
  def self.fib(n)
    return 0 if n.zero?
    return 1 if n == 1

    fib(n - 1) + fib(n - 2)
  end
end
