from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

db = SQLAlchemy()


#models
class Project(db.Model):
    name: Mapped[str] = mapped_column(primary_key=True)
    description: Mapped[str] = mapped_column()