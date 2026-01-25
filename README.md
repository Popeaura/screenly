Here’s a README you can drop into your project and tweak as you like.

***

# Screenly – Candidate Evaluations Dashboard

Screenly is a full‑stack web app for managing candidate evaluations. It uses a Django REST API (with JWT auth) and a React frontend with a dark UI, filtering, sorting, and a stats dashboard.

## Tech Stack

- **Backend:** Django, Django REST Framework, Simple JWT  
- **Frontend:** React, React Router, Axios, TailwindCSS (utility classes)  
- **Auth:** JWT access & refresh tokens  
- **Database:** SQLite (default Django DB, can be swapped for Postgres/MySQL)

***

## Features

- Secure login with username/password and JWT tokens  
- Evaluations CRUD:
  - Create, edit, delete evaluations
  - Fields: candidate name, role title, status, score, timestamps
- Powerful evaluations table:
  - Filter by status (pending, in_review, completed, rejected)
  - Sort by ID, candidate name, status, or score
  - Dark theme with status pills and responsive layout
- Dashboard:
  - Total evaluations
  - Count per status
  - Average score
- UX polish:
  - Toast notifications for create/update/delete
  - Friendly empty state when there are no evaluations
  - Protected routes and logout

***

## Project Structure

Backend (Django):

- `backend/`
  - `screenly_api/`
    - `settings.py` – Django & DRF configuration
    - `urls.py` – root URL routing (`/api/`, `/admin/`, `/api/token/`, etc.)
  - `evaluations/`
    - `models.py` – `Evaluation` model
    - `serializers.py` – `EvaluationSerializer`
    - `views.py` – `EvaluationViewSet`, `evaluation_stats`
    - `urls.py` – router for `/api/evaluations/` + `/api/evaluations/stats/`
    - `admin.py` – admin registration for `Evaluation`

Frontend (React):

- `frontend/`
  - `src/`
    - `api/evaluations.js` – Axios client, CRUD + stats calls
    - `components/`
      - `Navbar.js` – top navigation + logout
      - `EvaluationForm.js` – create/edit modal form
      - `EvaluationRow.js` – single table row with edit/delete
      - `ProtectedRoute.js` – guards authenticated routes
      - `Toast.js` – simple toast notifications
    - `pages/`
      - `LoginPage.js` – login form (calls `/api/token/`)
      - `EvaluationsListPage.js` – main table UI
      - `DashboardPage.js` – stats cards & overview
    - `App.js` – routes definition
    - `index.js` – app entrypoint

***

## Getting Started

### 1. Backend Setup

From the `backend` folder:

```bash
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create a superuser:

```bash
python manage.py createsuperuser
```

Start the dev server:

```bash
python manage.py runserver
```

By default this runs on `http://127.0.0.1:8000/`.

#### API Endpoints

- `POST /api/token/` – obtain JWT access & refresh tokens  
- `POST /api/token/refresh/` – refresh access token  
- `GET/POST /api/evaluations/` – list/create evaluations (auth required)  
- `GET/PUT/DELETE /api/evaluations/<id>/` – detail/update/delete (auth required)  
- `GET /api/evaluations/stats/` – total count, per‑status counts, average score (auth required)  
- `GET /admin/` – Django admin

### 2. Frontend Setup

From the `frontend` folder:

```bash
npm install
npm start
```

This starts the React app on `http://localhost:3000/`.

Make sure the API base URL in `src/api/evaluations.js` matches your backend:

```javascript
const API_BASE_URL = "http://127.0.0.1:8000/api";
```

***

## Usage Flow

1. Visit `http://127.0.0.1:8000/admin/` and log in as the superuser.  
2. Optionally create some `Evaluation` rows via the admin UI.  
3. Go to `http://localhost:3000/login` and log in with the same credentials.  
4. You’ll be redirected to `/evaluations`:
   - View, filter, sort evaluations
   - Create new evaluations via the “+ Create Evaluation” button
   - Edit or delete existing rows (with toasts for feedback)
5. Open `/dashboard` to see:
   - Total evaluations
   - Counts per status
   - Average score across evaluations

***

## Authentication Details

- On login, the frontend calls `POST /api/token/` with `{ username, password }`.  
- The response includes `access` and `refresh` JWTs.  
- Tokens are stored in `localStorage`:
  - `accessToken` – used in `Authorization: Bearer <token>` header for all API calls
  - `refreshToken` – can be used later to refresh the access token  
- Protected routes (`/evaluations`, `/dashboard`) are wrapped in `ProtectedRoute`, which redirects to `/login` if no access token is present.

***

## Customization Ideas

- Swap SQLite for Postgres in `settings.py`.  
- Extend `Evaluation` with more fields (e.g., stage, notes, interviewer).  
- Add per-user filtering (only show evaluations created by the logged-in user).  
- Implement more sophisticated token refresh + automatic logout on expiry.  
- Add charts (e.g., status distribution, scores over time) to the dashboard.

***

## License

You can add any license you prefer here (MIT, Apache 2.0, etc.).

***

If you want, I can also generate a shorter “copy‑paste” README optimized for GitHub with badges and screenshots.
## Status
🚧 Work in progress
