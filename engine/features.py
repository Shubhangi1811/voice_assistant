from playsound import playsound
import eel

@eel.expose
def PlayAssistantSound():
    music_dir = "www\\assets\\audios\\start_sound.mp3"
    playsound(music_dir)