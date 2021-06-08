import re

file = open('rogue-abilities.html', 'r')
file = file.read()
file = file.replace('\n', '')

def print_property(name, data):
    if name == 'description':
        quote = '"'
    else:
        quote = "'"
    print("    " + name + ": " + quote + str(data) + quote + ",")

pattern = ('<tr>'
'<td[^>]*><a[^>]*><img[^>]*src="(.*?)"[^>]*></a></td>'
'<td><a href="(.*?)".*?>(.*?)</a>(?:.*?)?</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'<td.*?>(.*?)</td>'
'</tr>')

data = re.findall(pattern, file)

def print_abilities_list():
    for group in data:
        #name = group[1]
        #name = name[0].lower() + name[1:]
        #name = name.replace(' ', '')
        link = 'https://pillarsofeternity.fandom.com' + group[1]
        image_link = group[0]
        image_link = re.sub(r'/revision.*', '', image_link)
        print('{')
        print_property('name', group[2])
        print_property('link', link)
        print_property('imageLink', image_link)
        print_property('level', group[3])
        print_property('activation', group[4])
        print_property('effects', re.sub(r'/revision.*?"', '"', group[7].replace("'", "\\'")))
        print_property('speed', group[5])
        print_property('duration', group[6])
        print_property('description', group[8])
        print('},')


def print_abilities_translations():
    for group in data:
        name = group[1]
        nameLowerCase = name
        nameLowerCase = nameLowerCase[0].lower() + nameLowerCase[1:]
        nameLowerCase = nameLowerCase.replace(' ', '')
        print(nameLowerCase + ": '" + name + "',")


print_abilities_list()
