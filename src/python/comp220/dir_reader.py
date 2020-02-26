from datetime import datetime
from os import scandir

def convert_date(timestamp):
    d = datetime.utcfromtimestamp(timestamp)
    formated_date = d.strftime('%d %b %Y')
    return formated_date

def get_files():
    fileCount = 0
    totalSize = 0
    dir_entries = scandir("C:\code\cohort3\src\python\comp220")
    print("File name{:20} Last Modified{:6} Size{:10}".format(":", ":", ":"))
    for entry in dir_entries:
        if entry.is_file():
            info = entry.stat()
            fileCount += 1
            totalSize += info.st_size
            print("{:30} {:10} {:10} KB".format(entry.name, convert_date(info.st_mtime), info.st_size))
    print(f"Number of files: {fileCount}, Total File Size: {totalSize} KB")

get_files()

