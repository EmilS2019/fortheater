import PyPDF2
import re

pdf = open('pdf.pdf', 'rb')
reader = PyPDF2.PdfFileReader(pdf)

actors = ["KUNGEN", "DROTTNINGEN", "SPRINTER-JO", "RUNNER-FLO", "RUNNER-JO", "HOVIS", 
"GNÄGGIS", "TORR-CLAES", "TORR-BERIT", "BÅNN-B", "BÅNN-C", "BÅNN-E", 
"BÅNDI", "FARM-ARIE", "FARM-GÄRY", "FARM-HARRY", "FARMOR", "DEN ANDRA DROTTNINGEN"]
repliker = {} 
for actor in actors: 
    repliker[actor] = [] 
 
currentActor = "KUNGEN" 
def scanPage(page): 
    global currentActor
    pageArr = page.split() 
    i = 0 
    while i < len(pageArr): 
        #Checks if there's a page number and if there is one, skip
        try: 
            int(pageArr[i])
        except ValueError:
            pass
        else:
            i+=1
 
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
                    if (actorSplit[0] == "familjen"):
                        print("here")
                    currentActor = actor
                else: 

                    if (actorSplit[1] == "familjen"):
                        print("here")

                    if (actorSplit[1]):
                        i+=2
                        currentActor = actorSplit[0] + "-" + pageArr[i]
                    else:
                        i+=1
                add=False
                break

        if (add):
            try:
                repliker[currentActor].append(pageArr[i])
            except KeyError:
                print("error at {}".format(currentActor))
                
        i+=1

def scanPDF(reader):
    i = 3
    while i <  reader.numPages:
        print(i)
        page = reader.getPage(i).extractText()
        scanPage(page)
        i+=1


if __name__ == "__main__":

    scanPDF(reader)
    for replik in repliker:
        print("{}: {}".format(replik, len(repliker[replik])))

