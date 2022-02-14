class Cricket:
    def __init__(self):
        self.cricketList = []

    def printCricket(self):
        print(self.cricketList)

    def addCricket(self, newCrickettring):
        self.cricketList.append(newCrickettring)

    def changeList(self):
        self.cricketList = tuple(self.cricketList)

print('x')

x = Cricket()

x.printCricket()

x.addCricket('Pearl')
x.printCricket()
x.addCricket(("Ludwiq", "Tama", "Slingerland"))
x.printCricket()
x.addCricket({'cricketName':'Mapex','type':'black widow'})
x.printCricket()
x.addCricket(1)
x.printCricket()

x.changeList()
x.printCricket()