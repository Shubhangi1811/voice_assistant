import pyttsx3
import speech_recognition as sr
import eel
import time
import pywhatkit as kit
from engine.helper import *

def speak(text):
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[1].id)
    engine.setProperty('rate', 160)
    eel.DisplayMessage(text)
    engine.say(text)
    engine.runAndWait()

@eel.expose
def takecommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print('listening...')
        eel.DisplayMessage('listening...')
        r.pause_threshold =1
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source,10,6)
    
    try:
        print('recognizing...')
        eel.DisplayMessage('recognizing...')
        query = r.recognize_google(audio,language ="en-in")
        print(f"user said: {query}")
        eel.DisplayMessage(query)
        time.sleep(2)
    except sr.UnknownValueError:
        print("Speech recognition could not understand the audio.")
    except  Exception as e:
        print(f"An error occurred: {e}")
        return ""
    return query.lower()

@eel.expose
def takeAllCommands():
    try:
        query = takecommand()
        print(query) 
        if "open" in query:
            from engine.features import openCommand
            openCommand(query)
        elif "on youtube":
            PlayYouTube(query)
        else:
            print("Not running")
    except:
        print("Error")
    eel.ShowHood()

def PlayYouTube(query):
    search_term = extract_yt_term(query)
    speak("Playing "+ search_term + " on YouTube")
    kit.playonyt(search_term)

