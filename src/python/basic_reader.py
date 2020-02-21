

def fileReader(inputOpen):
    input = open(inputOpen, "r")
    lineCount = 0
    elseCount = 0
    charCount = 0
    if input.mode == "r":

        lines = input.readlines()
        for line in lines:
            lineCount += 1

            words = line.split()
            for word in words:
                charCount += len(word)
                if word == "else":
                    elseCount += 1

        
        print(f"Number of lines in file: {lineCount}")
        print(f"Number of else statements: {elseCount}")
        print(f"Number of characters: {charCount}")
    
    return [{lineCount}, {elseCount}, {charCount}]
    input.close()

fileReader("functions.js")