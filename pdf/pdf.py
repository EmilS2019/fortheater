import PyPDF2
import re

pdf = open('pdf.pdf', 'rb')
reader = PyPDF2.PdfFileReader(pdf)

#Displays the whole PDF
#for i in range(reader.numPages):
#    print(reader.getPage(i).extractText())

pdfpage = reader.getPage(7).extractText()
pageArr = pdfpage.split()

repliker = {"DROTTNINGEN": []}
actors = ["DROTTNINGEN" "SPRINTER", "GNÄGGIS", "HOVIS", "RUNNER"]



def scanPage():
    # currentlyDrottning = False
    currentActor = ""

    for i in range(len(pageArr)):
        
        for actor in actors:
            if (pageArr[i] == actor):
                currentActor = actor
                break
        
        if arrayAtIndexHasWord(pageArr[i], "DROTTNINGEN"):
            print("hi")
            # currentlyDrottning = True
        elif pageArr[i] == "SPRINTER" or pageArr[i] == "GNÄGGIS" or pageArr[i] == "HOVIS" or pageArr[i] == "RUNNER":
            print("hi")
            # currentlyDrottning = False
        elif False:
            repliker["DROTTNINGEN"].append(pageArr[i])

def arrayAtIndexHasWord(item, name):
    if item == name:
        return True
    else:
        return False


if __name__ == "__main__":

    scanPage()
    print(repliker)