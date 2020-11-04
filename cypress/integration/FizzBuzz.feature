Feature: FizzBuzz

    1 から 100 までの数をプリントするプログラムを書け。
    ただし 3 の倍数のときは数の代わりに｢Fizz｣と、5 の倍数のときは｢Buzz｣とプリントし、
    3 と 5 両方の倍数の場合には｢FizzBuzz｣とプリントすること
    タイプごとに出力を切り替えることができる。
    タイプ１は通常、タイプ２は数字のみ、タイプ３は FizzBuzzの場合のみをプリントする。

    Scenario: FizzBuzz画面
        Given "FizzBuzz" ページにアクセスする
        Then 機能名 "FizzBuzz" が表示される

    Scenario: カウンターインクリメント
        Given "FizzBuzz" ページにアクセスする
        Given インクリメントする
        Then "Fizz" が表示される

    Scenario: カウンターデクリメント
        Given "FizzBuzz" ページにアクセスする
        Given インクリメントする
        Given デクリメントする
        Then "1" が表示される

    Scenario: 一覧表示画面
        Given "FizzBuzz" ページにアクセスする
        Then 1から100までのパターンが表示される

    Scenario: 一覧表示タイプ1
        Given "FizzBuzz" ページにアクセスする
        Given タイプ "1" を選択する
        Then 3ならばFizz,5ならばBuzz,15ならばFizzBuzzが表示される

    Scenario: 一覧表示タイプ2
        Given "FizzBuzz" ページにアクセスする
        Given タイプ "2" を選択する
        Then 3ならば3,5ならば5,15ならば15が表示される

    Scenario: 一覧表示タイプ3
        Given "FizzBuzz" ページにアクセスする
        Given タイプ "3" を選択する
        Then 3ならば3,5ならば5,15ならばFizzBuzzが表示される
