from database.db_manager import DBManager

class AnalyticsService:
    def __init__(self, db_manager: DBManager):
        self.db_manager = db_manager

    def generate_report(self):
        # Генерация аналитического отчета
        return self.db_manager.cursor.execute("SELECT * FROM accounts").fetchall()
