# jfunction
This jfunction is the code to add the function in javascript
このjfunctionは、javascriptで関数を追加する自作ライブラリです
# jfunctionについて
関数を色々追加したり、簡単に記述出来るようにしたものです
### バージョン
v1.0.0 最初期です
v1.0.1 少し軽量になりました
v1.0.2新しい関数を追加しました
v1.0.3,v1.0.4新関数とgetに新しい物が追加されました
## 追加される関数
```
get.byid(name)
get.byclass(name)
get.bytag(name)
```
すべて
```
getElementById(name)
getElementByclassname(name)
getElementByTagname(name)
```
と同じ
次、
```
getRandom(num1,num2)
```
これは第1引数から第2引数までの整数を表示するメソッドですまた、第2引数が第1引数を超える場合にはNaNが返されます。次、
```
division(num1,num2)
```
これは割り算なんですが、整数の余り無しで出力されます(余りを求めるなら%)
次、
```
percent(num1,num2)
```
これは単純にnum1のnum2%を出力しますでは次
```
log()
```
```console.log()```以上。 では次、
```
query.single()
query.all()
```
は
```
document.queryselector()
document.queryselectorall()
```
と同じ では次、
```
root.square()
root.cube()
```
これは、平方根、立方根を返す
```
$.version
jfunction.version
```
バージョン
jfunction=$
```
$.function
```
追加された関数を配列として返す
```
$.number
```
追加関数の数を返す
```
portion.integer()
portion.decimal()
```
これは整数部分、小数部分を返す
```
get.year()
```
などは現在の時間
```
wait()
```
はミリ秒指定で待つ
```pass()```何もしない
```
parse(bool)
```
は文字列が"true"ならtrueを返し、それ以外ならfalseを返します
