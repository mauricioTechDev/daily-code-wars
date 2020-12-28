#     Kevin is noticing his space run out! 
#     Write a function that removes the spaces from the values and 
#     returns an array showing the space decreasing. For example, 
#     running this function on the array ['i', 'have','no','space'] 
#     would produce ['i','ihave','ihaveno','ihavenospace'].

def spacey(array):
    dictionary = dict()
    for num in range(len(array)):
        dictionary[num] = array[0]
        
    for index in range(1, len(array)):
        for el in range(index, len(array)):
            dictionary[el]+=array[index]
    
    return dictionary.values()
    
