require 'minitest/autorun'
require_relative './app'

class FibonacciTest < Minitest::Test
  def setup
    @recursive = Fibonacci.new(FibonacciRecursive.new)
    @loop = Fibonacci.new(FibonacciLoop.new)
    @general_term = Fibonacci.new(FibonacciGeneralTerm.new)
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
    assert_equal 102_334_155, @loop.exec(40)
  end

  def test_大きな数字_一般項による実装
    assert_equal 102_334_155, @general_term.exec(40)
  end
end
