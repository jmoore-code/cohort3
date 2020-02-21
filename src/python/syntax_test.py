import syntax
import pytest


def test_allSizeReturns():
    retVal = syntax.size(-1)
    assert retVal == "negative"
    retVal = syntax.size(1)
    assert retVal == "small"
    retVal = syntax.size(18)
    assert retVal == "medium"
    retVal = syntax.size(20)
    assert retVal == "large"

def test_add():
    retVal = syntax.add(1,1)
    assert retVal == 2
    retVal = syntax.add(2,2)
    assert retVal == 4

def test_subtract():
    retVal = syntax.subtract(2, 1)
    assert retVal == 1
    retVal = syntax.subtract(3, 1)
    assert retVal == 2

def test_multiply():
    retVal = syntax.multiply(2, 2)
    assert retVal == 4
    retVal = syntax.multiply(3, 2)
    assert retVal == 6

def test_divide():
    retVal = syntax.divide(4, 2)
    assert retVal == 2
    retVal = syntax.divide(6, 2)
    assert retVal == 3

# working with array tests

def test_addToArray():
    retVal = syntax.addToArray(1)
    myArray = syntax.myArray
    assert retVal == "The number 1 has been added to the array"
    assert myArray[0] == 1

def test_showArrayState():
    syntax.myArray = []
    syntax.addToArray(0)
    syntax.addToArray(1)
    retVal = syntax.showArrayState()
    assert retVal == "01"

def test_totalArray():
    syntax.myArray = []
    syntax.addToArray(2)
    syntax.addToArray(1)
    retVal = syntax.totalArray()
    assert retVal == 3
    syntax.addToArray(1)
    retVal = syntax.totalArray()
    assert retVal == 4

def test_clearArray():
    syntax.myArray = []
    syntax.addToArray(2)
    syntax.addToArray(1)
    retVal = syntax.clearArray()
    assert retVal == 0

def test_myLookUp():
    retVal = syntax.myLookUp("BC")
    assert retVal == "British Columbia"
    retVal = syntax.myLookUp("AB")
    assert retVal == "Alberta"
    retVal = syntax.myLookUp("AZ")
    assert retVal == "That is not a valid province key"


def test_email():
    assert syntax.email("Larry", "Shumlich") == "larry.shumlich@evolveu.ca"
    assert syntax.email("Heiko", "Peters") == "heiko.peters@evolveu.ca"






