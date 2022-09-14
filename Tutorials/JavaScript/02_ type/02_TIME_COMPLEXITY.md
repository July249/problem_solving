# Ch 2-2. 시간 복잡도

## 1. Big O Notation

- 우리는 프로그램의 성능을 정확하게 알 수 있을까??

- 프로그램의 성능을 정확하게 파악하는 것은 불가능하다!

- 데이터의 양(x축)이 증가함에 따른 연산의 수(y축)의 증감폭을 상대적으로 나타낸 지표이다.

- O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

(상수시간, 로그시간, 선형시간, 선형로그시간, 이차시간, 지수시간, factorial 시간)

- Big O 표기법은 점근적 표기법을 따른다 (즉 approximately!)

### Big O 표기법의 4가지 규칙

1. 계수 법칙: 상수 k가 0보다 클 때 f(n)=O(g(n))이면 kf(n)=O(g(n))이다. n이 무한에 가까울 수록 k의 크기는 의미가 없어진다.

2. 합의 법칙: f(n)=O(h(n))이고 g(n)=O(p(n))이면 f(n)+g(n)=O(h(n))+O(p(n))이다. Big O는 더해질 수 있다.

3. 곱의 법칙: f(n)=O(h(n))이고 g(n)=O(p(n))이면 f(n) _ g(n)=O(h(n)) _ O(p(n))이다. Big O는 곱해질 수 있다.

4. 다항법칙: f(n)이 k차 다항식이면, f(n)은 O(n^k)이다.

### 핵심 요약!

1. 상수항은 무시한다.

2. 가장 큰 항 이외에는 무시한다.

## 2. 성능 측정 방법

1. Date 객체를 이용

```
const start = new Date().getTime();

//...

const end = new Date().getTime();
console.log(end - start);
```
