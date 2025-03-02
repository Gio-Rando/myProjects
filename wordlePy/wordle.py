import random

def wordle():
    words = ['hello', 'grape', 'mouse', 'steal', 'phone', 'paper', 'pause', 'plays', 'prize', 'scote', 'chair', 'table', 'close', 'apple', 'grape', 'house', 'lemon', 'queen', 'river', 'water', 'yacht', 'zebra', 'cloud', 'dance', 'earth', 'honey', 'ocean', 'quiet', 'stone', 'arrow', 'night', 'paper', 'quilt', 'table', 'unity', 'glass', 'jewel', 'music', 'pearl', 'shell', 'tower']
    word = random.choice(words).upper()
    y = ['_'] * len(word) 
    while True:
        l = input('Letter: ').upper()
        if len(l) == 1 and l.isalpha(): 
            found = False
            for i in range(len(word)):
                if l == word[i]:
                    y[i] = l 
                    found = True
            if not found:
                print("Incorrect guess!")
            
            z = "".join(y)
            if '_' not in y:
                return f"You have won! The word was {word}"
            print(f"Current word: {z}")
        else:
            print("Please enter a valid single letter.")


print(wordle())