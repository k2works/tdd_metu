require 'minitest/autorun'

class FibonacciTest < Minitest::Test
  def test_greeting
    assert_equal 'Hello', Fibonacci.greeting
  end
end

class Fibonacci
  def self.greeting
    'Hello'
  end
end
