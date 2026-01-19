import os
import yt_dlp
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class VideoRequest(BaseModel):
    url: str

@app.get("/")
def root():
    return {"status": "backend alive"}

@app.post("/generate-clips")
def generate_clips(data: VideoRequest):
    output_dir = "downloads"

    ydl_opts = {
        "outtmpl": f"{output_dir}/%(title)s.%(ext)s",
        "format": "mp4"
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([data.url])

        return {"message": "Video downloaded successfully"}

    except Exception as e:
        return {"error": str(e)}
