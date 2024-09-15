from fastapi import FastAPI
from pydantic import BaseModel

from ipynb.fs.full.model import predict


app = FastAPI()

@app.get('/')
async def root():
  return {"message": "home page 🥳🥳"}

class Review(BaseModel):
  review: str


@app.post('/predict')
async def _(body: Review):
  liked = predict(body.review)
  return {"liked": str(liked)}
