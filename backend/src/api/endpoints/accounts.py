from fastapi import APIRouter
from database.db_manager import DBManager

router = APIRouter()
db = DBManager()

@router.get("/")
def get_accounts():
    accounts = db.cursor.execute("SELECT * FROM accounts").fetchall()
    return {"accounts": accounts}

@router.post("/add")
def add_account(phone: str, personality: str):
    db.add_account(phone, personality)
    return {"message": "Account added successfully"}
