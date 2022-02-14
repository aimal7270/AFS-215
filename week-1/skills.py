def getNum(number):
    if number == 1:
        return "1"
    elif number == 2:
        return "2"
    elif number == 3:
        return "Pepsi"
    elif number == 5:
        return "Coke"
    elif number % 3 == 0 and number % 5 == 0:
        return "PepsiCoke"
    elif number % 3 == 0:
        return "Pepsi"
    elif number % 5 == 0:
        return "Coke"
    
print(getNum(1))
print(getNum(2))
print(getNum(3))
print(getNum(5))
print(getNum(6))
print(getNum(10))
print(getNum(15))