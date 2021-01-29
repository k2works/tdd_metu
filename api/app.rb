require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def setup
    @fib = Fibonacci
  end

  def test_0を渡したら0を返す
    assert_equal 0, @fib.calc(0)
  end

  def test_1を渡したら1を返す
    assert_equal 1, @fib.calc(1)
  end

  def test_2を渡したら1を返す
    assert_equal 1, @fib.calc(2)
  end

  def test_3を渡したら2を返す
    assert_equal 2, @fib.calc(3)
  end

  def test_4を渡したら3を返す
    assert_equal 3, @fib.calc(4)
  end

  def test_5を渡したら5を返す
    assert_equal 5, @fib.calc(5)
  end
end

class Fibonacci
  def self.calc(number)
    return 0 if number.zero?
    return 1 if number == 1

    calc(number - 1) + calc(number - 2)
  end
end
