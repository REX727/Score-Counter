import time 
import os

def clear_console():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

clear_console()

def startcounting():
    time_l = 60
    for i in range(3):
        num_loop = 2 - i 
        for i in range(60):
            return(f"\n {num_loop} : {time_l}")
            time.sleep(1)
            time_l = time_l - 1
        time_l = 60
    while True:
        print("TIME UP")
        time.sleep(0.1)
        print("")
        time.sleep(0.1)
        clear_console()



a = startcounting

print(a)