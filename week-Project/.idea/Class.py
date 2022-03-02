import pytest

class Cricket:
    def __init__(self):
        self.cricketList = [1,2,3,4]
    def addCricket(self, string):
        self.cricketList.append(string)
        return self.cricketList
    def printCricket(self):
        print(self.cricketList)
    def searchCricket(self, string):
        for item in self.cricketList:
           if(string == item):
                return(item)
print('x')

x = Cricket()

x.addCricket(( "Orlando Loins"))
x.printCricket()


@pytest.fixture
def cricket():
    cricket = cricket()
    return cricket

def testCanCallCricket():
    Cricket()

def testCanAddString(cricket):
    # cricket = Cricket()
    assert cricket.addCricket("Orlando Loins") == [1,2,3,4,"Orlando Loins"]

def testAllCricket(cricket):
    # cricket = Cricket()
    cricket.printCricket()

def testItemSearch(cricket):
    # cricket = Cricket()
    cricket.addCricket("Orlando Loins")
    assert cricket.searchCricket("Orlando Loins") == "Orlando Loins"