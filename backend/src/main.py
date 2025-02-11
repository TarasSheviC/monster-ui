from fastapi import FastAPI
from api.endpoints import accounts, analytics, automation

app = FastAPI(title="VK Automation API")

# Подключение эндпоинтов
app.include_router(accounts.router, prefix="/accounts", tags=["Accounts"])
app.include_router(analytics.router, prefix="/analytics", tags=["Analytics"])
app.include_router(automation.router, prefix="/automation", tags=["Automation"])

@app.get("/")
def read_root():
    return {"message": "VK Automation API is running"}
