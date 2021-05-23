import re

file = open('barbarian-abilities.html', 'r')
file = file.read()
file = file.replace('\n', '')

def print_property(name, data):
    if name == 'description':
        quote = '"'
    else:
        quote = "'"
    print("    " + name + ": " + quote + str(data) + quote + ",")

pattern = ('<tr>'
'<td.*?src="(.*?)".*?</td>'
'<td.*?><a.*?>(.*?)</a>(?:.*?)?</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'</tr>')

data = re.findall(pattern, file)
formatted = []
fields_number = 2
for group in data:
    name = group[1]
    name = name[0].lower() + name[1:]
    name = name.replace(' ', '')
    link = group[0]
    link = re.sub(r'/revision.*', '', link)
    print('{')
    print_property('name', name)
    print_property('imageLink', link)
    print_property('level', group[2])
    print_property('activation', group[3])
    print_property('effects', group[4])
    print_property('speed', group[5])
    print_property('duration', group[6])
    print_property('area', group[7])
    print_property('description', group[8])
    print('},')
