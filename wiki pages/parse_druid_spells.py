import re

file = open('druid-spells.html', 'r')
file = file.read()
file = file.replace('\n', '')

def print_property(name, data):
    if name == 'description':
        quote = '"'
    else:
        quote = "'"
    print("    " + name + ": " + quote + str(data) + quote + ",")

table_pattern = ('<table class="wikitable.*?</table>')

data = re.findall(table_pattern, file)

def ability_level_to_character_level(ability_level):
    return ability_level * 2 - 1

def print_spells():
    for level in range(8):
        spells_pattern = ('<tr>'
        '<td.*?<a.*?<img.*?src="(.*?)".*?></a></td>'
        '<td.*?><a href="(.*?)".*?>(.*?)</a>(?:.*?)?</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '</tr>')
        spells = re.findall(spells_pattern, data[level])
        for spell in spells:
            print('{')
            print_property('level', ability_level_to_character_level(level + 1))
            print_property('link', 'https://pillarsofeternity.fandom.com' + spell[1])
            print_property('imageLink', re.sub(r'/revision.*', '', spell[0]))
            print_property('name', spell[2].replace("'", "\\'"))
            print_property('effects', re.sub(r'/revision.*?"', '"', spell[3].replace("'", "\\'")))
            print_property('speed', spell[4].replace("'", "\\'"))
            print_property('duration', spell[5])
            print_property('interrupt', spell[6])
            print_property('range', spell[7])
            print_property('area', spell[8].replace("'", "\\'"))
            print_property('description', spell[9].replace("'", "\\'"))
            print('},')

print_spells()
