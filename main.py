# main.py
# by FuchsCrafter
# license: cc-by

def sleep(time): # Function
    try:
        tmp = int(time)
        tmp = tmp*1000
        basic.pause(tmp)
    except:
        print("Error: Cant convert " + time + " to a number!")
        basic.show_string("Error: Cant convert " + time + " to a number!") # Message if you enter a string
    