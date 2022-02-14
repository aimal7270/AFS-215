def getNumber(number):
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

def testGetNumber():
    getNumber(1)
    getNumber(2)
    getNumber(3)
    getNumber(5)
    getNumber(6)
    getNumber(10)
    getNumber(15)