require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def setup
    @fib = Fibonacci
  end

  def test_0を渡したら0を返す
    assert_equal 0, @fib.fib(0)
  end

  def test_1を渡したら1を返す
    assert_equal 1, @fib.fib(1)
  end

  def test_2を渡したら1を返す
    assert_equal 1, @fib.fib(2)
  end

  def test_3を渡したら2を返す
    assert_equal 2, @fib.fib(3)
  end

  def test_4を渡したら3を返す
    assert_equal 3, @fib.fib(4)
  end

  def test_5を渡したら5を返す
    assert_equal 5, @fib.fib(5)
  end
end

class Fibonacci
  def self.fib(n)
    return 0 if n.zero?
    return 1 if n == 1

    fib(n - 1) + fib(n - 2)
  end
end
