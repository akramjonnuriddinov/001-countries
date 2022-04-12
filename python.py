thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

x = thistuple.count(5)
y = thistuple.index(8)

print("5 necha marta takrorlangani: ", x)
print("Birinchi kelgan 8 ning indexi: ", y)

print("List: ")
thislist = ["apple", "banana", "cherry"]
print("-1 - indexdagi qiymati", thislist[-1])

thislist[1] = "blackcurrant"
thislist.append("orange")
print(thislist)



thislist.sort()
print("Tartiblangan holatda: ")
print(thislist)

print("Elementlarni for yordamida chiqarish: ")
for x in thislist:
    print(x)


thislist.remove("apple")
print("Banan o'chirilgan qiymati:", thislist)