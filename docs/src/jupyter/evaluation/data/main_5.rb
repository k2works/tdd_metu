
require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def fib(n)
    0
  end

  def test_fibonacci
    assert_equal 0, fib(0)
  end
end