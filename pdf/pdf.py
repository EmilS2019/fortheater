import PyPDF2
import re

pdf = open('pdf.pdf', 'rb')
reader = PyPDF2.PdfFileReader(pdf)

#Displays the whole PDF
#for i in range(reader.numPages):
#    print(reader.getPage(i).extractText())

pdfpage = reader.getPage(7).extractText()
pageArr = pdfpage.split()

actors = ["DROTTNINGEN", "SPRINTER-JO", "GNÄGGIS", "HOVIS", "RUNNER-FLO"]
repliker = {}
for actor in actors:
    repliker[actor] = []


def scanPage():
    currentActor = "SPRINTER-JO"

    for i in range(len(pageArr)):
        
        add=True
        for actor in actors:
            #If the word scanned is the first letter in the actors name 
            #i.e "RUNNER" in "RUNNER-FLO"
            actorSplit = actor.split('-')
            if (pageArr[i] == actorSplit[0]):
                #Find out if there's a second part of the name
                #This is done because the PDF reader put the names on seperate
                #lines for some reason i.e:
                #RUNNER
                #-
                #FLO

                try:
                    actorSplit[1]
                except IndexError:
                    currentActor = actor
                else:
                    i+=2
                    currentActor=actorSplit[0] + "-" + pageArr[i]


                add=False
                # print(actor)
                break

        if (add):
            repliker[currentActor].append(pageArr[i])

def arrayAtIndexHasWord(item, name):
    if item == name:
        return True
    else:
        return False


if __name__ == "__main__":

    scanPage()
    print(repliker)