word = input()

count = 0
if len(word) < 4:
    # 입력된 글자의 수가 4보다 작으면 무조건 1단어
    print(1)
elif len(word) >= 4 and len(word) < 6:
    # 입력된 글자의 수가 4보다 크거나 같고 6보다 작으면 무조건 2단어이다.
    print(2)
else:
    # 입력된 글자의 수가 6보다 큰 경우
    # dz= 부터 확인해서 count의 초기값으로 설정 (유일하게 3글자임)
    count = word.count('dz=')

    # word에서 dz= 제거    
    if word.find('dz=') != -1:
        word = word.replace('dz=', '')
    
    print(word)
    # 제거되지 않은 단어는 무조건 2글자이다.
    # 따라서 남은 단어의 길이는 무조건 2의 배수이다. 
    count += len(word) / 2
    print(count)