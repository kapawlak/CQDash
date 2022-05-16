from time import sleep
import os

batcmd="git pull"

while True:
        try:
                os.system("git pull")
                sleep(5*60)
        except KeyboardInterrupt:
                break
        except:
                continue

