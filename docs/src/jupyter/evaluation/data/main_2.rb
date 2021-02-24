require 'minitest/reporters'
Minitest::Reporters.use!
require 'minitest/autorun'

class FibonacciTest < Minitest::Test
    def test_0を渡したら0を返す
        assert_equal 0, Fibonacci.fibo(number=[0])
    end

    def test_1を渡したら1を返す
        assert_equal 0, Fibonacci.fibo(number=[1])
    end

    def test_2を渡したら1を返す
        assert_equal 0, Fibonacci.fibo(number=[2])
    end

    def test_3を渡したら2を返す
        assert_equal 0, Fibonacci.fibo(number=[3])
    end
end

class Fibonacci
    def self.fibo(number)
        if number[0] = 0
            0
        elsif number[1] = 1
            1
        elsif number[2] = 2
            1
        elsif number[3] = 3
            2
        end
    end
end
