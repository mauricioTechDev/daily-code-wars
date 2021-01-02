#     This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

# If the input is 0 or negative value, then you should return "00:00"

# Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

# Example
# If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

# Good luck! :D


def time_convert(num):
    if num <= 0:
        return '00:00'
    hour = 0
    min = 0
    print(num, 'num')
    
    while num >= 60:
        num-=60
        hour+=1
    min=num
    
    if min < 10 and hour < 10:
        return '0'+str(hour)+':'+'0'+str(min)
    elif min < 10 and hour >= 10:
        return str(hour)+':'+'0'+str(min)
    elif min >= 10 and hour < 10:
        return '0'+str(hour)+':'+str(min)
    else:
        return str(hour)+':'+str(min)

