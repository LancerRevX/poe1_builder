import re

file = open('chanter-abilities.html', 'r')
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
    if ability_level == 1:
        return 1
    elif ability_level == 2:
        return 5
    elif ability_level == 3:
        return 9
    elif ability_level == 4:
        return 13
    elif ability_level == 5:
        return 15

def print_phrases():
    for level in range(5):
        phrase_pattern = ('<tr>'
        '<td.*?<a.*?<img.*?src="(.*?)".*?></a></td>'
        '<td.*?><a href="(.*?)".*?>(.*?)</a>(?:.*?)?</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '<td.*?>(.*?)</td>'
        '</tr>')
        phrases = re.findall(phrase_pattern, data[level])
        for phrase in phrases:
            print('{')
            print_property('level', ability_level_to_character_level(level + 1))
            print_property('link', 'https://pillarsofeternity.fandom.com' + phrase[1])
            print_property('imageLink', re.sub(r'/revision.*', '', phrase[0]))
            print_property('name', phrase[2].replace("'", "\\'"))
            print_property('area', phrase[3])
            print_property('effects', phrase[4].replace("'", "\\'"))
            print_property('duration', phrase[5])
            print_property('linger', phrase[6])
            print_property('description', phrase[7].replace("'", "\\'"))
            print('},')

def print_invokations():
    for level in range(5, 10):
        invokation_pattern = ('<tr>'
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
        invokations = re.findall(invokation_pattern, data[level])
        for invokation in invokations:
            print('{')
            print_property('level', ability_level_to_character_level(level - 4))
            print_property('link', 'https://pillarsofeternity.fandom.com' + invokation[1])
            print_property('imageLink', re.sub(r'/revision.*', '', invokation[0]))
            print_property('name', invokation[2].replace("'", "\\'"))
            print_property('effects', invokation[3].replace("'", "\\'"))
            print_property('speed', invokation[4])
            print_property('duration', invokation[5])
            print_property('interrupt', invokation[6])
            print_property('range', invokation[7])
            print_property('area', invokation[8])
            print_property('description', invokation[9])
            print('},')

print_phrases()
