import random
def create_links():
    author = [i for i in range(1,11)]
    decade = [i for i in range(1,6)]
    genre = [i for i in range(1,11)]
    piece = [i for i in range(1,81)]
    collection = [i for i in range(1,6)]
    editions = [i*2+1 for i in range(0,40)]
    editor = [i for i in range(1,11)]
    links = []
    for p in piece:
        row = {
            'author': random.choice(author),
            'decade': random.choice(decade),
            'genre': random.choice(genre),
            'edition': p if p in editions else 0,
            'collection': random.choice(collection),
            'editor': random.choice(editor),
            'piece': p,
        }
        links.append(row)
    return links

def print_links(links): 
    print("a,d,g,edition,c,e,p")
    for l in links:
        print(f"\
{l['author']:02d},\
{l['decade']:02d},\
{l['genre']:02d},\
{l['collection']:02d},\
{l['editor']:02d},\
{l['edition']:02d},\
{l['piece']:02d}")

def sql_links(links):
    print("BEGIN TRANSACTION;")
    for l in links:
        vals = [ str(l['author']), str(l['decade']), str(l['genre']), str(l['collection']), str(l['editor']), str(l['edition']), str(l['piece']) ]
        print(f"INSERT INTO links VALUES({','.join(vals)});")
    print("COMMIT;")

def auto():
    sql_links(create_links())
