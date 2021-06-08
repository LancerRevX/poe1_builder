import re

file = open('wizard-spells.html', 'r')
file = file.read()
file = file.replace('\n', '')

def ability_level_to_character_level(ability_level):
    return ability_level * 2 - 1


code = 'export default [\n'

def print_property(name, data):
    global code
    if name == 'description':
        quote = '"'
    else:
        quote = "'"
    code += "        " + name + ": " + quote + str(data) + quote + ",\n"


table_pattern = ('<table class="wikitable.*?</table>')

data = re.findall(table_pattern, file)

file = open('wizard-spells.js', 'w')
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
    '</tr>')
    spells = re.findall(spells_pattern, data[level])
    for spell in spells:
        code += '    {\n'
        print_property('level', ability_level_to_character_level(level + 1))
        print_property('link', 'https://pillarsofeternity.fandom.com' + spell[1])
        print_property('imageLink', re.sub(r'/revision.*', '', spell[0]))
        print_property('name', spell[2].replace("'", "\\'"))
        print_property('speed', spell[3])
        print_property('range', spell[4].replace("'", "\\'"))
        print_property('area', spell[5])
        print_property('duration', spell[6])
        print_property('effects', spell[7].replace('"/wiki', '"https://pillarsofeternity.fandom.com/wiki'))
        print_property('description', spell[8].replace("'", "\\'").replace('"', '\\"'))
        code += '    },\n'
code += ']'

file.write(code)
file.close()
