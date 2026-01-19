from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model (what frontend will send)
class VideoRequest(BaseModel):
    url: str

@app.get("/")
def root():
    return {"status": "backend alive"}

@app.post("/generate-clips")
def generate_clips(data: VideoRequest):
    print("Received URL:", data.url)
    return {
        "message": "YouTube link received successfully",
        "received_url": data.url
    }
