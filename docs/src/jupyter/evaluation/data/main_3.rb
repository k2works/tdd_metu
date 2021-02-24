require 'minitest/autorun'


=begin
TODOリスト
・0を渡したら0を返す
・1を渡したら1を返す
・2を渡したら1を返す
・配列を作る
・配列を処理して3に対し2を返す
・配列を処理して10に対し55を返す
=end

class Kadai < Minitest::Test
    def test_0を渡したら0を返す
        assert_equal 0, Fib.set(0)
    end

    def test_1を渡したら1を返す
        assert_equal 1, Fib.set(1)
    end

    def test_2を渡したら1を返す
        assert_equal 1, Fib.set(2)
    end

    def test_3を渡したら配列を処理して2を返す
        assert_equal 2, Fib.fib(3)
    end

    def test_5を渡したら配列を処理して5を返す
        assert_equal 5, Fib.fiblist(5)
    end

    def test_10を渡したら配列を処理して55を返す
        assert_equal 55, Fib.fiblist(10)
    end
end


class Fib
    def self.set(n)
        @array = [0,1,1]
        @array[n]
    end

    def self.fib(n)
        result = @array[n-1] + @array[n-2]
        result
    end

    def self.fiblist(n)
        (2..100).each{|num|
            @array[num] = @array[num-1] + @array[num-2]
        }
        return @array[n]
    end
end