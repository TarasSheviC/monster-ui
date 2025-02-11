from pydantic import BaseModel

class Account(BaseModel):
    id: int
    phone: str
    personality: str
    friends_count: int
    posts_count: int
    comments_count: int
