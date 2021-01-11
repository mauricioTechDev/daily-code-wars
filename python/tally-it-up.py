#     I'm creating a scoreboard on my game website, but I want the score to be displayed as 
#     tally marks instead of Roman numerals. Write a function that translates the numeric 
#     score into tally marks.

# My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break ( ) after each completed tally (5).

# Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score
        

def score_to_tally(score):
    tally = ['a', 'b', 'c', 'd', 'e']
    coll = 'e <br>'
    
    if score < 6:
        if score == 5:
            return coll
        else:
            return tally[score-1]  
    while score >= 6:
        score = score-5
        if score <= 5:
            if score == 5:
                coll += 'e <br>'
                break
            else:
                coll +=  tally[score-1]
                break
        else:
            coll += 'e <br>'
        
    return coll
