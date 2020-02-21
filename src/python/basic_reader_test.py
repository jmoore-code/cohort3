import basic_reader
import pytest

# dummyJs = open("dummyJs.js", "r")

def test_fileReader():
    lineCount = basic_reader.fileReader("dummyJs.js")
    assert lineCount[0] == {3}
    elseCount = basic_reader.fileReader("dummyJs.js")
    assert elseCount[1] == {2}
    characterCount = basic_reader.fileReader("dummyJs.js")
    assert characterCount[2] == {31}