import serial
import time
from datetime import datetime, timedelta

# Open a serial connection
ser = serial.Serial('COM8', 9600)  # Adjust the COM port based on your Arduino connection
# Wait for the Arduino to initialize
time.sleep(2)
current_datetime = datetime.now()
print(current_datetime)
print(current_datetime+timedelta(milliseconds=5000))

with open('arduino_data.txt', 'a') as file:
    try:
        while True:
            data = ser.readline().decode('utf-8').strip()
            if data:
                #print(data) # you can comment this one out
                data = data.split()
                print(f"{{\"timeStamp\":\"{current_datetime + timedelta(milliseconds=int(data[0]))}\", \"temp\":\"{data[1]}\", \"humidity\":\"{data[2]}\", \"sound\":\"{data[3]}\"}}")
                file.write(f"{{\"timeStamp\":\"{current_datetime + timedelta(milliseconds=int(data[0]))}\", \"temp\":\"{data[1]}\", \"humidity\":\"{data[2]}\", \"sound\":\"{data[3]}\"}},")
                file.flush()

    except KeyboardInterrupt:
        pass
    finally:
        # Close the serial connection and the file when done
        ser.close()