from fastapi import APIRouter

router = APIRouter()

@router.post("/start")
def start_automation(account_id: int):
    # Здесь будет запуск автоматизации
    return {"message": f"Automation started for account {account_id}"}
