import PyPDF2
import re

pdf = open('pdf.pdf', 'rb')
reader = PyPDF2.PdfFileReader(pdf)

#for i in range(reader.numPages):
#    print(reader.getPage(i).extractText())

print(reader.getPage(9).getContents())