#     The Story:
# Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

# Task Overview:
# You have to write a function that accepts three parameters:

# cap is the amount of people the bus can hold excluding the driver.
# on is the number of people on the bus excluding the driver.
# wait is the number of people waiting to get on to the bus excluding the driver.
# If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.


def enough(cap, on, wait):
    totolPassengers = on + wait
    availableSpots = cap - totolPassengers
    return availableSpots * -1 if availableSpots < 0 else 0
    
 if "__name__" == "__will-there-be-enough-space__":
     enough(10, 5, 5) # He can fit all 5 passengers return 0
     enough(100, 60, 50) # He can't fit 10 out of 50 waiting
     
