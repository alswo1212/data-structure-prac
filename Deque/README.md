# Deque

## 정의

double-ended-queue 의 줄임말로 queue 인데 끝부분이 2개인거다.

그래서 처음과 끝 양쪽으로 넣고 뺄 수 있다.

## 특징

0. 처음과 끝을 관리함(front, rear)
1. 양방향 삽입 및 삭제 가능
2. stack과 queue 의 기능 둘 다 지원
3. 삽입과 삭제가 빠름(O(1))
4. 구현 방법이 다양함(배열, 원형 배열, 이중 연결 리스트)

## 주요연산

- 뒤에 넣기(append, addLast, offerLast, push_back...)
- 앞에 넣기(appendleft, addFirst, offerFirst, push_front...)
- 뒤에서 빼기(pop, removeLast, pollLast, pop_back...)
- 앞에서 빼기(popleft, removeFirst, pollFirst, pop_front...)

## 활용사례

- 스케줄러의 work-stealing 알고리즘

  스레드 별로 자신의 대기열(deque)를 가지고 있고 본인작업은 front 에서 꺼내서 처리<br>
  자기 대기열이 비었으면 바쁜 스레드의 rear 에서 작업을 가져와서 처리

- 최대 크기 제한 큐(최근 본 상품)
- 슬라이딩 윈도우, 구간 최댓값 구하기
