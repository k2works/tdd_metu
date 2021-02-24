require 'minitest/reporters'
Minitest::Reporters.use!
require 'minitest/autorun'

# todolist
# ０を渡したら０を返す OK
# １を渡したら１を返す OK
# ２を渡したら１を返す OK
# ３を渡したら２を返す OK
# ５を渡したら５を返す OK


class FiboTest < Minitest::Test
    def test_0を渡すと0を返す
        Fibo.setup
        assert_equal 0, Fibo.handan(0)
    end
    def test_1を渡すと1を返す
        Fibo.setup
        assert_equal 1, Fibo.handan(1)
    end
    def test_2を渡すと1を返す
        Fibo.setup
        assert_equal 1, Fibo.handan(2)
    end
    def test_3を渡すと2を返す
        Fibo.setup
        assert_equal 2, Fibo.handan(3)
    end
    def test_5を渡すと5を返す
        Fibo.setup
        assert_equal 5, Fibo.handan(5)
    end
end

class Fibo
    def self.setup
        @hairetu = [0]
        @hairetu[0] = 0
        @hairetu[1] = 1
    end
    def self.handan(n)
        if n >= 2
            Fibo.keisan(n)
        end
        @hairetu[n]
    end
    def self.keisan(n)
            @hairetu[n] = Fibo.handan(n-2) + Fibo.handan(n-1)
            @hairetu[n]
    end

end