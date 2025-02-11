from fastapi import APIRouter
from analytics.performance_analyzer import PerformanceAnalyzer
from database.db_manager import DBManager

router = APIRouter()
db_manager = DBManager()
analyzer = PerformanceAnalyzer(db_manager)

@router.get("/")
def get_report():
    report = analyzer.generate_report()
    return {"report": report}
