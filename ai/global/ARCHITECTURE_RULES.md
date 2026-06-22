# ARCHITECTURE_RULES.md

Architecture Rules:

General:
- Feature-first architecture preferred
- Separation of concerns
- Keep modules independent

Frontend:
- Components reusable
- Separate UI and business logic

Backend:
- Controllers thin
- Services handle business logic
- Repository optional when needed

Mobile:
- Feature-based structure
- Clean state management

Database:
- Normalize properly
- Index frequently queried columns
- Prevent N+1 queries