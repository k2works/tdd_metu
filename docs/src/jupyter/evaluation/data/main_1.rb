require 'minitest/reporters'
Minitest::Reporters.use!
require 'minitest/autorun'

class FnTest < Minitest::Test

    def test_0
        Fn.setup
        assert_equal 0, Fn.keisan(0)
    end

    def test_1
        Fn.setup
        assert_equal 1, Fn.keisan(1)
    end

    def test_2
        Fn.setup
        assert_equal 1, Fn.keisan(2)
    end

    def test_3
        Fn.setup
        assert_equal 2, Fn.keisan(3)
    end

end

class Fn

    def self.setup
        @line = []
        0.upto(100) do | i |
            @line[i] = 9
        end
        @line[0] = 0
        @line[1] = 1
    end

    def self.keisan(n)
        if n > 1
            Fn.wa(n)
        end
        @line[n]
    end

    def self.wa(x)
        m = 0
        while m > x
            @line[x] = @line[x-1] + @line[x-2]
            @line[n]
            m += 1
        end
        if x < 2
            @line[n] = n
        end
    end
end