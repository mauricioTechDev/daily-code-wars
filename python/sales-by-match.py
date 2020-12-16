
# Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

# Function Description

# Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

# sockMerchant has the following parameter(s):

# n: the number of socks in the pile
# ar: the colors of each sock

def pairs(ar):
    dictionary = {}
    count = 0
    for el in ar:
        # print(dictionary[el])  
        if el in dictionary:
            if len(dictionary[el]) < 2:
                dictionary[el].append(el)
                if len(dictionary[el]) == 2:
                    count+= 1
                    dictionary[el] = []
        else:
            dictionary[el] = [el]
    return count

if __name__ == "__sales-by-match__":
    print(pairs(ar))
                 

