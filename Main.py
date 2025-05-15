'''
REX KWONG
2025 - 5 - 14

-------------
Drone Soccer Score Manual Counter
'''
from turtle import Turtle, Screen


font2 = ('Arial', 50, 'bold')

marker = Turtle(visible=False)
marker.penup()

screen = Screen()
screen.bgcolor("black")
screen.title("CHANGE FONT SIZE")
screen.setup(700, 700)

marker.goto(-150, 0)
marker.color('red')
marker.write("BIGGER", font=font2)

screen.onkey(screen.bye, "Escape")

screen.listen()

screen.mainloop()