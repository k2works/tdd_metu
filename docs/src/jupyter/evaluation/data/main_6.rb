
require 'minitest/autorun'

class   Test < Minitest::Test
  def a
    assert_equal 0, fib.fi(0)
  end

  def a1
    assert_equal 1, fib.fi(1)
  end

  def a2
    assert_equal 1, fib.fi(2)
  end
end

class Fib
end
