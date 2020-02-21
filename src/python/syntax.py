
def size(num):
    if num < 0:
        return "negative"
    elif num < 10:
        return "small"
    elif num < 20:
        return "medium"
    else:
        return "large"

# Basic Calculator


def add(num1, num2):
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def multiply(num1, num2):
    return num1 * num2


def divide(num1, num2):
    return num1 / num2


# Working with array functions
myArray = []


def addToArray(num):
    myArray.append(num)
    return f"The number {num} has been added to the array"


def showArrayState():
    string = ""
    for el in myArray:
        string += str(el)
    return string


def totalArray():
    x = sum(myArray)
    return x


def clearArray():
    myArray = []
    return len(myArray)


# Working with Dictionaries
myDictionary = {
    "BC": "British Columbia",
    "AB": "Alberta",
    "SK": "Saskatchewan",
    "MB": "Manitoba",
    "ON": "Ontario",
    "QC": "Quebec",
    "NB": "New Brunswick",
    "NS": "Nova Scotia",
    "PE": "Prince Edward Island",
    "NL": "Newfoundland and Labrador",
    "YT": "Yukon",
    "NT": "Northwest Territories",
    "NU": "Nunavut"
}


def myLookUp(provKey):
    if provKey in myDictionary.keys():
        return myDictionary[provKey]
    else:
        return "That is not a valid province key"


def email(first, last):
    firstLower = first.lower()
    lastLower = last.lower()
    return f"{firstLower}.{lastLower}@evolveu.ca"