# class NewLan:
#     def __init__(self, txt):
#         self.txt = txt  # Initialize with text

#     def real(self):
#         return self.txt

#     def censor(self):
#         # Apply the transformation by reducing each character's ASCII value by 4
#         censored = ''.join(chr(ord(i) - 4) for i in self.txt)
#         return censored

#     def uncensor(self):
#         # Reverse the transformation by increasing each character's ASCII value by 4
#         uncensored = ''.join(chr(ord(i) + 4) for i in self.txt)
#         return uncensored


# txt = ('Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. '
#        'At the age of 18, he married Anne Hathaway, with whom he had three children: '
#        'Susanna, and twins Hamnet and Judith.')

# language = NewLan(txt)



# print(language.real())


# x = []
# y = []
# for i in txt:
#     x.append(chr(ord(i) - 4))
# x = ''.join(x)

# for i in x:
#     y.append(chr(ord(i) + 4))
# y = ''.join(y)



# int, float, str, boolean არის მონაცემთა ტიპები 

# int() _ მთელი რიცხვები მაგ:1 2 3 4 5 6 7 8 9...
# float() _ ათწილადები მაგ:1.5 , 1.21 , 9.209...
# str() _ ყველაფერი რაც არის ბრჭყალებში "" , ''
# boolean _ True-სიმართალე და False-სიცრუე


x = 1  # int(ინტეჯერი) რადგან მთელი რიცხვია
y = 1.2 # float რადგან წილადია
z = "1a?" # string რადგან პრწყალებშია
w = True # boolean რადგან True 
u = False # boolean რადგან False
knows_programming = False # boolean რადგან False
sum1 = 2 + 2 #int რადგან 2 + 2 = 4 და ეა არის მთელი რიცხვი
sum2 = 5 + 1 #int რადგან 5 + 1 = 6 არის მთელი რიცხვი
print(sum1 + sum2) #int
goa = 1.5 + 1 #float რადგან 1.5 + 1 = 2.5 რაც არის წილადი
luka = 1.2 + 1.8 #float რადგან float-ის ჯამი უდრის float-ს
gio = 1 + 2 #int
# type() მონაცემთა ტიპს ამოწმებს 
print(type(luka))
print(type(gio))

age = '12'

# // == int(float)


o = int(age)/5


print(int(o))


print(type(age))
print(type(1))
print(type(True))

x = "3233"
loa =[5,7,8,9,12,15,18,21,24,25,26,30,31,32,33,35,36,40,42,44,46,48 ]
print(len(loa))

def discount(param):
    if type(param) != int:
        return "Invalid input"
    elif param < 18:
        return "You get discount"
    else:
        return "You dont get a discount"
    
x= 90
print(discount(x))
    
def sum1(num):
    x = []
    for i in range(num + 1):
        x.append(i)
    return sum(x)

print(sum1(8))

x = ["apple" , "pear" , "orange"]
print(x)
print(" ".join(x))

# pop = "sAba gio"
# print(pop.upper())
# print(pop.lower())
# print(pop.capitalize())
# start end step
for i in range(1,10,2):
    print(i)

def change(string):
    for i in range(len(string)):
        if i % 2 == 0:
            string[i]
    return string


print(change("laptop"))
print("hello"[4])

print(type(gio))

x = " "
print("saba" + "da" + "gio")

numbers = [1,2,5,64,3,8,6,53,1,6]

print(sorted(numbers))

number = "hello"
print(type(number))

# int() = აქცევს string-ს integer-ად
# str() = ცვლადს აქცევს string-ად
# type() მონაცემთა ტიპს ამოწმებს 

number = 5
print("Result: " + str(number))

print("Gio" == "gio")

print("Giorgi " + "Giorgobiani")

#if _ თუ


# print(2<x)

# number = input("შემოიტანეთ რიცხვი: ")

if number == "11":
    print("შენ ხარ სწორი")
else:
    print("შენ არ ხარ სწორი")


class Car:
    def __init__(self,brand,color,hp,year):
        self.color = color
        self.brand = brand
        self.hp = hp
        self.year = year

class Car1:
    def __init__(self,brand,color,hp,year):
        self.color = color 
        self.brand = brand
        self.hp = hp
        self.year = year

car1 = Car("Mercedes","White","1000",2024)
car2 = Car1(Car("Mercedes","White","1000",2024),"White","1000",2024)
print(car2.brand.color)

# name = input("Enter your name: ")
# print(name)

num1 = 15 
num2 = "15"
print(num1+int(num2))

# integer string boolean float

# int = 1, 2, 3, 4, 5, 6....
# float = 1.2 , 3.7, 8.9, 2.4  ...
# str = "12", "1.6" , "zura", '12', 'luka'
# boolean = True False


print(int(10 / 2))
print(10 // 2)
print("hi"*5)

print(2<3 and 3>8)

# num1 = input("enter a first number: ")
# num2 = input("enter a second number: ")

# if int(num1) == int(num2):
#     print(num1 + " is equel to " + num2)
# elif int(num1) > int(num2):
#     print(num1 + " bigger than " + num2)
# else:
#     print(num2 + " bigger than " + num1)
print(not(5<5))
#     not False