import csv

data = {"CLASS": {}, "SECTOR": {}}
rowCount = 0


def census_reader(input):
    
    global rowCount
    with open(input) as csvFile:
        readCSV = csv.reader(csvFile)
        next(readCSV)
        for row in readCSV:
            areaClass = row[0]
            sector = row[4]
            res_cnt = row[9]
            if areaClass in data["CLASS"]:
                data["CLASS"][areaClass] += int(res_cnt)
            else:    
                data["CLASS"][areaClass] = int(res_cnt)
            if sector in data["SECTOR"]:
                data["SECTOR"][sector] += int(res_cnt)
            else:
                data["SECTOR"][sector] = int(res_cnt)
            rowCount += 1
    print("\n" + "Population by area class:")
    for key, value in data["CLASS"].items():
        print("{:12} {:10} People".format(key, value))
       
    print("\n" + "Population by city sector:")
    for key, value in data["SECTOR"].items():
        print("{:12} {:10} People".format(key, value))
        
    print("\n" + f"Total number of data rows: {rowCount}")
    return(data) 


def census_writer():
    areaStr = []
    sectorStr = []
    testReturn = {}
    for key, value in data["CLASS"].items():
        testReturn[key] = value
        areaStr.append("{:12} {:10} People \n".format(key, value))
    for key, value in data["SECTOR"].items():
        testReturn[key] = value
        sectorStr.append("{:12} {:10} People \n".format(key, value))
    with open("testfile.txt", "w") as file:
        file.write("Population by area class: \n")
        file.writelines(areaStr)
        file.write("\n" + "Population by city sector: \n")
        file.writelines(sectorStr)
        file.write("\n" + f"Total number of data rows: {rowCount}")
    return(testReturn)

# census_reader("test_csv.csv")
# census_writer()