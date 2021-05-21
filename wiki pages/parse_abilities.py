import re

file = open('barbarian-abilities.html', 'r')
file = file.read()
file = file.replace('\n', '')

def print_property(name, data):
    print("    '" + name + "': '" + str(data) + "',")

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
    print('{')
    print_property('image link', group[0])
    print_property('ability name', group[1])
    print_property('level', group[2])
    print_property('activation', group[3])
    print_property('effects', group[4])
    print_property('speed', group[5])
    print_property('duration', group[6])
    print_property('area', group[7])
    print_property('description', group[8])
    print('},')
